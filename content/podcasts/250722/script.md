## Intro

Hey makers, tinkerers, and IoT dreamers  -- - welcome to the IoT Forge News Digest!
I’m Pavel Korshunov, it’s Tuesday, July 22, 2025, and this is Episode 14.
Buckle up; we’ve got gadgets, glue code, and a goldfish-driven car coming up next. Let’s roll!

### Comma 3X

I’d like to open today’s episode with a gadget that’s stirred up a pretty lively debate inside our community: the Comma 3X. In a nutshell, it’s a little box you stick on the windshield that gives your car Tesla-style lane-keeping and adaptive cruise control, all powered by the open-source software openpilot. It already supports well over 300 different car models, from everyday brands to some more niche ones.

Inside the hardware You get three 1080p HDR cameras with an impressive 140 dB of dynamic range, so they can handle bright sun, deep shadows, and oncoming headlights at night. two cameras to watch the road and one night-vision camera to see inside the car.
Driving it all is Qualcomm’s Snapdragon 845  --  the chip you can find in Google Pixel 3 and Samsung Galaxy S9.Pretty Old but still plenty fast to run real-time computer-vision models. You also get stereo mics and speakers for voice prompts and alerts.

The 3X talks to your car over CAN, and it now supports CAN FD out of the box, so on modern platforms you don’t need a separate adapter. LTE, Wi-Fi, and high-precision GPS are built in for data, updates, and telemetry.

Up front is a 6-inch 2160 × 1080 OLED. Onboard storage is 128 GB, so it can record drives and training data for the neural nets.

Inside the community, the big question was: openpilot’s main model runs at about 20 Hz -- a new prediction every ~50 milliseconds. Is that really fast enough for reliable driver assist on the highway?

Let’s sanity-check it. At 60 mph a car travels roughly 4 feet every 50 ms. For lane-keeping, that resolution is usually fine; lane lines don’t jump that far in one frame. Where you’ll feel the limit is in sudden cut-ins or very high-speed maneuvers. In those edge cases, faster loops or a predictive model can smooth out the reaction.

Crucially, 20 Hz is the perception update rate. The car’s actuators -- power steering, brake controllers -- still run on their own internal loops at much higher frequencies. openpilot just hands them commands that those subsystems then interpolate and filter.

Is that actually fast?

For context, safety studies show an average driver typically needs about one full second -- sometimes up to 1.5 s -- to notice a hazard and start reacting (move a foot to the brake, turn the wheel). And if the driver was briefly distracted, MIT research found hazard recognition alone can take half of the second, even before any physical movement begins.

So while openpilot is crunching the scene 20 times a second, the average human gets only one shot -- maybe less -- within that same time frame. That doesn’t make the assist system perfect, but it gives you a feel for why 20 Hz is generally considered “fast enough” for today’s Level-2 driver assistance.

So... Comma 3X is a relatively affordable step up to advanced driver assistance: three HDR cameras, a capable chip, modern vehicle-bus support, and a big roster of compatible cars. It won’t turn your ride into a self-driver, but it will help manage speed and lane position, easing fatigue on long trips -- as long as you stay in the loop and keep your hands, eyes, and brain engaged.

### ESP32 Hosted
In our previous episode, we talked about the release of the Raspberry Pi Radio Module 2 -- a compact $4 solution that makes it easy to add wireless connectivity to your custom hardware without going through a full certification process. But there’s another path: using an ESP32 chip.

The latest ESPHome release introduced support for ESP-Hosted-MCU -- an open-source solution from Espressif that turns any of their chips (ESP32 C- and S- series) into a wireless co-processor. This allows you to add Wi-Fi and Bluetooth to a host microcontroller that lacks them -- or can’t spare the cycles to run a full network stack -- without giving up the ESP chip’s GPIOs or peripherals.

So when would you actually need this setup?

The answer lies in timing-critical applications. If your system needs to respond within milliseconds, handling network stacks directly on the MCU can cause problems. Wi-Fi and Bluetooth interrupts may steal CPU time for hundreds of milliseconds -- too much for real-time use cases.

That’s when pairing your main MCU -- like an STM32 or Teensy 4.1 with an ARM Cortex-M7 -- with an ESP32-based wireless co-processor makes sense. Offload the connectivity, and let the main controller focus on things like:
	-	Real-time 3D GUI rendering
	-	Local DSP for audio synthesis or multi-voice speech
	-	Lightweight machine learning models (e.g., TensorFlow Lite with the 64 bit floating point support)

