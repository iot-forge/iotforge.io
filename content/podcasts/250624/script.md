## Intro

Hi, you’re listening to the IoT Forge News Digest. I'm your hos, Pavel Korshunov, it is Tuesday, June 24th, 2025 and this is episode 12. Lets get started.

### [Enhancing Positional Accuracy of Mechanically Modified Industrial Robots Using Laser Trackers](https://www.mdpi.com/2218-6581/14/4/42)

Starting today’s news digest, I want to highlight a scientific paper from researchers at the University of Nottingham. In previous episodes, we’ve already touched on how neural networks assist in robot control — and of course, one of the key challenges here remains positioning accuracy.

The paper I’m linking in this episode’s description offers an elegant solution: the researchers propose mechanical extensions to existing multi-axis manipulators by modifying the end effector and introducing a feedback algorithm based on a laser tracker. Their approach leverages a neural network to improve positioning precision without requiring a full mechanical overhaul of the robot. The neural net compares real joint positions and angles to calculated ones, continuously correcting errors in real time.

What does this mean going forward?
This method shows strong potential for upgrading existing industrial robots without replacing them entirely. By combining minor hardware tweaks with AI-powered precision control, manufacturers could significantly enhance performance in areas like welding, assembly, or even surgery — making robotics not only smarter, but also more cost-effective and widely accessible.

### [ROS package search for robot software development: a knowledge graph-based approach](https://link.springer.com/article/10.1007/s11704-024-3660-9)

Let’s move on to another important topic. Precise control over a robot’s movement is great — but that movement has to be in response to control commands. And for many engineers, that control is handled through the Robot Operating System (ROS), which acts as the “OS” of the robot.

I’ve been considering using ROS in one of my own projects for a while now, but I don’t yet have hands-on experience with it. So, the issue discussed below isn’t a personal pain point — yet. Still, the proposed solution seems promising and worth noting.

The problem is this: finding the right ROS packages is surprisingly difficult. Most people rely on keyword-based search through Google or GitHub — but the results are often too broad or just not relevant. Why? Because the developers who write the code often don’t spend much time on documentation or clear descriptions. That makes it hard for traditional keyword-based search to return useful results.

The authors of the paper propose a new semantic search method for ROS packages, based on a ROS Package Knowledge Graph (RPKG). To build it, they used multi-dimensional feature extraction techniques to identify semantic elements from package descriptions — including file names, categories, supported hardware, characteristics, and functionality. The result: over 32,000 entities and nearly 55,000 relationships in the graph.

They then constructed a domain-specific robotics text corpus and fine-tuned a BERT-based model called BERT-ROS. This allowed them to generate meaningful semantic representations of both search queries and package content — enabling search by meaning, not just keywords.

Additionally, they designed a matching algorithm that weighs the similarity of features between queries and packages. In experimental comparisons with four other methods — GitHub, Google, ROS Index, and ChatGPT — their approach delivered 21% higher accuracy across all levels, proving its effectiveness.

My take: if tools like this become more common, engineers will spend less time writing descriptions and more time building functionality. And that’s exactly how it should be.

### [Steam Deck as ROS Host and Controller](https://github.com/ICE9-Robotics/ROS-for-Steam-Deck-OLED)

While digging for stories for the next news digest, I stumbled upon something quite unexpected—and let me apologize in advance if this tempts anyone into buying a Steam Deck. Enthusiasts have been running the Robot Operating System (ROS) on the Steam Deck and even using it as a controller for robots. A couple of links will be in the description.
It might seem a bit extravagant to spend that much money on what’s essentially just a controller—but if you take into account that this “controller” comes with a high-quality display and a compact yet powerful processor capable of handling serious workloads, the Steam Deck starts looking more like a hybrid between a control unit and an edge computing device. Granted, with the way AI trends are evolving, it might be worth holding off a bit longer—future versions of the Steam Deck may be better tuned for the increasingly ubiquitous demands of AI on the edge.

### 00:00 [Home Assistant 2025.6](https://www.home-assistant.io/blog/2025/06/11/release-20256/)
Let’s wrap up today’s news digest with a quick look at the latest features introduced in Home Assistant 2025.6.

The headline update—one that may help bring Home Assistant to a wider audience—is the new Alexa integration. Support has been added for Amazon Echo, Fire TV, and third-party Alexa-compatible devices. One of the showcased use cases involves automations like greeting a user with a friendly voice message—“Welcome home!”—when their presence is detected, or playing the radio on Alexa  Devices at sunset.

Another improvement, introduced just before this release, is in Bluetooth integration. You can now visually see all Bluetooth devices that your Home Assistant computer’s Bluetooth adapter can detect. This gives a clearer view of nearby devices and their connectivity status.

The Home Assistant team also continues improving UI and enhancing support for media player integrations, expanding how you control and automate multimedia experiences in your smart home.

### [ESPHome 2025.6](https://esphome.io/changelog/2025.6.0.html)

On the ESPHome side, the new release introduced its own implementation of USB Host components, currently supporting ESP32-S2 and ESP32-S3 chips. At this stage, only the usb_uart component is available, which allows ESP32 to communicate with plugged in USB serial devices.

However, the practical value of this feature still feels a bit unclear. On the surface, it seems like this functionality could help expand the range of peripherals that can be connected to a single ESPHome device. But there’s an open question: how demanding is the USB Host role on the ESP32’s CPU? USB communication, especially if not offloaded to a dedicated hardware peripheral, could place a significant processing burden on the microcontroller — potentially affecting the performance of other automation logic or sensor processing.

In short: it’s an exciting new feature that hints at expanded use cases, especially for advanced users, but its implications on system resources and overall reliability are yet to be fully understood.

###

And that’s it for today’s news. From using neural networks to improve robot accuracy, to turning the Steam Deck into a robot controller, we’re seeing how flexible and creative the world of smart tech is becoming. The big idea here? Making powerful tools easier to use. Whether it’s a better way to search for ROS packages or simple Alexa automations in Home Assistant, everything is moving toward helping more people build smarter systems faster. And even though features like ESPHome’s new USB Host are still a bit experimental, they open the door to new possibilities. Stay curious—and see you next time.
