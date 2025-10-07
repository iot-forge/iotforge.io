## Intro

Hi, you’re listening to the IoT Forge News Digest. This is episode 19.

Today: Home Assistant turns twelve. A humanoid that quietly phones China every five minutes. MIT and Toyota build physics-aware virtual scenes. And WiFi that checks your heart rate. Let’s connect the dots.

⸻

### Home Assistant Turns 12

Twelve years. That’s how long Home Assistant has been running — and that’s a rare milestone in smart home software. On September 17th, the team marked the anniversary with a blog post.

It’s still the standout example of open source automation: flexible, customizable, and driven by a huge community of integrations.

Why it matters? Longevity first. Twelve years of continuous development signals real resilience. You can trust it for long-term projects. Second, flexibility. The platform handles a messy mix of devices and use cases at scale. Third, hardware fit.

For years, the Raspberry Pi has been the go-to starting point: cheap, approachable, endless tutorials. But heavy workflows — like frequent ESPHome builds or edge AI processing — can bog a Pi down. That’s where stronger platforms shine. A budget x86 mini-PC delivers smoother, more reliable performance. And ARM isn’t just Pi anymore: Apple Silicon Macs, Odroid boards, RockPro64, even ARM-based NAS devices are increasingly common.

The beauty is, Home Assistant runs on all of them. As Home Assistant OS. In Docker on Debian or Ubuntu. Inside Proxmox or VMware. Even on Unraid or Synology NAS.

I’ve run it for four years. Rock solid. I started on a Raspberry Pi 4 — worked fine until heavy ESPHome compiles froze the system. Switched to a used Lenovo ThinkCentre, Intel i5, plenty of RAM. Cost me around a hundred bucks. Smooth ever since. No slowdowns. A perfect dedicated box.

That’s why we keep covering it here: Home Assistant is alive, evolving, and keeps delivering.

⸻

Unitree G1 Security Concerns

So — twelve years of solid open source. Now compare that to a humanoid robot that calls home every five minutes.

Researchers at Alias Robotics dug into Unitree’s G1. What they found: weak Bluetooth onboarding. Hardcoded encryption keys reused across devices. And covert transmissions to servers in China — like clockwork, every five minutes.

They reverse-engineered the firmware, mapped internal communications, and warned: a remote attacker could seize control. Even use the robot as a pivot for broader network attacks.

Why it matters? Silent data exfiltration is a problem anywhere — in homes, in enterprises, in critical infrastructure. And when one set of hardcoded keys is reused across all devices, a single break becomes a mass break.

For context: the G1 has Wi-Fi 6, Bluetooth 5.2, depth camera, 3D LiDAR, over-the-air updates. It weighs about 35 kilos, runs 23 joint motors. You can literally order one online — price tag around $21,600, free delivery — and suddenly you’ve got a humanoid in your living room.

Not a toy. Community tinkering cuts both ways. Even if you’re not trying to hack it, someone else might. As the authors put it: “Securing humanoid robots requires paradigm shifts toward adaptive cybersecurity AI frameworks.”

⸻

Steerable Scene Generation for Robot Training

Alright — let’s shift gears from creepy to constructive. From security gaps… to safety in training.

Robots don’t just need code. They need worlds to practice in. And MIT’s CSAIL with Toyota Research Institute is building a way to generate those worlds on demand.

It’s called Steerable Scene Generation. The system “steers” diffusion models to build physics-aware 3D environments for robot training.

Published on arXiv in May, it was trained on 44 million 3D rooms. It arranges assets into lifelike, physically feasible scenes. Under the hood: Monte Carlo Tree Search — the same strategy search used in AlphaGo — plus reinforcement learning and text prompts to guide what goes where.

The payoff? Scenes that fit prompts better than prior methods like MiDiffusion or DiffuScene. Accuracy hits 98% for pantry shelves, 86% for messy breakfast tables — at least ten points better than the baselines. And the system scales beyond its training distribution, though today it’s still a proof of concept with a fixed asset library.

Why it matters: faster, cheaper, task-aligned data shrinks the sim-to-real gap. Engineers can steer toward edge cases and boost robustness. The limits — no articulated objects yet, fixed assets — also point straight to the next opportunities.

Or as lead author Nicholas Pfaff put it: “We are the first to apply Monte Carlo Tree Search to scene generation by framing the task as a sequential decision-making process.”

⸻

Pulse-Fi: Heart Rate via WiFi

From training robots in virtual worlds, to sensing humans in the real one.

Engineers at UC Santa Cruz have built Pulse-Fi. A system that reads heart rate using nothing more than WiFi signals and a machine learning model. No wearables. No sensors strapped on.

Announced September 2nd at the International Conference on Distributed Computing in Smart Systems and IoT.

Here’s what they showed: 118 participants. Clinical-level accuracy at up to three meters. Hardware? Ultra-low cost. ESP32 modules. Raspberry Pi boards. Error margin about half a beat per minute after just five seconds. Robust across 17 body positions — sitting, standing, lying down, even walking.

They built their own dataset with ESP32s and oximeters, and validated against a Brazilian dataset collected with Raspberry Pi devices — one of the largest WiFi heart monitoring datasets so far. As researchers put it: “Because of the machine learning model, distance basically had no effect on performance.”

Why it matters: low-cost, non-intrusive vital monitoring in places where wearables or clinical gear aren’t practical. Commodity chips — $5 to $30 — mean broader access for low-resource homes and clinics. But it also raises questions: privacy, performance in the wild, regulatory hurdles.

⸻

Wrap-up

So today we covered: Home Assistant’s open-source durability at twelve. Security flaws in a consumer humanoid. AI that builds physics-aware training worlds. And WiFi that can track your heartbeat.

The big picture? As software reaches deeper into the physical world, trust comes from design discipline: secure by default, testable at scale, honest about trade-offs.

If that resonates, subscribe and share this with a teammate.
