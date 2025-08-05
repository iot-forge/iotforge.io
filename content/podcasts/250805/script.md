## Intro

Hi, you’re listening to the IoT Forge News Digest. I’m Pavel Korshunov, it’s Tuesday, August 5, 2025, and this is Episode 15.
For today we got Drones flying at high speed with insect-inspired brains, Real-life cyborg cockroaches on a rescue mission, robots learning to understand their own bodies and more.
Let's get started

---

Imagine this: a swarm of drones zipping through a warehouse at top speed, dodging obstacles with zero human control. No GPS. No communication between drones. Just pure autonomy.

Researchers at Shanghai Jiao Tong University have developed a new way to control drone swarms in complex, cluttered environments. Instead of the traditional chain of modules—state estimation, mapping, planning—they’ve gone minimalist.

Here’s the magic:
	•	A tiny neural network, just three convolutional layers.
	•	It runs on a $21 microcontroller paired with a $300 depth camera.
	•	The depth map? Only 12×16 pixels. Yes, lower than your smartwatch screen.

Despite this, the drones can fly up to 20 meters per second, avoid collisions, and move as a coordinated swarm—without talking to each other.

Training the network is just as surprising:
	•	It takes two hours on an RTX 4090 GPU.
	•	All in a simulated environment with simple geometric obstacles.
	•	Yet the drones show real-world agility and robustness.

The takeaway? Sometimes simplicity and physics awareness beat huge datasets and fancy sensors.
And if you haven’t yet -- check out the video in the article. Watching those drones weave through a room full of obstacles is mesmerizing.

---

But hey, drones aren’t the only ones getting upgrades.

If humming drones sound cool, how about hissing cockroaches?
In Singapore, scientists at Nanyang Technological University have built the world’s first automated cyber-insect factory. Yes, they’ve turned Madagascar hissing cockroaches into tiny cyborg robots and automated the process of putting little electronic “backpacks” on them.

Here’s why this matters:
	•	The robotic line is fast -- equipping one roach in just a little over a minute, about 60× faster than by hand.
	•	In under eight minutes, four cyber-roaches are mission-ready.
	•	The roaches walk on their own, but soft electrical pulses guide them left or right.

The upgraded backpack is 25% more energy efficient, so the insects can run longer without stress. They can even turn 70 degrees and slow to two-thirds of their normal speed on command.

And this isn’t just a lab stunt. On March 30, 2025, a team of 10 cyber-cockroaches joined the search for survivors in Myanmar after a 7.7-magnitude earthquake. Traditional robots would have struggled in the tiny gaps of collapsed buildings, but these little cyborgs crawled right in.

The NTU team hopes this approach will scale to mass production, creating swarms of insect-based first responders for disaster rescue and inspection work.
Creepy? A little.
Brilliant? Absolutely.

---
And speaking of brilliant… what if our robots could actually feel their own bodies?

At MIT, scientists have created a vision-based system that teaches robots to understand their own movements, almost like developing a sense of proprioception.

Here’s how it works:
	•	Cameras watch the robot move.
	•	A machine learning algorithm builds an internal “body map.”
	•	Over time, the robot learns where all its joints are, predicts how it will move, and can adapt if slightly damaged.

Why is this exciting?
	•	No need for sensors on every joint—the cameras are enough.
	•	Robots can handle unexpected environments and new tasks without full recalibration.

This could mean safer industrial arms, mobile robots that can confidently navigate messy, unpredictable spaces, and in the long run… robots that are a little less clumsy than us.

If this sounds familiar, it’s because we talked about a similar approach from the University of Nottingham in our 12th episode on June 24, 2025. Back then, we explored how their system used self-modeling and sensor fusion to give robots a sense of their own bodies.

Why is this a hot topic right now?
Because robot autonomy isn’t just about seeing the world —- it’s about understanding themselves. Robots that can self-model can:
	•	Recover from damage without human intervention,
	•	Adapt to new tasks and environments on the fly,
	•	And eventually, work safely alongside humans in factories, disaster zones, and even our homes.

So, from drone swarms with insect-inspired brains, to actual cyborg cockroaches, to robots that are learning to understand themselves -— the world of robotics is buzzing, hissing, and maybe even thinking.


---

And to wrap up today, I want to share a link to the State of the Open Home 2025 video from Home Assistant.
One of the highlights is a talk by the Senior Director of Technology and Facilities at the National Museum of Organized Crime and Law Enforcement. He explains how the museum uses Home Assistant as its central brain to monitor and control all IoT devices.
They rely heavily on Shelly devices, along with other sensors and actuators, and they have a strict rule: if a device can’t provide local control, they simply don’t use it. Temperature, motion, and energy consumption are all tracked in real time on their custom dashboards.
Compared to many commercial smart home solutions, Home Assistant gives you flexibility, deep integration, and the freedom to build custom dashboards and automations -- all without monthly fees.
It’s a fantastic real-world example of what’s possible with Home Assistant, and I hope it inspires you to experiment more with your own smart home setup.

---
And that wraps up this episode of the IoT Forge News Digest.
From humming drones to hissing cockroaches, the world of robotics just keeps getting stranger and smarter.

If you enjoyed today’s stories, check out the links in the show notes to see these drones and cyber-insects in action.
And don’t forget to subscribe on your favorite podcast platform so you never miss the next dive into the future of IoT and robotics.

Thanks for listening, and until next time -- keep building, keep tinkering, and stay curious.
