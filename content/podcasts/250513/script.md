**IoT Forge Unplugged – Episode 9**
**May 13, 2025**

# Intro

Hi everyone, and welcome to **IoT Forge Unplugged**—your regular update on what’s new and exciting in the world of IoT, embedded devices, robotics, and smart technology. I’m your host, Pavel Korshunov, and I’m glad to have you with me again.

Today is May 13th, and this is already our **ninth episode of 2025**. We have some really interesting stories lined up. We’ll talk about robots that can be tricked by language alone—yes, even the physical ones that move and grab. We’ll look at a new robot from Amazon that can actually *feel* what it touches. After that, we’ll jump into the world of 3D printing—both inside the human body and outside, with massive walls printed in just hours. And finally, there’s a cool new product from M5Stack that I’m seriously thinking about getting, even though my workbench is already full of half-finished projects.

Let’s get started.

---

Let’s kick off today’s episode with a story that touches on something we’ve all been thinking about — maybe not out loud, but certainly deep down — the creeping anxiety around smart machines in our homes, streets, and even hospitals.

Sure, cyberattacks on critical infrastructure are terrifying, but there's something uniquely unsettling when *physical robots* — machines that move, grab, drive, walk, maybe even operate — start misbehaving. Not because their motors failed, but because the mind guiding them — an AI — has been tricked.

That’s exactly what a team at the University of Pennsylvania just demonstrated in a paper that’s equal parts fascinating and alarming. It’s titled *“Jailbreaking LLM-Controlled Robots”*, and it shows, in no uncertain terms, that AI-powered robots — from humanoids to autonomous cars — can be manipulated into taking dangerous physical actions.

The trick? They use a second AI to act like an attacker. This “attacker” LLM keeps sending clever prompts to the robot's brain — essentially trying to socially engineer it — until it finds the right phrasing that makes the robot act against its safety constraints. Like asking a robot to “pretend it’s in a movie” where the dangerous action is just part of a fictional script.

What’s even more disturbing: they tested this on real systems — a self-driving car simulator, a wheeled robot, and a quadruped robot dog — and got *100% success*. The robots ran red lights, entered “keep-out zones,” and even located the most harmful places to “detonate” a virtual payload.

We've talked before about robots gaining physical dexterity and sensory feedback — like the **touch-sensitive robots we’ll discuss later in this episode**, or their role in medical environments where safety is paramount, as we discussed in [our early February edition](https://iotforge.io/podcasts/250204/). This latest research connects the dots — the more physically capable and autonomous the robot, the greater the potential harm if it’s compromised.


The takeaway? It’s not enough to align the AI with ethical constraints — you also need **physical boundaries** that *can’t* be rewritten with a cleverly worded prompt.

This isn’t a dystopian alarm bell — it’s a crucial wake-up call for developers, manufacturers, and yes, regulators. When we put AI in control of machines that move through our world, we also inherit a new kind of attack surface — one that can punch, burn, or crash.

So, what should a robot’s “safe mode” really mean in an LLM-powered future? Should we start thinking about firewalls not just for data, but for limbs and wheels?

Food for thought as we dive deeper into the age of embodied AI.


---

And speaking of embodied AI — let’s now look at the other side of that coin.

If jailbreaking shows us how robots can be tricked into harmful behavior, Amazon’s newly unveiled Vulcan shows us how they might be taught to carefully engage with the world around them — quite literally, through touch.

**Vulcan** is a humanoid robot developed by Amazon’s AI lab, and what sets it apart isn’t just its form factor or mobility — it’s its sense of touch. We're talking about pressure-sensitive fingertips that let it feel objects with enough finesse to distinguish between a foam cup and a ceramic mug. That means it can not only grip, but adaptively grip, adjusting its force in real time.

Now, this connects beautifully with themes we’ve explored in earlier episodes. Back in February, we dove into how robots are stepping into everyday spaces—folding laundry, harvesting crops, assisting in elder care—but consistently struggling with one thing: *nuance*. Robots might navigate with ease, but give them a fragile object and you risk either a dropped item or a crushed one.

Fast-forward to our April 29th episode, where we touched on how most humanoid robots couldn’t finish a half-marathon—stumbling, overheating, lacking coordination. What Vulcan represents is a parallel evolution: not running faster, but interacting *smarter*. And that, arguably, is a bigger leap.

