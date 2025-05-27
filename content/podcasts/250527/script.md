**\[Intro]**
Welcome back to IoT Forge Unplugged News Digest, your dive into the latest in IoT, robotics, embedded devices, and all the smart things shaping our world today. I'm your host, Pavel, and today we have an exciting lineup exploring groundbreaking innovations, practical implementations, and clever hacks for everyday challenges. So grab your coffee, tune in, and let's dive right in. Today is May 27th and this is our 10th episode!

---

### From salad beds to byte beds

Let’s start with the ESPHome 2025.5.0 release. It quietly introduced a new feature called **Packet Transport**. What is it? A way to send data from one ESPHome device to another, directly over UART or UDP. No MQTT, no brokers — just raw packets. But with optional encryption, rolling codes, and even challenge–response protection.

Who needs this? Anyone who’s ever tried to hook up a few I²C sensors in a greenhouse and hit the distance limit of the bus. Now you just place the sensors right next to the plants, send the data over a cheap RS‑485 or UDP link, and receive it on another ESP device — even 50 meters away. Suddenly, your garden turns into a micro mesh network on the edge of your farm.

If you want to go even farther — there’s a project by *Brian Dorey*: a Raspberry Pi Pico with LoRa for remote soil moisture monitoring. Two microcontrollers, a pair of radios, solar panel, moisture sensor — and it all streams into Home Assistant, with beautiful charts in Grafana. The range? Almost a kilometer!

You can start with LoRa to validate the idea, then switch to UART if the range is shorter. What matters is — soil analysis and irrigation control are no longer living in the server room, they’re now out there, in the field, in real time.

For the managers listening: this isn’t about cheap sensors — it’s about **fewer tractor runs, smarter water use, and zero LTE costs**. For the engineers: one YAML file. No brokers. No headaches when Wi‑Fi decides to play hide and seek.

---

### When the remote is smarter than the TV

Saturday night. You sit down to watch a movie. My LG projector remote has 46 buttons. I use maybe six. The rest just get in the way in the dark — and sometimes they trigger stuff I never meant to press. Want to pause the movie? Boom — you’re in the settings menu.

That’s how the **Everything Remote** was born. ESP32, ESPHome firmware, 3D‑printed case — all after the original remote broke. The device stays asleep until you press a button. Then it wakes up, connects to Wi‑Fi in a couple of seconds, sends the needed command — and goes back to sleep. The battery lasts a couple of weeks.

I’m definitely going to try it myself: control the projector, adjust the soundbar volume, dim the Zigbee lights, or trigger a Home Assistant scene — 10 buttons is more than enough.

But the real story isn’t the device — it’s the approach. Smart remotes turn disconnected devices into a single, intuitive control layer. It all works quickly, naturally — almost like muscle memory. And no apps needed.

A quick engineering note: if you’re using Wi‑Fi, make sure you assign a static IP or enable mDNS — otherwise, the first connection can be slow. I highly recommend watching the full video from the creator — the link is in the description.

---

### Robots where the air is on fire

A year ago, during wildfire season in California, we were tossing around an idea in the community: what if a rover could cut its own path through the flames while people stayed safely out of harm’s way? Well — now there’s something similar: a project by Genozen called **The Guardian**.

It’s a tracked platform from Super Droid, running on a Jetson Orin Nano with a YOLO-based neural net that detects flames, and it works autonomously — at least in the concept stage. They’ve also shown a 1:5 scale prototype that doesn’t yet match all the claims but still clearly moves the needle. I really recommend checking it out — when building mission‑critical machines, every detail can matter, and some of their ideas might save you from repeating mistakes.

---

### Quick pings before we wrap

A couple of quick updates:

– **Homey Pro mini** is now open for pre-orders in the US and Canada. $199 — half the price of the full model. It works without subscriptions, supports Thread, Matter, Zigbee, Ethernet — but it’s capped at 20 local integrations. A perfect choice for folks who don’t want to mess with YAML and Home Assistant.

– The **SmartThings Developer Portal** has added a *Schema Cloud Connector* and an Edge Driver Generator. That means the path from your REST-based device to WWST certification just got shorter. For those building gadgets — less paperwork, faster onboarding into Samsung’s ecosystem.

---

**\[Wrap-up]**

That’s it for today. Turns out, the theme of this episode is **locality and autonomy**. The closer the computation is to the action — the faster the response. Whether it’s watering a seedling or suppressing a fire.

Until next time — may your packets be reliable, your batteries charged, and your ideas contagious. This was Pavel with *IoT Forge News*. Thanks for listening — and happy hacking.
