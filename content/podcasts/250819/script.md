## Intro

Hi, you’re listening to the IoT Forge News Digest. I’m Pavel Korshunov, it’s Tuesday, August 19, 2025, and this is Episode 16.
In this episode we move far beyond the hobby corner of 3D printing. From LAIKA’s Oscar-winning “replacement animation” technique, to surgeons rehearsing operations on 3D-printed heads, to the wild world of five-axis printers and Arduino’s big bet on ZephyrOS — the frontier of making is shifting again. We’ll also peek into the latest Home Assistant release, where AI moves from novelty into full-blown automation.
Let's get started

---

In past episodes, we’ve talked about 3D printing in factories. In hospitals. On construction sites. And of course—the endless DIY projects.
But here’s the thing. We’re just scratching the surface. The possibilities are limitless.

One talk really drives this home. It’s a TEDx talk by Brian McLean—LAIKA’s Director of Rapid Prototyping. You know LAIKA: Coraline, Kubo, Missing Link. McLean actually won a Scientific and Engineering Oscar back in 2016 for pioneering 3D printing in stop-motion.

Now, this talk isn’t only about printers. It’s about curiosity. About chasing an idea until it opens a door you didn’t even know existed.
Think about it: from the science of claymation… from the principle of persistence of vision… you get to reinventing stop-motion. And from there—it keeps unfolding.

Here’s the funny part. McLean wasn’t a “tech guy.” Computers scared him. But then a job at a design school introduced him to 3D printing. And that changed everything.
Remember—twenty years ago printers weren’t the desktop gadgets we know today. They were massive. Unreliable. So expensive only research labs and big design studios could touch them.

And then LAIKA did something wild. They invented “replacement animation.” Instead of rendering faces in software like Disney or Pixar, they printed them. Thousands of tiny face pieces. A smile. A blink. A frown. Swap them out frame by frame. Play it back at 24 frames per second… and suddenly a puppet comes alive.

And here’s where it gets really crazy. What started as puppet faces… can become something far bigger. Like 3D-printing an exact model of a human head from CT scans—tumor and all. So a surgeon can rehearse a delicate operation before touching the patient. The first time I heard that—I was speechless.

From there, the tech kept evolving. First: single-material prints, hand-painted by artists. Gorgeous, but slow. Then: ColorJet printers, adding color right in the machine. Next: PolyJet—high-resolution, multi-material, multi-color right off the tray. And finally: voxel printing. Controlling color and material at the tiniest possible level. That’s still far beyond anything we can do with consumer printers today.

I won’t spoil the whole talk. Honestly, you should just watch it. Grab a coffee, sit down for twenty minutes, and let Brian walk you through it. It’s art. It’s physics. It’s pure magic.

And here’s the takeaway. Our brains are wired to imagine. So take that as your cue. Find the unexpected use for your printer. Maybe it’s a puppet face. Maybe it’s a medical model. Maybe—it’s something the world hasn’t seen yet.

---

And speaking of the world not seeing it yet—let me introduce you to something that really bends the rules of desktop 3D printing. It’s called Fractal 5 Pro. Not your regular printer. This one’s open-source, five-axis, and built to print from multiple directions at once. No more forests of support structures. No more fragile layer seams. Just stronger parts, printed faster and cleaner.

The hardware is a clever hybrid: off-the-shelf components, 3D-printed pieces, and a gimbal platform with rotating A and B axes. A slip-ring lets the platform spin endlessly without tangling wires. Add in a BondTech direct drive, E3D Volcano hotend, and Klipper firmware running on a Raspberry Pi, and you’ve got serious performance—at about nineteen hundred bucks in parts.

But here’s the thing: hardware alone doesn’t solve it. Five-axis printing needs five-axis slicing. And that’s where Fractal Cortex comes in. It’s a brand-new, open-source slicer designed to handle these multidirectional toolpaths. You load an STL, set multiple slicing planes, check for collisions, preview the toolpath, and boom—export G-code. And if you want, you can still switch back to traditional three-axis mode.

Now, it’s not perfect. Cortex is fresh—still missing advanced features like supports and optimizations. But the vision is clear: bring the power of five-axis printing down to the desktop. Open the doors for researchers, educators, and makers.

So, just like LAIKA turned printers into animation tools, Fractal Robotics is turning them into true five-axis manufacturing tools. The big question is—will this open-source approach finally make multidirectional printing mainstream?

⸻

And speaking of other wild experiments in 3D printing: Robert Murray-Smith is playing with a whole new kind of motion system. Instead of belts or gears, he’s got a round print platform spun by a friction drive. Kind of like a polar printer, but without the usual gear backlash.

But Friction drives loves to slip. And if you want smooth, accurate prints, you need closed-loop control—some kind of feedback that checks if the motion really matches the command.

And here’s the clever twist: instead of pricey industrial sensors, Robert just grabbed an Arduino and… a cheap optical mouse with the PS/2 interface. You can easily get one on ebay for $8. Take it apart and look inside: That little optical sensor takes snapshots of a surface hundreds of times a second, tracks pixel shifts, and spits out movement data. Perfect for feedback.