From an engineering standpoint, the key shift here is in the feedback loop. Vulcan isn’t just a pre-programmed mechanical shell. It uses foundation models—similar to large language models—merged with tactile and visual data to make real-time decisions. This kind of sensor fusion creates an embodied intelligence that learns from contact, not just from code.

And here’s where things get even more important—especially in medical robotics. If you listened to our earlier episode on robotic surgery and assistive healthcare devices, you’ll remember how we talked about precision not being just about mechanics—it’s about *feeling*. A medical robot guiding a catheter, or assisting with physical therapy, needs to “know” what human tissue feels like. Sense, quite literally, becomes safety.

So maybe Vulcan isn’t just about helping in warehouses or opening doors in a home. Maybe it’s a step toward robots that can assist nurses, stabilize limbs, detect tremors—and do it *gently*.

---

Alright, let’s shift gears and take a look at what’s brewing in the world of 3D printing — and it’s not just about gadgets or parts anymore. This time, we’re talking about printing **from the inside out**… and also at **massive architectural scale**.

First — brace yourself — researchers have now demonstrated **3D printing *inside* the human body**. Yep, *inside*. The approach uses a clever combination of ultrasound and specially formulated bio-inks that only solidify when precisely activated by focused ultrasound beams. That means, instead of opening up a patient or doing tricky positioning with robotic arms, we might soon be able to *print tissues or scaffolds directly where they’re needed* — deep in the body — all from the outside. No invasive surgery, just a bit of focused energy. From an engineering perspective, it’s a wild mix of fluid dynamics, acoustic physics, and biochemistry. And while it’s early days, the implications for personalized medicine and soft robotics are huge. Imagine printing soft actuators right into a wearable, or repairing organs on the fly.

Now zoom out — way out — to the other extreme of the scale: **Alquist 3D just wrapped up an entire 5,000-square-foot structure** — with 16-foot walls — in just **75 hours**. That’s over 66 cubic yards of concrete, laid down by their custom robotic printer system. And this isn’t some gimmicky PR stunt — it’s a part of a *real* commercial project for Walmart. This kind of rapid-build capability is exactly what people in construction and disaster relief have been dreaming of. For IoT folks and embedded developers, this opens up interesting questions too — how do we embed sensors, HVAC ducts, or electrical conduits into these printed walls *as they’re being made*? What standards will we need when structures are no longer assembled, but **grown layer by layer**?

So from nano to macro, from blood vessels to retail walls — 3D printing continues to stretch the imagination.
What would *you* want to print, if precision and scale were no longer limits?

---

While we dream of LLM-powered humanoids constructing our future homes, let's turn our attention to something more immediate and tangible: the M5Stack Tab5.

This device is a developer-friendly, portable IoT terminal that integrates a dual-SoC architecture. At its core, it features the RISC-V–based ESP32-P4 SoC, equipped with 16 MB Flash and 32 MB PSRAM. Complementing this is the ESP32-C6-MINI-1U wireless module, supporting Wi-Fi 6 and Bluetooth 5.2, ensuring high data throughput and low-latency communication .

The Tab5 boasts a 5-inch IPS TFT display with a resolution of 1280×720, driven over MIPI-DSI, and a GT911 multi-touch controller for smooth, precise response. It also includes a 2 MP camera via MIPI-CSI, enabling HD video capture and edge AI applications like face recognition and object tracking.

For audio, the device utilizes the ES8388 codec and ES7210 AEC front end, paired with dual microphones and a 3.5 mm headphone jack, providing high-fidelity recording and playback. Additionally, it features a BMI270 6-axis sensor for motion tracking and posture detection.

In terms of connectivity, the Tab5 offers USB-A (Host) and USB-C (USB 2.0 OTG) ports, RS-485 industrial interface, Grove and M5BUS expansion ports, a Micro SD card slot, and STAMP expansion pads for flexible integration with various sensors and communication modules .

Priced at $60, the Tab5 is available with or without the NP-F550 battery, catering to different power requirements .

I'm personally considering adding the Tab5 to my collection, despite the numerous unfinished projects on my plate. Its versatility and robust feature set make it a compelling choice for developers looking to bridge the gap between prototyping and deployment.

---

And that’s all for today. I hope you liked this episode of IoT Forge Unplugged.

You’ll find all the links to the news and articles in the episode description. And if you missed any past episodes, they’re all available on your favorite podcast platform.

Don’t forget to subscribe, so you won’t miss what’s coming next.
Thanks for listening—and see you in two weeks.

Stay connected… and unplugged.
