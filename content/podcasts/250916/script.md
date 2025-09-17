## Intro

Hi, everyone this is IoT Forge News Digest -- the bite size podcast where we dive into the latest in IoT, robotics, embedded devices, and all the smart things shaping our world today.
I'm your host, Pavel Korshunov. Today is Tuesday, September 16th, and this is our 18th episode.
Lets get started!

### Robotics and AI.

These days, robotics goes hand in hand with AI. We’re talking edge data analysis, machine vision, control algorithms. But there’s another direction that’s quietly gaining traction.

OpenAI is hiring roboticists.
Not as a side project—
but as a core bet.

Because maybe… AGI,
artificial general intelligence,
won’t just come from bigger models.
Maybe it needs algorithms
that can touch the physical world.

And the job ads?
They’re telling.
Mechanical engineers—
actuators, motors, gears, limbs.
Sensor experts—
force, touch, proprioception.
Simulation builders—
NVIDIA Isaac Sim,
Unity,
even open-source engines.

Remember MuJoCo?
We talked about it in Episode 11.
OpenAI even had a Python library for it back in 2017.
That repo’s dead now—
MuJoCo ships with its own bindings.
But it shows one thing:
OpenAI’s robotics push is not new.

So what’s the takeaway for us engineers?
This is just the beginning.
Isaac Sim.
ROS.
MuJoCo.
Unity.
Unreal.
These aren’t just tools—
they might be your ticket to shaping
the future of AGI.

### NVIDIA Jetson Thor

Since we brought up NVIDIA in the context of simulation—
let’s talk about their newest brain for robots:
the NVIDIA Jetson Thor modules.

These are not just dev boards.
They’re designed to be the brains of robotics systems,
from research labs to industrial floors.

Robots live on sensor data.
Cameras, LiDAR, tactile arrays.
All of it streaming at once.
And to make sense of that flood—
you need serious AI compute,
right at the edge,
with almost zero latency.

That’s where Jetson Thor comes in.
Now generally available,
it delivers 7.5 times more AI compute,
3.1 times the CPU performance,
and double the memory compared to Jetson Orin.
Enough horsepower to run multiple real-time applications—
all on-device.

Sounds amazing, right?
Well, here’s the catch.
NVIDIA’s press release never mentioned it…
but the Jetson Thor developer kit
It’s fourteen times the price of an Orin Nano dev kit.
Thirty-five hundred dollars—
versus just two-fifty.

So yeah… as powerful as Thor sounds,
I think I’ll hold off.

At least until I hit the wall—
hopefully not literally—
with my Jetson Nano.

Until then, no upgrade.
I’ll just squeeze every last cycle
out of the little board that could.

### Raspberry Pi Synth projects

While NVIDIA Jetson is becoming the obvious choice for robots,
Raspberry Pi keeps holding ground in places
where running heavy local AI models
isn’t really the priority.

Take synthesizers, for example.

That little music clip you just heard?
It was played on Zynthian—
an open-source platform
running on a ten-year-old Raspberry Pi 3.

It’s free as in freedom.
Packed with more than 30 synth engines,
over 500 audio effects,
a live looping station—
and a whole lot more.

And the best part?
Plug and play.
I downloaded the image this morning,
flashed it to an SD card,
and started making sound.
Zero configuration steps.

Okay, okay—
I cheated a bit.
I used the Pi’s onboard audio,
so the headphone output wasn’t exactly hi-fi.
But hey—
it cost me nothing.

Of course, there’s always room for better—
especially if you’re ready to spend a little more.

Take Korg, for instance.
Their flagship digital synths—Wavestate, Modwave, Opsix—
all powered by state-of-the-art Japanese design.
And inside?
Not some custom silicon…
but a Raspberry Pi Compute Module 3.

Why?
Korg’s engineer Andy Leary put it simply:
the Pi gave them CPU, RAM, and storage in a single package.
“Like any other component,” he said,
“we don’t have to design the board,
build it,
test it.
That part’s already done.”

And the magic?
The Pi isn’t just “inside.”
It’s actually making the sound.

Dan Philips from Korg said it best:
“Not everyone realizes that Raspberry Pi is what’s generating the sound.
We use the CM3 because it’s powerful enough
to create deep, compelling instruments.”

### Pi chromatic accordion

But you don’t have to be Korg
to slip a Compute Module into a musical instrument.

Meet Sergey Antonovich.
He took an ordinary chromatic accordion—
and gave it a digital soul.

Inside, he embedded a Raspberry Pi Compute Module 3+,
running FluidSynth as a real-time MIDI engine.
The result?
A fully self-contained accordion
with studio-quality sound and just 3 milliseconds of latency.
That’s competitive with dedicated hardware synths.

No trailing cables.
No bulky external gear.
Everything—electronics, audio, MIDI—
tucked neatly inside the accordion itself.

And it’s powerful.
Capable of handling 64 simultaneous notes,
responding instantly to button presses,
and even syncing digital voices with the natural motion of the bellows.

Sergey calls it proof
that open, flexible tools like Raspberry Pi
can turn even the most traditional instruments
into stage-ready digital hybrids.

### M5Stack Launches Cardputer-Adv

Alright, little quiz for you.
We said: NVIDIA Jetson… Raspberry Pi…
what comes next?

Of course—ESP32.
More specifically, the brand-new M5Stack Cardputer-Adv.

This is the upgraded version of their pocket-sized computer.
Compared to the first Cardputer,
the Adv model brings a better keyboard with improved tactile feel
14 pins expansion port compatible with the optional Cap LoRa868 accessory for Meshtastic communication
an improved 1750 mAh battery,
and — Enhanced Audio – ES8311 audio codec, with  3.5 mm headphone jack for external audio devices.

It’s still card-sized, still ultra-portable,
but now feels more like a real daily driver
for prototyping IoT, dashboards, or even edge AI demos.

And here’s my thoughts:
with proper headphone out on board,
this tiny computer might just be the next candidate
to turn into a pocket synth.

###

And that’s where we’ll wrap it up today.
From OpenAI’s robotics push,
to NVIDIA’s Thor,
to Raspberry Pi sneaking into synths,
and even the tiny ESP32 Cardputer—
the future of intelligent machines is getting closer,
smaller,
and a lot more musical.

Thanks for tuning in.
Catch you in the next episode.