It’s a clever division of labor that keeps your system responsive, modular, and scalable.

###

Or, if you’re deploying models on the MAX78002 from Analog Devices and in need of adding wireless support to this chip.

Analog Devices has introduced AutoML for Embedded, an open-source Visual Studio Code plugin co-developed with Antmicro. It’s part of the CodeFusion Studio environment and is specifically designed to streamline the development of machine learning models for microcontrollers and other resource-constrained embedded platforms.

Designing AI for embedded systems is notoriously complex. Memory and compute limitations make it hard to deploy modern models, and tailoring an ML architecture for a specific chip often requires deep domain expertise -- from model selection and compression to quantization and deployment.

AutoML for Embedded tackles this challenge head-on by automating the entire ML pipeline. It stays fully open-source and hardware-agnostic, giving developers the freedom to focus on logic and application, rather than wrestling with low-level optimization.

Unlike traditional ML workflows, which are time-consuming and require manual fine-tuning, AutoML handles architecture search, optimization, and deployment adaptation automatically. The tool integrates tightly with CodeFusion Studio and already supports ADI’s MAX78002 and MAX32690 MCUs.

Now available on the Visual Studio Code Marketplace and GitHub, AutoML for Embedded provides a flexible, scalable solution to bring Edge AI from proof-of-concept to real-world production faster than ever.

### tinymcp

An experimental library called tinymcp has been introduced by Golioth, aiming to bridge the gap between microcontrollers and large language models (LLMs). It brings support for the Model Context Protocol (MCP) to even the most resource-constrained devices, enabling them to interact with LLMs and, by extension, bring AI-driven control into the physical world.

At its core, tinymcp is built around two key components from Golioth:
	-	Golioth LightDB State – used to track and sync the state of connected devices,
	-	Golioth RPC – used for triggering remote procedure calls to those devices.

The library acts as a lightweight proxy server. It receives commands from the LLM in JSON-RPC format, converts them into Golioth RPC calls to target devices, and returns the results back to the LLM. This setup makes it possible to trigger real-world actions like turning on an LED via a voice prompt or a simple natural language instruction from an AI assistant.

tinymcp registers microcontroller functions (like light_on / light_off) as callable “tools” accessible to an LLM, enables the usage of Golioth as the communication backbone between cloud and hardware and automatically publish a tool description using the MCP format so the LLM knows what it can invoke and how.

The project is still under active development, with upcoming features including:
	-	Support for multi-device orchestration;
	-	More flexible call routing logic;
	-	And easier integration with various LLM APIs and interfaces.

This is a meaningful step toward unlocking AI-driven automation in embedded systems -- without the overhead of deploying complex cloud or edge infrastructure. It turns microcontrollers from passive peripherals into interactive agents that LLMs can command and coordinate directly.

###

And to wrap things up -- let’s talk about one of the coolest events on the maker calendar: Open Sauce 2025.

If you haven’t heard of it before, Open Sauce is a massive celebration of open-source hardware, indie inventors, bizarre robots, and hacker culture -- hosted right in the heart of the Bay Area.

Two of our editors had the chance to attend this year’s event, and while they’re still uploading gigabytes of videos and scribbling notes, we’ve got an early look at Hackster.io’s picks from the show floor:
	- Tic-Tac-Toe AI board  --  a fresh take on the classic game with the twist of strategic limitations.
	- Compass CNC  --  a handheld CNC router with screen-guided accuracy. Coming to makerspaces later this year.
	- Fishmobile  --  yes, it’s real. A goldfish piloting a wheeled vehicle using a Raspberry Pi and camera vision.
	- Self-balancing backpack
	- a compact, metal-cutting CNC mill designed for serious makers on a modest budget, trong enough to carry crates or even give you a lift.
	and The 1,000-key keyboard  --  a wall-sized symphony of tactile switches. Not ergonomic. Totally awesome.

We’ll have a full recap coming soon -- with behind-the-scenes stories, photos, and first-hand impressions from our editors -- so make sure you’re subscribed.

And hey, if you missed Open Sauce this time, no worries. Start planning now for 2026 -- because if you love open hardware, experimental builds, or just want to be awed by the raw creativity of the maker world, this is the place to be.

### outro

That’s a wrap for Episode 14.
If something sparked your imagination, share this pod with that friend who needs a 1,000-key keyboard.
Until next time -- keep soldering, stay curious, and build boldly.
