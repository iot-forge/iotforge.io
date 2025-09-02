## Intro

Hi, you’re listening to the IoT Forge News Digest.

The summer break is over. Engineers are back at work. Which, honestly, makes my life easier. Now there are so many new projects and announcements, I can barely fit them into one episode. I’m already stashing stories for the next show — and who knows, maybe it’s time to switch to weekly digests.

But for now, I’m still trying to keep each episode easy to digest — about ten minutes long. If you’d prefer deeper dives, let me know. Drop a comment on YouTube, or join the chat in our Telegram channel. All the links are on iotforge.io.

Alright, let’s dive in. I'm your host, Pavel Korshunov. Today is Tuesday, September 2nd, and this is our 17th episode.

### Open Source 3D Motion Platform with 50nm Precision

Picture this: you roll up to a drive-in and place an order.
“I’ll take a micromanipulator for maskless lithography. Maybe some localized electroplating for micro 3D printing. Oh, and a side of focus stacking for imaging. Add micro-machining, and… can I get pattern scoring with that?”

And the speaker answers: “Sure thing. That’ll be 50 nanometer precision. Mostly 3D-printed. Powered by cheap NEMA-17 motors. Open source.”

Yes. You got it.

This is exactly what Diffraction Limited channel just released: an Open Source 3D Motion Platform with 50nm Precision.

They shows how it works in their video, talks through the challenges, and highlights what open source makes possible.

Electromechanical engineers will admire the obsessive attention to detail.
ASMR fans might enjoy the build stage — the careful placement of parts, the glue, the satisfying screw turns.
3D printing folks will crack a smile when author runs a benchy G-code, except here it’s controlling a microscope stage, squeezed into a 20-micron envelope. Hypnotic to watch.
And of course, open-source enthusiasts will love the fact that everything is published and hackable.

It’s a brilliant reminder: open source isn’t just about software. It’s also about precision hardware, built together, shared together.

Overall — 25 minutes of pure engineering joy. Exactly what we’ve been missing in the Gen-AI era.

### 3D Printing an Elephant — Inside a Living Cell

Have you ever wondered if a 20-micron Benchy could fit an elephant?
Turns out — yes. If that elephant is just 10 microns tall.

Researchers at the Jozef Stefan Institute in Slovenia have actually 3D-printed a resin elephant inside a living cell. That’s right — a full model elephant, 0.01 millimeters long, created with a laser, through the wall of a cell.

Now, we’ve talked before — back in episode nine — about printing inside the body using liposomes and ultrasound to trigger polymerization. But this time, the approach was different.

The team injected a tiny blob of resin into a cell with a fine glass tube. Then they used two-photon polymerization — TPP — an optical technique with a femtosecond laser that can scan in 100-nanometre layers. In seconds, the resin solidified into the shape of… well, an elephant. Straight out of the Tinkercad shape library.

What’s mind-blowing here is the precision. The laser can print complex structures inside a living cell without destroying it. And after the leftover resin is absorbed, the printed object stays put. Even larger than the tube they started with.

And while this sounds like a fun “tiny elephant in a cell” demo, the real applications are huge. Imagine printing custom scaffolds or micro-tags — QR-code-like markers that could track individual cells, even after they divide.

I can’t pretend to fully grasp the medical horizons here. But the engineering — a near-IR femtosecond laser, building 3D structures at the scale of life itself — that’s just astonishing.

### Bambu H2C

But the follow Big drop from Bambu Lab is more friendly to ordinary people like you and me. Meet the H2S — their biggest single-nozzle printer yet. Build volume? 340 by 320 by 340 millimeters. That’s more than double the X1C. And it’s fast — a full meter per second, with acceleration that leaves the X1C about thirty percent behind.

Hotend goes to 350 °C, chamber to 65 °C, so you’re printing carbon fiber and engineering plastics without the usual warping. And the brains? Twenty-three sensors, three cameras — it basically babysits itself overnight.

Inside, you’ve got a beefy new servo motor with way more extrusion force, optional vision encoder for industrial-level accuracy, and even automatic hole compensation so parts actually fit first try. If you go for the Laser Full Combo, you also get engraving, cutting, and drawing, wrapped in a safety-packed glass enclosure.

And just to spice things up, Bambu teased the H2C. That’s their multi-color future. The trick? Swappable hotends — no wires, no plugs, all wireless with inductive heating. Each hotend weighs just ten grams, about the size of your thumb. The challenge is micrometer-level repeatability, but they’re solving it.

So, bottom line: H2S is here, bigger, faster, smarter. H2C is coming — wireless, colorful, and worth the wait.

### ESPHome 2025.8.0: ESPNow, nRF52 etc

Well, it’s time to shift gears from hardware to software. ESPHome 2025.8 release brings a lot, but I personally want to stop on two new features:

First — support for the nRF52 platform.
ESPHome is no longer just about ESP32 and ESP8266. Now it fully supports Nordic’s nRF52 microcontrollers running on Zephyr RTOS. That’s a pretty big deal. Why? Because Zephyr isn’t just another real-time OS — it’s open, flexible, and gives developers powerful tools for Bluetooth and NFC devices.

With this update, ESPHome users can now configure ADCs, GPIOs, and even advanced debugging features through Zephyr. In other words — low-power Nordic boards like the nRF52840 now fit right into your ESPHome projects. And this is just the start — it lays the foundation for the next generation of Nordic chips, like the nRF54 series, to join the ecosystem. I have a couple of Nordic nRF52840 boards and I can't wait to try out this new feature.

Second — mesh networking with ESP-NOW.
Espressif’s ESP-NOW protocol is now baked into ESPHome. That means devices can talk directly to each other, no Wi-Fi router in the middle. The result? Lower latency and ultra-low power consumption.

You get the full toolset here: send and broadcast packets, listen for incoming ones, auto-add peers, even choose the channel you want to use. And the real magic shows up in the field. There’s a story on Reddit of a tiny ESP-01 running on a single 18650 cell. It wakes up every 15 minutes, fires off data via ESP-NOW in about 150 milliseconds, then goes back to sleep. That little guy ran for 10 months on one charge. And now building the bridge between ESPNow and your home automation is easy, so if you’re building battery-powered sensors, light control, or local command systems — ESPHOME and ESP-NOW makes flexible, autonomous mesh networks not just possible, but practical.

### Outro

And that wraps up this episode of the IoT Forge News Digest.
Next time, we’ll dig into fresh releases from Raspberry Pi and NVIDIA, so stay tuned.
If you haven’t yet, hit subscribe on YouTube or follow us on your favorite podcast app -- so you don’t miss what’s next in IoT.
Thanks for listening, and I’ll catch you in the next one.
