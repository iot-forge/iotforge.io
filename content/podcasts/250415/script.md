**IoT Forge Unplugged - Episode 7**
**April 15, 2025**


Hi everyone, and welcome to **IoT Forge Unplugged**—your bi-weekly dive into the latest from the world of IoT, embedded devices, robotics, and all the smart (and sometimes not-so-smart) things around us. I'm your host, Mart, and every two weeks, I bring you a tightly packed update of the most interesting developments you should know.

Now, before we dive in—just a quick note. You might’ve noticed we skipped the April 1st episode, and here's why:  
I value your time. If there's a week where I don’t see meaningful updates worth 10 minutes of your attention, I’d rather hit pause than fill the air.  

If this were an AI podcast, sure—we could put out an episode *every day* with how fast things are moving. But in the IoT and embedded space, the pace is different. There are lulls. And I respect that.  

But hey, this is a community project—so if you spot something exciting, have feedback, or want to keep the conversation going, don’t hesitate to reach out. Your input helps shape this show.

Today is April 15th, and this is our **seventh episode of 2025**.

Here’s what I’ve got for you today:
- NVIDIA’s ambitious **Project GR00T**  
- How **Golioth** is making it easier to connect Bluetooth devices to the cloud  
- A fresh **Home Assistant update** you might want to check out  
- New **Hackster.io contests** worth submitting your projects to  
- And an exciting release from **M5Stack**: the DAPLink, an offline STM32 programmer  

And that’s where we begin…

---

### DAPLink

I’m a Java engineer. My world is garbage collection, dependency injection, and stack traces — not JTAGs and pin headers. But like many of us, I tinker. And a while back, I built a DIY CNC machine from scratch. I picked up an STM32 board, flashed GRBL, and figured — how hard can it be?

Spoiler: it was very hard.

First, Windows wouldn’t recognize the board. Then STM32CubeProgrammer wouldn’t connect. My cheap ST-Link clone worked… sometimes… depending on the moon phase, it seemed. I spent more time debugging the flashing process than actually tuning my CNC. I eventually got it working, and since then, I’ve moved on to a more mature CNC controller—but I never forgot that pain.

These days, I  have a Core2 development kit on my bench and a couple STM32 boards lying around. And while I’m not flashing GRBL anymore, I know that sooner or later, I’ll need to program one of these chips again. But next time? I’ll be ready.

Because now there’s M5-DAPLink.

This tiny, self-contained STM32 programmer from M5Stack is like a sigh of relief in hardware form. It’s got a screen. It reads firmware from an SD card. It lets you flash chips without a PC—no drivers, no IDEs, no nonsense. You literally press a button, pick a file, and it gets to work. Just imagine the peace of mind that brings if you're in a field deployment, or helping a friend fix their robot, or—like me—just trying to avoid another night of swearing at USB errors.

It’s built on open standards (CMSIS-DAP), it’s hackable, and it’s ready out of the box. If you're an occasional embedded developer—or a full-time engineer who just wants embedded workflows to be less painful—this is the kind of tool that earns its place in your kit, even if you only need it once in a while.

Check the full post from M5Stack to see how the M5-DAPLink is quietly revolutionizing STM32 workflows—one painless flash at a time.

---
### NVIDIA’s Project GR00T

Let’s continue with something big from the NVIDIA GTC event: Project GR00T.

If you’ve ever felt that robotics is stuck in fragmented, hardware-specific silos—you’re not wrong. Most robotic systems today require deep, custom code written for each exact task and platform. It’s slow, it’s messy, and definitely not scalable.

That’s where GR00T comes in.

NVIDIA is building a foundational AI model for robots—think of it as the GPT of humanoids. One core model, trained on a mountain of diverse data, that can be adapted to control different robots and perform a wide range of tasks. It’s called embodied AI, and it’s about teaching robots to understand and interact with the physical world in a more general, reusable way.

They’re using synthetic data, reinforcement learning, and simulation environments to train these bots—not just to walk or pick things up, but to learn and adapt.

What’s exciting is the potential shift: from hand-coded, task-specific bots to AI-powered systems that can generalize across jobs and platforms. Like installing a new app—just smarter, and with legs.

