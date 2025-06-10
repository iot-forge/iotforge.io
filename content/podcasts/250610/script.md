## Intro

Hi, you’re listening to the IoT Forge News Digest. This is episode 11, recorded on June 10 2025. I’m Pavel Korshunov—let’s get straight to the news.

## Aloha 2 & MuJoCo

Let’s kick off today with a look at a fascinating new robot unveiled at Google I/O — Aloha 2, developed by Stanford University in collaboration with Google DeepMind and other partners. It’s part of their efforts to integrate robotics with Gemini, Google’s multimodal AI model.

In the demo video, we saw Aloha 2 responding to voice commands. Two robotic arms smoothly manipulated objects on a table, using multiple cameras to recognize their surroundings. The robot was able to identify and move items according to user instructions — a powerful showcase of spatial awareness and natural language interaction.

So, what is Aloha 2?

Aloha 2 is an open-source robotic platform developed in 2024 at Stanford’s IRIS (Intelligent and Interactive Robotics) Lab, with support from Google DeepMind. The system is designed to be a testbed for general-purpose robotic intelligence — it combines dexterous hardware, real-time perception, and large language model integration.

While exploring Aloha 2, I also came across something that might interest robotics and simulation enthusiasts: MuJoCo.

MuJoCo (Multi-Joint dynamics with Contact) is a powerful physics engine used for simulating robotic systems with precision and speed. Originally created by Emo Todorov and now maintained by DeepMind, it’s widely used in research and development. One of its strengths is the rich library of prebuilt models — including well-known robots like Boston Dynamics’ Spot. So if you’ve ever dreamed of controlling Spot but didn’t want to spend tens of thousands of dollars, just load the available model in MuJoCo. You can control its joints via an API or simply by dragging sliders in the built-in emulator.

Back to Aloha 2 — the full hardware kit is priced around $30,000, so it’s not something most of us can casually experiment with. However, since the project is open-source, replicating parts of it on a smaller scale is possible if you’re willing to work through the details.

Keep in mind that components like the Intel RealSense cameras are also quite pricey. Still, studying this platform — especially how it integrates language models for control — is well worth your time.

Links to the Aloha 2 and MuJoCo projects are in the description.

## “see” and “act”

When discussing robot manipulation with colleagues, we found ourselves circling around a simple but profound observation: many of the everyday actions we take for granted — like grabbing an apple, bringing it close, and taking a bite — are astonishingly complex from a mechanical and neurological standpoint. These seemingly effortless motions involve dozens of muscles and years of subconscious learning. Our brains have built an intricate model of how to coordinate what we see, what we feel through touch, and how we move in response.

Now, imagine trying to teach a robot to do the same. Even basic visual perception — identifying objects in an image — requires substantial computational resources in today’s machine vision systems. The standard approach processes images pixel by pixel to detect object boundaries and classify them in space. It’s effective, but energy-hungry and slow.

This brings me to two recent papers that offer different and exciting directions in how robots might better “see” and “act.”

⸻
First is about Smarter Sensors: Offloading Vision to the Hardware

In a paper from a Korean research group (link in the episode description), scientists propose a paradigm shift: move part of the visual processing — specifically image segmentation — into the sensor hardware itself. By doing so, they aim to reduce the data volume that needs to be transmitted and processed downstream.

The physics and math behind their approach are quite advanced, likely beyond the scope of a short podcast segment. But the core idea is clear: preprocessing visual data right at the sensor could massively improve efficiency, especially for edge robotics where bandwidth and power are limited.

⸻

The second paper, from researchers at MIT, takes a fresh look at motion planning. They developed a system called Diffusion-CCSP — a method that uses generative diffusion models to quickly and accurately plan robotic actions involving object interaction.

So, what’s a diffusion model?

It’s a type of neural network that learns to generate data — such as images, movement sequences, or plans — by starting with pure noise and refining it over many steps. Think of it like developing a photo in a darkroom: the image starts as randomness, but gradually takes shape through repeated refinements.

In robotics, this approach means the system can generate likely motion trajectories, even under uncertainty.

Here’s how Diffusion-CCSP works:
	1.	It starts by rapidly generating a coarse action plan based on the configuration of objects.
	2.	Then, it refines this plan by simulating the physics of the scene and solving for task-specific constraints (like grip stability).
	3.	All of this happens in simulation — but crucially, the model transfers smoothly to real-world robots without significant performance drop.

⸻

Why does this matter?

