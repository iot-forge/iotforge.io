Hello everyone, and welcome to IoT Forge!

Every week, we pick the most exciting news from the world of IoT to
share with you. Starting this week, we're adding a short podcast to
accompany our updates, where I'll dive into the stories and share my
thoughts.

I'd love for you to get involved -- send in your feedback, suggest news I
might have missed (since my interests are shaped by my hobbies), and
join the discussions around these topics.

So, today is January 7, 2025. Happy holidays to everyone! Let's kick
things off with today's big story -- Apple's Proxima chip!

Proxima

So, Apple is working on its own Wi-Fi and Bluetooth chip, codenamed
Proxima. This is huge because it could completely shift Apple's smart
home game. The chip is supposed to roll out later this year in updated
versions of the Apple TV and HomePod mini. What's exciting here is that
Apple is moving away from relying on Broadcom for these components. If
you've been paying attention, this fits right into Apple's whole "do
everything in-house" strategy -- like they've done with the M-series
chips for Macs.

Proxima will be made by TSMC, and it's designed to make Apple devices
sync better, use less power, and support the new Wi-Fi 6E standard.
Sounds like a win, right? But there's a catch. First-gen chips usually
aren't perfect, so matching Broadcom's performance right out of the gate
might be tough. That said, long-term, this gives Apple way more control
over its wireless tech.

And Apple isn't stopping there -- they're also reportedly working on an
AI-powered, wall-mounted home hub. Think of it like a super-smart
command center for your house. If they nail this, it could make Apple a
bigger player in the smart home space, where, let's be honest, they've
lagged a bit compared to Google and Amazon.

But this move is already making waves. Broadcom's stock took a hit
because Apple makes up 20% of their revenue. They'll still work together
on other projects, but clearly, Apple's building an exit strategy.

Now, zooming out, Proxima could open doors for thinner devices, new
wearables, and maybe even a standalone security camera. This isn't just
about smart homes; it's about Apple shaping the future of its entire
ecosystem. If Proxima delivers, it could be a game-changer for the way
we connect everything in our lives.

What do you think? Is Apple's move bold, risky, or both? Let me know,
and we'll keep this conversation going!

NBIoT

Let's talk IoT connectivity -- straight from space!

Mavenir and Terrestar Solutions (TSI) just completed their first live
NB-IoT (Narrowband IoT) data sessions using the TSI Echostar T1
satellite. Unlike lab tests, these trials were conducted in real-world
conditions in Ontario, proving the system's reliability and readiness
for widespread use with standard IoT devices.

The satellite operates in Geostationary Earth Orbit as part of a
Non-Terrestrial Network (NTN), tackling the age-old challenge of
providing mobile coverage in hard-to-reach areas. Key features like
24-hour connectivity, paging, and Non-IP Data Delivery were tested
successfully, using a custom Radio Access Network (RAN) by Mavenir.

To accelerate innovation, the two companies opened a Montreal lab,
dedicated to scaling satellite-based IoT solutions. Powered by Mavenir's
tech on AWS, it's designed for seamless collaboration and large-scale
deployments.

This milestone highlights how Non-Terrestrial Networks can enhance
traditional networks, delivering cost-effective, universal
coverage -- critical as IoT adoption explodes globally.

While reading this news, I came across the term "paging," something I
hadn't looked into before. Curious, I dug deeper, and here's what I
found -- it's actually a fascinating and critical part of how IoT devices
communicate efficiently! Let me share the details with you.

In the context of IoT and mobile networks, paging refers to the process
by which a network locates and establishes communication with a specific
device, such as an IoT module or mobile device, that is in a low-power
or idle state.

Key Points About How It Works:

• When the network needs to send data or a notification to a device, it
broadcasts a "paging message" to the cell or coverage area where the
device was last registered.

• The device, even in its idle state, periodically listens for these
paging messages to save power.

2\. Why It's Important for IoT:

• Many IoT devices (e.g., sensors, trackers) operate in low-power states
to conserve battery life. Paging allows these devices to remain
reachable without staying in active communication with the network.