NVIDIA’s also teaming up with hardware makers to test this in the real world. It's still early days, but if it works, this could mean faster dev cycles, shared tooling, and way more accessible robotics.

Definitely something to watch. You can dig into their whitepaper if you want all the gritty details, but that’s the high-level scoop. You can find a link in the description.

---
 ### BT

 Now, let’s talk about something close to home—Golioth has just rolled out Bluetooth-to-Cloud connectivity.​

For those unfamiliar, Golioth is a cloud platform designed to simplify IoT deployments, and Zephyr is an open-source real-time operating system (RTOS) for embedded devices. I’ve had the pleasure of attend their Zephyr OS workshops, and found it very helping developers get their devices connected seamlessly.​

Traditionally, Bluetooth devices lack direct internet connectivity, necessitating custom gateways to bridge them to the cloud—a process that's both time-consuming and complex. Golioth's new feature streamlines this by allowing Bluetooth devices to securely communicate with the cloud via a gateway, utilizing their existing infrastructure for data routing, fleet management, and over-the-air updates.​

This advancement is currently in a Private Access Program, aiming to gather feedback and refine the offering. It's particularly beneficial for developers working on medical devices, asset tracking, or industrial monitoring, where Bluetooth's low power consumption is advantageous.​

If you're interested in exploring this feature, you can apply for early access through Golioth's official channels.

---

### Home Assistant 2025.4: Better Dashboards, Better UX

Alright, time for some Home Assistant news—something I’m always excited about. If you’ve joined our brown bag sessions, you know I bring it up often. I’m a huge fan of how far this open-source project has come.

The 2025.4 release puts a big spotlight on dashboards—making it easier than ever to build clean, user-friendly control panels for your smart home. There’s a real focus on UI and UX improvements, and I love seeing that shift. It’s not just about power users anymore—Home Assistant is clearly aiming for a wider audience with a more polished, accessible interface.

With this update Home Assistant offers
-    Better layout tools, 
- More intuitive card editing,
- And faster ways to manage your dashboard right from the UI

It’s great to see this project balancing powerful automation with a design that’s welcoming to newcomers. As someone who’s been following Home Assistant for years, these updates really show how open source can lead in both functionality and design.

---

Now, if you’ve got a cool idea sitting in your head—or half-finished on your bench—this is your sign to bring it to life.

Hackster.io has two awesome contests open right now:

First, the Board Designer contest. It's not just about functionality, it’s also about aesthetics. If you’ve ever wanted to turn your PCB into something both smart and beautiful, this is your chance. Winners get PCBWay gift cards—and the grand prize? A trip to the Open Hardware Summit in Scotland. That’s a big deal if you're into open-source hardware.

Then there’s the Machine Builder challenge. It’s all about building innovative, clever machines—anything from robotic tools to kinetic art. If it moves, solves a problem, or just makes you smile, it qualifies. Top prize here includes the myCobot 280 arm—great for anyone dabbling in robotics or automation.

And if you're wondering what kind of projects make it to the top, just take a look at the Sonic Sprint BLE Challenge. These projects leverage Nordic Semiconductor's nRF5340 SoC, showcasing the potential of BLE audio applications.​ The finalists were just announced, and the lineup is inspiring:

    One team built a directional BLE speaker that can isolate audio to a listener without disturbing others.

    Another made a multilingual audio streamer for museums and theaters—no app or setup needed.

    And there’s a digital stethoscope aimed at making healthcare more affordable and accessible.

It’s the kind of innovation that makes me love this community.

So—don’t just scroll past these contests. Jump in. Pitch your idea. Show the world what you can do.

Links are in the episode notes.

---
And that’s a wrap for this episode of IoT Forge Unplugged.

One quick note before we go: you might’ve noticed we’re slowly shifting from being a purely internal podcast to something more open—reaching out to the wider community. And that’s intentional.

Why? Because the more voices we bring in, the richer the conversation gets. It means more diverse ideas, better feedback, and bigger opportunities for all of us—whether you’re tinkering with sensors in your garage or leading production at scale.

And trust me, the next episode is going to be exciting—not just with fresh news from the world of IoT, but with a special look into the future of our own community. There’s a big announcement coming, and I can’t wait to share it with you.

So if you enjoyed this—subscribe, like, and share. Let’s keep growing together.

Catch you in two weeks!