And why PS/2 instead of USB? Because PS/2 pushes movement events directly to the microcontroller—no polling, no delays. USB mice, on the other hand, need to be constantly polled, which adds complexity and can cause you to miss tiny shifts. For real-time feedback, PS/2 is a beautifully simple, low-latency choice.

Hooking it up is dead simple: two pins on the Arduino for clock and data, plus a library to parse coordinates. Suddenly you’ve got a live feedback loop, correcting errors on the fly. Cheap, hacky, but it works.

So yeah, Robert built a closed-loop 3D printer with a mouse. Brilliant. If you’re into this kind of inventive hacking, check out his YouTube channel. All the links will be in the podcast notes.

---

Okay, enough about 3D printing for now. Since we already touched on Arduino in the last bit, let’s check what’s new in their world.

Arduino just took another step in this beta program where they’re moving cores over to ZephyrOS. If you remember, some boards used to run on MbedOS—but Arm dropped it, so Arduino had to look for something more alive, more modern. Zephyr fit the bill. It’s an open real-time operating system, super active community, multitasking, scheduling, scalability—all the serious stuff—but wrapped in that easy Arduino style.

And here’s how it feels in practice: your sketch doesn’t just flash directly anymore—it compiles into an ELF file and then gets loaded into a pre-flashed Zephyr firmware. Underneath, it’s not magic, it’s Zephyr doing its thing with threads, inter-process communication, a real-time scheduler. And compiles? Still fast, because the Zephyr core itself is already built, you’re only compiling your code and the libraries you pull in.

Now, they just bumped their Zephyr core to version 0.3.2. That means fresh support for some peripherals—cameras, Wi-Fi, BLE, a few shields. And yes, it’s moving forward. But… here comes the regret. For now it’s just five Arduino boards on the list. That’s it. And honestly, if you look at what Zephyr already supports natively—Nordic’s nRF series, ESP32s, tons of STM32s, even RISC-V boards—you start to wonder: what’s the real advantage of Arduino’s flavor of Zephyr right now?

That said, this is the chance to get involved. Arduino is asking folks to test, break things, send feedback, shape the future. Which means: if you jump in now, you’re not just coding another blink sketch—you’re helping decide what Arduino on Zephyr is going to look like.

⸻


And this digest won't be itself if I not cover August release of Home Assistant!
Community introduced their first AI integration in 2023 where users could let OpenAI handle their interactions with Home Assistant Voice. Since that time, AI has seen a big surge in popularity within the Home Assistant community for all kinds of use cases. Funny notifications when the laundry is done, analyzing what’s happening on a camera or skipping the song when AI determines it’s a country song 😅.

In Auguest release AI Task is a new integration that allows you to generate data using AI. After you add the “AI Task” sub-entry in your AI of choice, the entity will appear in the integration. This allows you to attach files or cameras and ask it what is happening. The output can either be given in text or formatted in a data structure of your choice. This is all accessible from the new ai_task.generate_data action, which can be embedded in automations, scripts, and template entities.

Though AI gets many people excited, there are still people who would prefer not to have this technology in their smart homes. We want to accommodate everyone’s choices, whether that’s to use AI or not. These features won’t appear unless you set up an AI integration and configure some specific settings.

A whole list of improvements fixes and new integrations check then release notes that all link will be in the notes

---

And of course—this digest just wouldn’t be complete without the August release of Home Assistant.

Let’s rewind for a second. Back in 2023, the community dipped its toes into AI with the very first integration: you could route your Home Assistant Voice through OpenAI. From there, things snowballed. People started doing everything from goofy laundry notifications… to analyzing what’s happening on camera feeds… to even auto-skipping songs if the AI thought it sounded too much like country.

Fast-forward to today. August brings a brand-new feature called AI Task. Think of it like a universal adapter between your smart home and whatever AI you choose. You create an “AI Task,” it shows up as an entity, and suddenly you can hand it a file, or a live camera feed, and just ask: “Hey, what’s happening here?”

The AI can reply in plain text, or it can format its answer as structured data—ready to drop straight into your automations. There’s even a dedicated action, ai_task.generate_data, so you can plug this right into scripts and templates, as easily as you’d call a light or a sensor.

Now—I couldn’t resist. I had to try it out in my own setup. And here’s the fun part: I wired this into a Texas Instruments Silent 700 Model 707 data terminal. This beast from the 80s—basically a portable typewriter with a modem—suddenly came alive as my smart-home command center. I could type in: “Turn on the lights.” And it did. Or I could free-form ask, “What’s the state of the humidifier?”—and it answered back on that old-school thermal paper. Pure sci-fi vibes.

I promise—I’ll do a full-length review of that experiment soon.

But here’s the bigger point: not everybody wants AI in their living room, and that’s fair. The Home Assistant team made sure these features are totally opt-in. Unless you configure an AI integration, none of this shows up in your system.

And as always, the release packs plenty more—fixes, improvements, new integrations. I’ll drop a link to the full release notes down below in the podcast notes.


---

And that wraps up this episode of the IoT Forge News Digest.

If you enjoyed today’s stories, check out the links in the show notes
And don’t forget to subscribe on your favorite podcast platform so you never miss the next dive into the future of IoT, smart homes and 3d printing.

Thanks for listening, and until next time -- keep building, and stay curious.