• Efficient paging ensures reliable communication with devices while
minimizing power consumption -- a critical factor for IoT applications.

• For non-terrestrial networks (like the TSI Echostar T1), paging
ensures that IoT devices in remote or hard-to-reach areas can be
contacted even if they are not constantly transmitting data.

• It's a vital feature for applications like remote monitoring, where
devices might need to "wake up" only when specific data or alerts are
required.

In the trials conducted by Mavenir and Terrestar, successful paging
demonstrated that their satellite-based network could reliably locate
and wake IoT devices under real-world conditions, a major step toward
making the system practical for widespread use.

Could satellite IoT be the key to universal connectivity? Let me know
your thoughts!

NVIDIA

Let's talk about the NVIDIA® Jetson Orin™ Nano Super Developer Kit -- an
affordable powerhouse for IoT and edge computing!

Priced at just \$250, this developer kit packs impressive AI
performance, making it perfect for edge computing tasks like real-time
video analytics, robotics, or smart IoT devices. It allows developers to
build and test solutions that leverage the power of AI and machine
learning without breaking the bank.

NVIDIA envisions a seamless path where you prototype on this board and
later collaborate with them to manufacture a full-scale product. Sounds
great, right? But there's a catch -- NVIDIA struggles to keep up with
demand. Long queues and extended waiting times for production orders can
significantly delay your project timeline, especially if you're looking
to scale quickly.

So while the Orin Nano Super Developer Kit is a fantastic entry point
for innovation, its practicality for production needs careful
consideration, especially given NVIDIA's current supply constraints.
It's a great tool to start with but not a silver bullet for every IoT
project!

Arduino schematic

From news, let's shift gears to a personal project!

Recently, I finally got around to setting up virtual walls for my robot
vacuum. To do this, I decided to repurpose some old Arduino Uno boards
that had been collecting dust. For power, I planned to use a 9-volt
battery, but before diving in, I hit the internet to double-check if
that was within the official power specs for the Arduino Uno.

That's when I stumbled upon an incredibly detailed article breaking down
the Arduino Uno's circuit design at a very low level. The article dives
into the schematic, explaining each section of the board and the
concepts behind its design. It's a fascinating read if you're curious
about how these boards work under the hood.

I found the article super educational and would highly recommend it to
anyone looking to deepen their understanding of PCB design. While it's
not a full replacement for formal learning, it's a great way to spark
your interest and might even motivate you to learn more about
electronics.

RPI GPIO and Arduino Cloud

Ok lets finish with an article from the Arduino Project Hub: how to
Control your Raspberry Pi GPIOs from Arduino Cloud using Node.js /
Javascript

Building on our last discussion about edge computing and the powerful
tools available for IoT development, this project using Raspberry Pi
GPIOs, Arduino Cloud, and Node.js offers a great way to dive into
hands-on IoT. Just like the NVIDIA Jetson Orin Nano Kit lets you play
around with edge computing, this setup lets you control your Raspberry
Pi's GPIO pins from a cloud dashboard -- an easy way to get started with
cloud-enabled IoT solutions.

If you're looking for an affordable and practical way to extend your IoT
skills, I highly recommend trying out this tutorial. It's simple, fun,
and gives you a real feel for building interactive applications. The
best part? It helps you experiment with cloud integration and real-time
control, similar to what we discussed with edge devices.

And that wraps up today's episode! I hope you found the discussions
useful and that they sparked some inspiration for your own projects.
Remember, this podcast is all about you, so please don't hesitate to
send in any news, participate in the discussions, or leave feedback.
It's always great to hear what's on your mind!

Also, a quick reminder: finding fresh, valuable news in the IoT world
isn't always easy, and I also try to avoid overlap with our biweekly
IoTuesday brown bag sessions. But I promise we'll be back in two weeks
with more news and articles, so stay tuned!

And hey, if you haven't joined IoT Forge yet, what are you waiting for?
It's a great way to learn, share, and connect with others in the
community. You can't go wrong with that!

Until next time, take care and keep building! Cheers!