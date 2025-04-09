Hey everyone, and welcome to *IoT Forge Unplugged*! Every two weeks, we dive into the latest and most intriguing happenings in the world of IoT with this bite-sized podcast, breaking down key updates and emerging trends.

I’d love to hear from you—whether it’s feedback, story suggestions (because, let’s be real, my picks often align with my own interests), or just sparking discussions within the community.

So, let’s jump in! Today is February 18th, and this is our fourth episode of 2025.

---

## Home Assistant: Smarter Smart Homes?

The first thing that caught my attention was a video from *Snazzy Labs*, where the host outlines four key principles for building a smart home: (1) devices must function manually, (2) control should be centralized, (3) devices must be locally controllable without reliance on external servers, and (4) automation should never interfere unexpectedly.

These principles have remained solid over the years, but the smart home landscape has evolved significantly—especially with the introduction of *Matter*, a universal smart home standard.

Matter aims to ensure cross-platform compatibility, allowing devices to work seamlessly across Apple, Google, Alexa, and SmartThings ecosystems. It runs on local networking via IPv6 and supports communication through Ethernet, Wi-Fi, or Thread, a low-power mesh network. However, while Matter simplifies connectivity, real-world adoption is inconsistent, with different ecosystems integrating updates at varying speeds.

One major drawback? Matter doesn’t require full adoption of all its features, leading to fragmented support. For example, a dishwasher might work with Amazon but not Apple, while a robot vacuum could be compatible only with select platforms. Multi-admin support *theoretically* allows devices to be shared across ecosystems, but missing features and manual setup make it clunky.

Despite Matter’s potential, *Home Assistant* remains the more powerful and flexible choice. It already supports the latest Matter updates while integrating non-Matter devices and enabling advanced features like camera streaming. Unlike closed ecosystems, Home Assistant is open-source, community-driven, and ensures long-term support.

While Matter is pushing the industry toward better compatibility, it remains a work in progress. If you want full control over your smart home, Home Assistant is still the best bet.

You can find the link to the video in the podcast description.

---

## Now let’s talk about the growing need for AI at the edge. As IoT devices become more powerful, the demand for real-time data processing is skyrocketing. Enter the STM32N6—a microcontroller designed to bring AI capabilities to embedded systems. But is it the right choice for your next project?

The IoT world just got a major upgrade with the launch of the *STM32N6*, STMicroelectronics’ most powerful microcontroller yet. This Neural Processing Unit (NPU)-accelerated MCU is designed for applications like robotics, drones, and AI inference at the edge. But is it a game-changer or overkill for most IoT projects?

### Why the STM32N6 Stands Out

This is the first STM32 MCU featuring ST's *Neural-ART Accelerator™*, a 1GHz machine-learning engine delivering up to 600 GOPS with an average of 3 TOPS for AI tasks. That means real-time computer vision, audio processing, and even H.264 video encoding—powered by a Cortex-M55 running at 800 MHz with 4.2MB embedded RAM.

The phrase "600 GOPS at an average of 3 TOPS" might seem contradictory at first, but it likely refers to different types of operations. GOPS might be for general-purpose operations, while TOPS could be specific to AI-related workloads (e.g., tensor processing, matrix operations, or neural network inference).

It also packs high-speed interfaces like MIPI CSI-2, Hexa-SPI, and Octo-SPI, making it highly adaptable for AI-driven embedded systems, wearables, and industrial automation.

### The Drawbacks

However, despite its raw power, the STM32N6 isn’t ideal for every IoT project:

- **No Built-in Wi-Fi:** Unlike the ESP32, which includes wireless connectivity, the STM32N6 requires an external module.
- It’s **power-hungry** compared to ultra-low-power chips like the nRF52.
- **Higher Cost & Complexity**: The STM32N6 is great for AI-heavy applications, but simpler IoT projects might benefit from something cheaper and easier to develop, like the ESP32 or nRF52. Pricing starts at $20 per unit, but bulk orders of 1,000 or more bring the cost down to under $10 per unit.

### Who Should Use It?

This microcontroller is perfect for:

