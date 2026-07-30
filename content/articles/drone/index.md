---
title: "GPS-Denied Drone: VSLAM on a Jetson Orin Nano"
author: Pavel
date: 2026-07-16
description: "Build notes for a GPS-denied autonomous drone: Jetson Orin Nano + RealSense D455 + Isaac ROS VSLAM + PX4. Setup, IMU fix, PX4 firmware rebuild, and a troubleshooting Q&A."
tags: ["jetson", "drone", "vslam", "px4", "ros2", "realsense"]
categories: ["Articles"]
showToc: true
TocOpen: true
UseHugoToc: true
ShowWordCount: true
draft: false
---

Build log for a GPS-denied autonomous drone: **Jetson Orin Nano** running **NVIDIA Isaac ROS VSLAM** against an **Intel RealSense D455** stereo camera, feeding position estimates into a **PX4** flight controller (Pixhawk 2.4.8 clone) via MAVROS. Everything below is organized as a reference — jump to a section with the table of contents, or read top to bottom for the full build order: VSLAM setup → IMU fix → PX4 firmware → troubleshooting Q&A.

## Reference links

**General**

- [VSLAM setup tutorial (Andrew Bernas)](https://www.andrewbernas.com/docs/tutorials/robots/vslam/setup) — the base tutorial this build follows
- [librealsense issue #13591](https://github.com/realsenseai/librealsense/issues/13591)
- [Isaac ROS webinar series (NVIDIA)](https://gateway.on24.com/wcc/experience/elitenvidiabrill/1407606/3998202/isaac-ros-webinar-series)
- [YouTube walkthrough](https://www.youtube.com/watch?v=tV8jm8UKyPE)
- [PX4-ROS2-Gazebo-YOLOv8](https://github.com/monemati/PX4-ROS2-Gazebo-YOLOv8)

**PX4-specific videos**

- [PX4 setup video (timestamped)](https://www.youtube.com/watch?v=jxqWg7s5jv8&t=1259s)
- [YouTube walkthrough](https://www.youtube.com/watch?v=tV8jm8UKyPE) (same video linked above)

---

## 1. VSLAM 101 — Isaac ROS on the Jetson

### The layer cake

The setup has four layers, bottom to top:

```
[4] VSLAM / RealSense ROS nodes        ← the programs doing the work
[3] Docker container (isaac_ros-dev)   ← isolated Ubuntu with ROS 2 preinstalled
[2] JetPack / Ubuntu on the Jetson     ← the "host" OS you SSH into
[1] Jetson Orin Nano hardware + D455   ← physical stuff
```

### Yes, it's Docker — here's what `run_dev.sh` does

`run_dev.sh` starts a **Docker container**. Analogy: the Jetson is a house, and the container is a fully furnished workshop trailer parked inside the garage. The trailer comes with all tools pre-installed (ROS 2 Humble, Isaac ROS libraries, CUDA-ready builds) so NVIDIA doesn't have to worry about what's installed in the house. But the trailer is *not* a separate house — it shares the house's foundation and utilities:

- **Same kernel.** Docker doesn't virtualize the OS — containers share the host's Linux kernel. That's why a firmware/kernel fix done on the host (see the [IMU fix](#2-realsense-d455-imu-fix-jetpack-6x) below) works inside the container without repeating it.
- **Same USB devices.** The script runs the container with `--privileged`, so the D455 plugged into the Jetson is visible inside. That's how `realsense-viewer` in the container sees the camera.
- **Same network.** It uses `--network host`, meaning the container has no separate network — it *is* the Jetson's network. This matters hugely for ROS topics (below).
- **Same GPU.** `--runtime nvidia` passes the Orin's GPU through, so Isaac ROS's CUDA-accelerated VSLAM works.
- **Shared folder.** The `${ISAAC_ROS_WS}` folder on the host is *mounted* into the container at `/workspaces/isaac_ros-dev`. Same files, two doorways. Edit a file on the host, it changes in the container instantly. Files here survive container restarts; anything installed elsewhere inside the container (e.g. `apt install`) is lost when the container is removed.

So: **ROS runs inside the container**, and everything ROS-related should be done from inside it.

### Multiple terminals — the key trick

`run_dev.sh` is smart: the **first** run starts the container; **every subsequent run attaches a new shell into the same running container** (like opening another door into the same trailer). So the workflow is simply:

```bash
# Terminal 1 (on Jetson): start container, launch camera + VSLAM
./scripts/run_dev.sh -d ${ISAAC_ROS_WS}

# Terminal 2 (new SSH/terminal on Jetson): attach to SAME container
./scripts/run_dev.sh -d ${ISAAC_ROS_WS}
# → you land in the same environment, can run ros2 topic commands
```

You know you're inside when the prompt looks like `admin@<hostname>:/workspaces/isaac_ros-dev$`.

### Where are the topics? Container or host?

ROS 2 doesn't have a central server — nodes discover each other over the network via **DDS** (think: everyone in a room shouting "I publish /camera/imu!" and others listening). Because the container uses `--network host`, that "room" is the Jetson's whole network. Consequences:

- **From another container shell:** topics just work. This is the intended path.
- **From the host:** would work *if* ROS 2 Humble were installed on the host — but don't bother; it's redundant and version drift causes pain. Use the container.
- **From a laptop on the same LAN/Wi-Fi:** also works! Install ROS 2 Humble on the laptop, set the same `ROS_DOMAIN_ID` on both sides, and you can `ros2 topic echo` and run RViz on the laptop while the Jetson does the heavy lifting. This is how you monitor the drone in flight.

### Concrete VSLAM test session

```bash
# ── Terminal 1: camera + VSLAM ──
./scripts/run_dev.sh -d ${ISAAC_ROS_WS}
ros2 launch isaac_ros_visual_slam isaac_ros_visual_slam_realsense.launch.py
```

This launches the RealSense driver (publishes stereo infrared images + IMU) *and* the VSLAM node (consumes them, outputs pose). VSLAM = the drone watching wall corners and floor patterns slide across its vision, fusing that with the IMU's "feel" of acceleration, to compute "I moved 0.3 m forward" — GPS without GPS.

```bash
# ── Terminal 2: inspect ──
./scripts/run_dev.sh -d ${ISAAC_ROS_WS}

ros2 topic list                     # everything being published
ros2 node list                      # who's publishing it
ros2 topic hz /camera/infra1/image_rect_raw   # camera frame rate
ros2 topic echo /visual_slam/tracking/odometry   # ← THE OUTPUT: live pose
```

Pick the camera up and walk around — watch `position: x y z` in the odometry change. That's the magic moment: the Jetson knows where it is purely from vision + IMU.

Useful debugging commands, all from any container shell:

- `ros2 topic info <topic>` — who publishes/subscribes
- `ros2 topic hz <topic>` — is data actually flowing (the #1 debug tool)
- `rviz2` — 3D visualization; over SSH you'll want `ssh -X`, or run RViz on a laptop instead

### Mental model summary

The Jetson runs a Docker container — a pre-packaged Ubuntu with ROS 2 and NVIDIA's GPU-accelerated robotics stack, so nothing needs installing on the Jetson itself. The container shares the Jetson's kernel, USB, GPU, and network, so the RealSense camera and ROS's network discovery pass straight through. Inside, one launch file starts the camera driver and the VSLAM node; VSLAM fuses stereo video and IMU into a real-time position estimate published as a ROS topic. Any other terminal — another shell into the container, or a laptop on the same Wi-Fi — can subscribe to that topic.

### Where this goes next

VSLAM's odometry becomes the position source for the flight controller. Typically a small bridge node (MAVROS or the PX4 XRCE-DDS agent) forwards `/visual_slam/tracking/odometry` into PX4 as "external vision" data, PX4's EKF fuses it, and Position Hold mode works indoors with no GPS. Verify VSLAM quality first: walk the camera in a loop back to the start and check the reported position returns near zero. The next stage is the PX4 vision-odometry bridge — wiring TELEM2, setting the EKF2 vision parameters, and MAVROSPY feeding VSLAM pose into the flight controller.

### Follow-up notes from getting it running

**The missing package mystery.** Following the setup tutorial, `isaac_ros_visual_slam` isn't found — this isn't a missed step, **the setup page never installs it**. The tutorial installs it later, on the Flight Demo page, hidden inside `vslam_launch.sh`. That script runs `apt-get install ros-humble-isaac-ros-visual-slam ...` *every single launch*, then starts VSLAM.

Why every launch? Back to the trailer analogy: `apt install` inside the container puts tools on the trailer's own shelves, *not* in the shared workspace folder. Rebuild the trailer and the shelves are wiped. The script reinstalls each time as insurance. (Plain `apt-get` works because NVIDIA's Isaac ROS package repository comes pre-added inside the image.)

So the intended flow is:

```bash
# Terminal 1: inside container
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && ./scripts/run_dev.sh -b
cd ${ISAAC_ROS_WS}/VSLAM-UAV/vslam
./vslam_launch.sh          # installs packages + launches camera & VSLAM
```

**The invisible-topics trap: `ROS_DOMAIN_ID`.** This tutorial sets `ROS_DOMAIN_ID=1`. Think of DDS discovery as a walkie-talkie: the domain ID is the **channel number**. The launch script talks on channel 1, but a fresh terminal defaults to channel 0 — `ros2 topic list` shows nothing and it looks broken when it's actually fine. So in *every* new terminal, first:

```bash
export ROS_DOMAIN_ID=1
```

Then inspect away:

```bash
ros2 topic list
ros2 topic echo /visual_slam/tracking/odometry   # live pose
```

**RViz — seeing what VSLAM sees.**

```bash
cd ${ISAAC_ROS_WS}/src/isaac_ros_common && ./scripts/run_dev.sh -d ${ISAAC_ROS_WS}
export ROS_DOMAIN_ID=1
rviz2 -d ${ISAAC_ROS_WS}/VSLAM-UAV/vslam/vslam_realsense.cfg.rviz
```

The `-d` flag loads the tutorial's saved layout (camera feed, odometry trail, coordinate frames) instead of an empty window. RViz needs a monitor on the Jetson; over SSH it crawls. Alternatives: record with `ros2 bag record -a` and replay on a desktop, or run RViz on a laptop on the same Wi-Fi with `ROS_DOMAIN_ID=1` set.

**Hardware note.** The tutorial demands RealSense firmware **5.13.0.50** for this Isaac ROS image — the same version used to fix the `control_transfer` error (see the [IMU fix](#2-realsense-d455-imu-fix-jetpack-6x) below).

**Tell-your-friends version:** the tutorial's launch script apt-installs the VSLAM package inside the container on every run, because container-installed packages don't survive rebuilds — that's why it "wasn't found" at first. All ROS traffic lives on domain ID 1, a channel number every terminal must export or it sees an empty world. RViz with the provided config file visualizes the camera and the pose trail — on a monitor plugged into the Jetson, not over SSH.

**Where this leaves things:** camera works, firmware matches, VSLAM launches, its pose output can be inspected and visualized. Next milestones: IMU calibration + Allan variance parameter estimation (optional but good for a drone), then the PX4 side — wiring TELEM2, setting the EKF2 vision parameters, and MAVROSPY feeding VSLAM pose into the flight controller.

---

## 2. RealSense D455 IMU fix (JetPack 6.x)

Symptom: `control_transfer returned error ... number: 11` spam, no working IMU data from the D455.

This is a known JetPack 6.x issue, and there are working fixes.

**Root cause:** NVIDIA's tegra kernel ships with HID sensor support disabled (`CONFIG_HID_SENSOR_HUB is not set`), so librealsense can't talk to the D455's IMU (index 768 = the HID/motion-module endpoint). The libusb fallback then spams the error. It's not a cable/port problem.

**Solutions, in order of preference:**

1. **Install the missing HID kernel modules (proper fix).** JetsonHacks provides tooling and RealSense patches:
   - [jetson-orin-librealsense](https://github.com/jetsonhacks/jetson-orin-librealsense) ships **prebuilt modules for kernel 5.15.148-tegra — exactly what JetPack 6.2 (L4T 36.4.3) runs**. Check `uname -r`; if it's `5.15.148-tegra`, just install the prebuilt modules, `depmod -a`, reboot. The install script hardcodes the kernel version — verify it matches yours.
   - On a newer kernel (e.g. 5.15.185-tegra on JP 6.2.2), build from source with [jetson-orin-kernel-builder](https://github.com/jetsonhacks/jetson-orin-kernel-builder): apply patches, enable `HID_SENSOR_HUB`, `HID_SENSOR_ACCEL_3D`, `HID_SENSOR_GYRO_3D` as modules, build (~40 min), install the 6 `.ko` files. A full verified walkthrough for JP 6.2.2 is [here](https://danieljordanviraytech.substack.com/p/getting-the-realsense-d455-imu-working). Verify with `ls /sys/bus/iio/devices/` (should show `iio:device0`/`1`) — works in Docker/Isaac ROS containers too since they share the host kernel.

2. **Firmware downgrade to 5.13.0.50.** NVIDIA support recommends this for D455 + JetPack 6 with Isaac ROS ([forum thread](https://forums.developer.nvidia.com/t/intel-realsense-d455-control-transfer-returned-error-when-connecting-to-jetson-agx-orin-isaac-ros/347203)) — it stopped the error for the reporter. Also match librealsense/realsense-ros versions to the [Isaac ROS RealSense compatibility table](https://nvidia-isaac-ros.github.io/getting_started/hardware_setup/sensors/realsense_setup.html) (Isaac ROS 3.2 expects librealsense 2.55.1 + realsense-ros 4.55.1).

3. **Quick workaround.** If the IMU isn't needed, launch with `enable_gyro:=false enable_accel:=false` — the warnings disappear. Avoid `-DFORCE_RSUSB_BACKEND=true` builds on Orin; users report frame drops and freezes ([#13020](https://github.com/IntelRealSense/librealsense/issues/13020)).

Sources: [NVIDIA forum thread](https://forums.developer.nvidia.com/t/intel-realsense-d455-control-transfer-returned-error-when-connecting-to-jetson-agx-orin-isaac-ros/347203), [JP 6.2.2 kernel module walkthrough](https://danieljordanviraytech.substack.com/p/getting-the-realsense-d455-imu-working), [librealsense #12566](https://github.com/IntelRealSense/librealsense/issues/12566), [realsense-ros #3185](https://github.com/IntelRealSense/realsense-ros/issues/3185)

---

## 3. PX4 firmware 101 — Pixhawk 2.4.8 clone

Notes for a Chinese-clone Pixhawk 2.4.8 (FMUv2/FMUv3 hardware) that would not save parameters/airframe on recent PX4. Covers diagnosis, root cause, and building a working firmware from source on an arm64 host (Jetson Orin Nano).

### 3.1 Check what firmware is installed

1. Install **QGroundControl** (works with both PX4 and ArduPilot).
2. Connect the board via USB, wait for the boot tones.
3. QGC auto-connects. Firmware type + version show in **Vehicle Setup → Summary** and the top toolbar: either `PX4 vX.Y` or `ArduCopter vX.Y`.

Clones usually ship with ArduCopter, sometimes nothing usable.

Serial alternative: on the console port PX4 gives a NuttX `nsh>` shell; ArduPilot does not.

### 3.2 The problem: airframe / parameters won't save

Symptom: pick **Quad X → Apply → Restart**, board beeps, but after reconnecting the airframe is not saved. QGC may report:

```
parameter write failed. veh: 1 com: 1 param: SYS_AUTOSTART
```

**Diagnose it.** QGC → **Analyze Tools → MAVLink Console**:

```
mtd status
param status
```

Bad sign (what a faulty/unsupported board shows):

```
No. partitions: 0
Device size: 0 Blocks (0 bytes)
TOTAL SIZE: 0 KiB
```

A healthy board shows a `/fs/mtd_params` partition and `TOTAL SIZE: 16 KiB`.

Also rule out the simple stuff: microSD inserted + FAT32, full power-cycle (not just the QGC restart button), and confirm `SYS_AUTOSTART` = `4001` after selecting Quad X.

**What FRAM is.** FRAM = Ferroelectric RAM: a small non-volatile chip (Cypress/Ramtron FM25V02, 32 KB on the 2.4.8) wired to the STM32 over SPI. PX4 writes all parameters and calibration to it. On clones this chip is a common casualty (counterfeit / defective / badly soldered).

**Root cause (important).** `TOTAL SIZE: 0 KiB` is **not always dead hardware.** There is a documented PX4 bug: on non-mRo (3DR-style / clone) Pixhawk 2.4.8 boards, **any PX4 newer than v1.14.4** fails to detect the FRAM — exactly the `0 KiB` / no-partition symptom. The same board on **v1.14.4** shows `16 KiB` and saves fine. `mtd erase` and `param reset all` do not help; only downgrading does.

Reference: PX4-Autopilot issue #24360.

### 3.3 Two ways forward

- **Easiest — switch to ArduPilot (ArduCopter).** It stores parameters in the STM32's internal flash, not the FRAM chip, so the whole bug is irrelevant. One-click install in Mission Planner. Best choice unless a PX4-only feature is needed.
- **Stay on PX4 — install v1.14.4.** No prebuilt `.px4` for any 1.14.x exists anywhere (GitHub releases carry source only), so it must be built from source. Steps below.

The bug affects versions *newer than* 1.14.4, so 1.14.4 (or any 1.14.x) is a valid target.

### 3.4 Build PX4 v1.14.4 from source (native arm64 — Jetson Orin Nano, Ubuntu 24.04)

Do NOT use the `px4io/px4-dev-nuttx-focal` Docker image on arm64 — it is amd64-only and fails with `exec format error`. Build natively instead (also faster). Do NOT run `Tools/setup/ubuntu.sh` on arm64 — it tries to fetch a nonexistent arm64 ARM toolchain.

**Toolchain.** PX4 1.14 wants `arm-none-eabi-gcc` **9-2020-q2**, which ARM never shipped for arm64. Use the xPack build (GCC 9.3.1, equivalent), which has a native linux-arm64 binary:

```bash
cd ~
wget https://github.com/xpack-dev-tools/arm-none-eabi-gcc-xpack/releases/download/v9.3.1-1.4/xpack-arm-none-eabi-gcc-9.3.1-1.4-linux-arm64.tar.gz
tar -xzf xpack-arm-none-eabi-gcc-9.3.1-1.4-linux-arm64.tar.gz
echo 'export PATH=$HOME/xpack-arm-none-eabi-gcc-9.3.1-1.4/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
arm-none-eabi-gcc --version        # expect 9.3.1
```

**Build dependencies.**

```bash
sudo apt update
sudo apt install -y git cmake ninja-build python3-pip python3-venv \
    gperf genromfs libncurses-dev flex bison libtool automake \
    build-essential zip unzip
```

**Source.**

```bash
git clone --recursive -b v1.14.4 https://github.com/PX4/PX4-Autopilot.git
cd PX4-Autopilot
```

**Python deps (use a venv — Ubuntu 24.04 blocks system pip).**

```bash
python3 -m venv ~/px4venv
source ~/px4venv/bin/activate
pip install -r Tools/setup/requirements.txt
```

**Build.**

```bash
make px4_fmu-v3_default
```

Output: `build/px4_fmu-v3_default/px4_fmu-v3_default.px4`

Keep the venv active in the same shell you run `make` from, or it grabs the system Python.

### 3.5 Build gotchas actually hit (Python 3.12 / Ubuntu 24.04)

**`AttributeError: module 'em' has no attribute 'RAW_OPT'`** — wrong empy version (4.x installed; need 3.3.4):

```bash
pip uninstall -y em empy
pip install empy==3.3.4
rm -rf build
make px4_fmu-v3_default
```

Sanity check:

```bash
python3 -c "import em; print(em.__version__, em.__file__)"   # want 3.3.4
which python3                                                # want ~/px4venv/bin/python3
```

**`ModuleNotFoundError: No module named 'pkg_resources'`** — setuptools too new (81+ removed pkg_resources):

```bash
pip install "setuptools<81" wheel
make px4_fmu-v3_default
```

Known-good fallback: `pip install setuptools==70.3.0`.

### 3.6 Copy the firmware off the Jetson

From the desktop machine's terminal (not the SSH session into the Jetson):

```bash
scp youruser@orin:~/PX4-Autopilot/build/px4_fmu-v3_default/px4_fmu-v3_default.px4 ~/Downloads/
```

Use the Jetson's IP if the hostname doesn't resolve, e.g. `youruser@192.168.1.x`.
Verify: `ls -la ~/Downloads/px4_fmu-v3_default.px4` (a few hundred KB–1 MB).

### 3.7 Flash and verify

1. QGC → **Vehicle Setup → Firmware**.
2. Unplug the board, click into the Firmware page, plug it back in.
3. **Advanced settings → Custom firmware file** → select the `.px4`.
4. Let it flash (~1–2 min).
5. After boot, MAVLink Console → `mtd status` → expect `TOTAL SIZE: 16 KiB` and a `/fs/mtd_params` partition.
6. Set the airframe (Quad X). It should now persist across reboots.

### Quick reference

| Item | Value |
|------|-------|
| Board | Pixhawk 2.4.8 clone (FMUv2/FMUv3, STM32F42x) |
| Working PX4 version | v1.14.4 (anything newer breaks FRAM detection on clones) |
| Build target | `px4_fmu-v3_default` (use `-v2` if flash-limited / detection fails) |
| Toolchain | xPack arm-none-eabi-gcc 9.3.1 linux-arm64 (= ARM 9-2020-q2) |
| Output file | `build/px4_fmu-v3_default/px4_fmu-v3_default.px4` |
| Healthy `mtd status` | `TOTAL SIZE: 16 KiB`, `/fs/mtd_params` present |
| Airframe param | `SYS_AUTOSTART = 4001` (Quad X) |
| Alternative | ArduPilot (stores params in internal flash, sidesteps FRAM bug) |

---

## Q&A

Troubleshooting and tuning notes collected from a GPS-denied drone build using this same stack (Jetson Orin Nano + VSLAM + PX4/MAVROS).

### Hardware & power

**Q: How do you mount and power the Jetson Orin Nano on the drone?**
A: Mount it using an acrylic plate attached to nylon standoffs, then attach the plate to the drone's top plate. Power it via a 9V, 5A [Step-Down Voltage Regulator](https://www.pololu.com/product/4094).

**Q: Do I need an SSD, and what size is recommended?**
A: Technically optional, but highly recommended. Without an SSD, rosbag data can't be stored due to slow SD card speeds, making debugging difficult. A 256GB SSD is recommended for optimal performance and lower power consumption (though even 250GB works).

**Q: What LiPo battery capacity do you use?**
A: A 5200mAh 3-cell battery, but a 4-cell is recommended if possible for better performance — the 3-cell setup is underpowered.

### Testing environment

**Q: How much indoor space is required for testing the drone?**
A: No specific space requirement. The drone can be tested in spaces as big or small as needed, as long as the area is large enough to actually fly a drone.

**Q: Can I test outdoors?**
A: Not tested in outdoor environments — keep tests indoors. Testing is only recommended in controlled environments.

**Q: My VSLAM performs well indoors but diverges outdoors. Why?**
A: Not tested outdoors. VSLAM performance depends heavily on environmental features. Beach environments with obstacles should have sufficient features, so test and report results.

**Q: Can VSLAM track reliably in a cage environment with open sides?**
A: Test it: record a rosbag while hand-carrying the drone around the flying area, then replay to assess performance.

### Flight modes & crash recovery

**Q: How do I switch to OFFBOARD mode?**
A: Via QGroundControl wireless connection, via SSH command to the Jetson, or using switches on the RC controller. An RC controller switch is the preferred method.

**Q: The throttle response in poshold mode is lagging. Is this normal?**
A: In poshold mode, the throttle stick starts at 50%. Raising above 50% gains altitude, lowering below 50% decreases altitude. At exactly 50%, it maintains altitude. This programmed feature may seem laggy compared to manual mode.

**Q: My drone had a brutal crash. What should I do first?**
A: Switch the drone to position flight mode and verify a stable local position estimate. Then try taking off in position flight mode. If successful, it confirms the VSLAM and MAVROSPY nodes are working. Run this test before attempting offboard flight mode again.

**Q: What should I do before attempting offboard mode again after a crash?**
A: Export and review PX4 logs in QGroundControl. Record a rosbag while hand-carrying the drone around the flying area, then replay it to check for smooth VSLAM initialization and tracking without large jumps in pose.

### Localization tuning

**Q: Can I use the camera lens facing downward?**
A: Not recommended. Downward-facing cameras severely limit obstacle avoidance capabilities and degrade VSLAM's ability to detect depth and features. For downward-facing localization, optical flow is a better choice.

**Q: How can I ensure stable position estimation during takeoff from a featureless surface?**
A: VSLAM requires a good amount of visual features for initialization. Without sufficient features, integrate IMU and rangefinder data into an EKF, then fuse VIO data once enough visual features are detected.

**Q: Can I combine optical flow and VSLAM for better performance?**
A: Yes. Use VSLAM for XY position and yaw, optical flow for XY velocity, and optionally add LiDAR for altitude. PX4 performs sensor fusion via EKF2 automatically — just configure the proper parameters as documented for [optical flow](https://docs.px4.io/main/en/sensor/optical_flow) and [rangefinders](https://docs.px4.io/main/en/sensor/rangefinders#distance-sensors-rangefinders).

### PX4 / MAVROS debugging

**Q: My MAVROS connection times out. What's wrong?**
A: Likely the Jetson can't connect to the flight controller. Run through the "Test Connection" subsection of the setup tutorial and verify the serial port with `ls /dev/ttyUSB0`.

**Q: The `/mavros/vision_pose/pose_cov` topic frequency is too low. What's happening?**
A: The pose topic needs to publish at least 30 Hz per PX4 docs for proper EKF2 fusion. Below 30 Hz, "Delta above threshold" warnings appear. Check for: running multiple camera streams simultaneously, insufficient power, or other CPU-intensive processes.

**Q: My drone doesn't take off despite OFFBOARD mode being enabled. What's wrong?**
A: The `/mavros/vision_pose/pose_cov` topic frequency is likely too low (needs 30+ Hz). Check the VSLAM node output for "Delta above threshold" warnings. Disable unnecessary camera streams (RGB and depth if using stereo infrared).

**Q: The `/mavros/local_position/pose` has a large offset from setpoints. What's the issue?**
A: Other sensor data may be getting fused into EKF2 when only VSLAM should be used. Verify that `/mavros/vision_pose/pose_cov` starts at (0,0,0) and check for any extraneous sensor inputs being fused.

### Delta / vision errors

**Q: What does the "Delta between current and previous frame above threshold" warning mean?**
A: The time between input frames of the video feed is longer than desired. Verify MAXN_SUPER mode is in use and the Jetson is receiving enough power. Only VSLAM and MAVROSPY nodes should be running — avoid running RViz, as it can cause issues with streaming the raw camera feed.

**Q: How do I address the delta error issues?**
A: Check: USB 3.0 cable quality, power supply (try wall power), CPU/GPU load with `jtop`, and ensure no other processes are running. The delta error typically only occurs when streaming ROS messages to external computers, not when recording on-device.

**Q: The delta error persists even with proper power. Could it be a camera issue?**
A: Possibly. If switching off IMU input and relying only on visual data significantly reduces the error (10–100x improvement), there may be a camera compatibility issue. Test with a different camera model if possible.

### Software versions

**Q: Do I need PX4 v1.15.4 specifically?**
A: It's the tested version, but newer versions may work (untested). [PX4 v1.15.4](https://github.com/PX4/PX4-Autopilot/releases/tag/v1.15.4). Flashing will likely wipe settings, so save parameters in QGC first.

**Q: Can I use ArduPilot instead of PX4?**
A: Possibly. Modify the `mavrospy.launch.py` script to reference `apm.launch` instead of `px4.launch`. ArduPilot parameter configuration isn't covered here — consult ArduPilot documentation.

### Debugging tools

**Q: I'm stuck with the `analysis.py` script running for 24 hours with no output. What should I do?**
A: Send more information to help debug. Check the [script source](https://github.com/CruxDevStuff/allan_ros2/blob/main/scripts/analysis.py) to understand what it's supposed to do.