Because it enables robots to quickly adapt to real-world scenarios — whether it’s a factory floor, a warehouse, or your living room. Instead of relying on preprogrammed actions or slow recalculations, robots using diffusion models can “decide on the fly” how to grab and move an object, even in unfamiliar positions.

This is a major step toward robots that are not only smart, but flexible — a crucial ingredient for automation outside of tightly controlled environments.

## Another Application of Machine Learning in Robotics

Again, researchers at MIT have developed an adaptive control system for autonomous drones capable of maintaining a set trajectory even under strong and unpredictable wind conditions. The system is based on machine learning — specifically, a form of reinforcement learning that allows the drone to train itself during flight.

Using just 15 minutes of flight data, the model adapts in real time and no longer requires a pre-programmed model of external disturbances. Instead, it autonomously selects the optimal strategy to compensate for changes in the environment, such as gusts of wind or turbulence.

This approach led to nearly a twofold reduction in trajectory error compared to traditional control methods. Even more impressively, the system was able to handle wind patterns it had not encountered during training — a major breakthrough for generalization in real-world flight.

This is a promising step forward for drone-based delivery systems. Improved trajectory accuracy means lower risk of damage, reduced insurance costs, and overall more efficient logistics — bringing us closer to a future where aerial delivery of goods is fast, reliable, and economical.

## PCB

Every Engineer Wants a Robot. That Means Learning to Design Your Own PCB

Like many engineers, I’ve always carried around a quiet ambition: to build my own robot. Not just assemble one from kits or dev boards—but to really build it. From the circuits up. And that inevitably leads to a rite of passage: designing your own printed circuit board (PCB).

It’s a step that feels both thrilling and intimidating. But recently, I came across two things that helped bridge that gap—a design competition full of clever ideas, and a leap forward in the professional tools we use to bring those ideas to life.

The “Becoming a Board Designer” Competition

Back in early 2024, Hackster.io and Autodesk Fusion launched a challenge with a deceptively simple title: “Becoming a Board Designer.” The premise? Use Fusion 360 to design your own PCB, build something real, and make it open enough that others could follow in your footsteps.

That last part mattered. It wasn’t just about creating something functional—it was about documentation, sharing, and reusability. The kind of project that inspires someone else to start their own.

Some of the entries were surprisingly sophisticated:
	•	A Cat Feeder powered by an ESP32, with a clean board layout and a custom 3D-printed case.
	•	A Smart Light Controller for the wall, using an ESP8266 and a capacitive touch interface.
	•	A Motion Controller, tiny and USB-C powered, that can drive both servo and stepper motors.
	•	A Badge Tracker with GPS and an OLED screen—basically, a wearable positioning system built on ESP32.
	•	A Plant Care Device that monitors moisture and reports to the cloud.
	•	A secure RFID Door Lock, complete with display.
	•	A Handheld RFID Cloner, built for mobility and ease of use.
	•	A DIY Hotplate—a reflow soldering station with infrared heating and precise temperature control.
	•	And The One Board, a kind of Swiss Army knife of ESP32 development, packed with GPIOs and ready-to-go modules.

I’ve opened Fusion 360’s PCB workspace myself more than once. The interface feels natural, especially with its deep 3D modeling integration. But I’ll admit—none of my projects have yet made it to fabrication. I always seem to veer off into the next big idea before I hit “order.” Still, watching what others have achieved with just time, creativity, and some well-documented files? That’s fuel for the fire.

Next-Gen Tools, Now for Everyone

While those makers were pushing the envelope with open-source tools, something big was happening in the world of professional software too.

Just recently, Siemens—through its Siemens EDA division, the former Mentor Graphics—announced a major update to its high-end Xpedition platform. The spotlight feature? Artificial Intelligence woven directly into the design process.

Features that once seemed reserved for corporate teams and massive budgets are becoming more accessible:
	•	AI-assisted autorouting that does more than just connect the dots—it understands intent.
	•	Real-time design feedback, suggesting improvements as you go.
	•	Error detection right from the start, not after dozens of hours are spent.
	•	Cloud-powered workflows that bring your idea to prototype faster than ever.

In other words, PCB design is getting smarter—and fairer. Tools are no longer the bottleneck. And for anyone dreaming of building their own robot, this is good news. Because it means fewer barriers between idea and reality.

And maybe, just maybe, the next time I fire up Fusion 360, I won’t stop halfway through. I’ll finish the board. I’ll send it off. And I’ll finally hold a piece of that dream in my hands.

## Outro

That’s all for today. Thanks for tuning in, and I’ll be back in two weeks with the next digest.