✔️ Autonomous drones & robots\
✔️ Smart security cameras\
✔️ AI-powered healthcare wearables\
✔️ Automotive sensor fusion & Advanced Driver-Assistance Systems.

For traditional IoT applications requiring low power and built-in Wi-Fi, you’re still better off with the ESP32 or nRF52.

### Final Verdict

The STM32N6 pushes the boundaries of embedded AI but won’t replace the ESP32 or nRF52 in every scenario. If your project requires real-time AI at the edge, it’s a game-changer—otherwise, you might want to stick with more cost-effective options.

Would you use the STM32N6? Let us know in the comments!

---

## IoT Security: Mars Hydro’s Data Leak Raises Alarms

The next topic will be relevant any time: no matter if there won’t be any announcement of new chips or cloud-based IoT hubs. The "S" letter in "IoT" stands for "Security," and this is the next topic I want to shed light on:

Cybersecurity researcher *Jeremiah Fowler* recently uncovered a major data exposure—2.7 billion records tied to *Mars Hydro*, a Chinese manufacturer of IoT-enabled grow lights. The unprotected database, totaling 1.17 terabytes, contained Wi-Fi credentials, IP addresses, device details, and API logs.

The exposed database, seemingly linked to *LG-LED SOLUTIONS LIMITED*, raises significant privacy and security concerns. Despite responsible disclosure efforts, Mars Hydro was initially unresponsive before eventually confirming the leak originated from its *Mars Pro* app. It remains unclear how long the data was exposed or if malicious actors accessed it.

### Wider IoT Security Concerns

This breach highlights ongoing security risks in IoT, including:

- Weak encryption
- Default credentials
- Outdated software

Unsecured Wi-Fi credentials can enable "nearest neighbor attacks," where hackers gain network access to manipulate smart devices or launch botnet attacks.

### Preventing Future Incidents

Experts urge IoT manufacturers to:

✅ Implement stronger encryption\
✅ Restrict public access to cloud storage\
✅ Conduct regular security audits

While there’s no evidence of wrongdoing by Mars Hydro, this incident underscores the urgent need for better security across IoT ecosystems.

---

## Cellular IoT Market: Growth, Challenges, and the Future

To the next topic: 
The cellular IoT module market has hit a rough patch. While the industry is expanding, some vendors have seen sales drop by *50%* since 2023.  And what’s the reason behind this downturn? Companies stockpiled modules during the *2021–2022 chip shortage* and are still burning through that inventory, leading to a slowdown in new sales.

### Winners and Losers

*Quectel* is thriving due to its ability to diversify revenue streams in automotive and broadband, allowing it to stay ahead in the market. Meanwhile, *u-blox* has completely exited the IoT module business, choosing to shift focus to other technologies. At the same time, *Unionman* is gaining traction in China, though its influence on the global market remains limited.

### The Rise of Large-Scale Deployments

Despite vendor struggles, large-scale IoT projects are booming:

Automotive leads the way with 230 million active connections, powering everything from vehicle tracking to autonomous systems. The utilities sector follows closely with 139 million smart meters, playing a crucial role in energy management. Meanwhile, transport and logistics contribute 100 million connections, enhancing fleet tracking, cargo monitoring, and supply chain efficiency.

The market is expected to reach *1 billion* cellular IoT connections by 2028, growing at an average rate of 10.7% per year from now until 2028.

### What’s Next?

What’s next? The future of cellular IoT will be shaped by several key factors. Next-generation networks like 5G will create a clear divide between companies that innovate and those that struggle to keep up. Businesses that diversify across multiple IoT sectors will have a greater chance of thriving in this competitive market. Additionally, as demand shifts, the ability to scale internationally will become increasingly crucial for success.

---

## That’s a Wrap!

That’s it for today! We covered smart home trends, AI-powered microcontrollers, IoT security, and the evolving cellular IoT market.

What are your thoughts? Are we witnessing a temporary slowdown, or is the industry headed for a major shift? Let’s discuss!

If you enjoyed this episode, hit like and share it with your colleagues. Join *IoT Forge*, stay curious, and have an amazing day! See you next time—bye!

