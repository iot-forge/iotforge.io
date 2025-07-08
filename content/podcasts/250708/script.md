## Intro

Hi, you’re listening to the IoT Forge News Digest. I'm your host, Pavel Korshunov, it is Tuesday, July 8th, 2025 and this is episode 13. Let's get started.

## PRS

Let’s kick off today’s episode with a quiet hero inside many Silicon Labs chips: the Peripheral Reflex System, or PRS.
If you’ve only worked with Arduino-class boards or even the ESP32, PRS might still be under your radar, but it has been shipping in EFM32 “Gecko” parts for well over a decade and keeps getting better with every MCU generation — the newest Series 2 devices even add logic functions and asynchronous channels that stay alive down to the EM3 deep-sleep mode.

So what problem does PRS solve?
Imagine a classic microcontroller that must notice a rising edge on a GPIO pin:
An interrupt fires, then the CPU wakes, services the ISR (ISR — Interrupt Service Routine), maybe kicks the ADC ( analog to digital converter), then goes back to sleep.

Do that a few dozen times per second and your battery pays the bill.

PRS rewires that workflow. It’s a hardware event-matrix: the GPIO (producer) can be cabled directly to the ADC (consumer). The core stays in deep sleep while peripherals gossip among themselves in hardware. Latency drops to single-digit microseconds, energy drops because the core never stirs, and your firmware stays leaner (fewer ISRs, fewer state machines).

What I specifically like:
	•	Instant reaction – events propagate in hardware, so there’s no scheduler jitter.
	•	Deterministic timing – perfect for real-time motor control or sensor capture where “maybe later” just won’t do.

Let’s tie it to a real-world example:
Silicon Labs’ own training labs show a temperature sensor on I²C whose ‘data-ready’ line triggers the PRS, which then start-pulses the IADC, whose “conversion-done” output toggles an OLED pixel — all without a single line of ISR code. The core only wakes when you actually need to process a finished frame, not for every bit-bang on the bus.

If your next wearable, wireless sensor, or ultra-low-power widget needs to wake up fast, live long, and ship cheap, PRS is the “secret sauce” already baked into every modern Silicon Labs EFM32/EFR32 part. Before you add another supervisor MCU or sprinkle DMA + ISR spaghetti all over your codebase, ask yourself a simpler question:
“Can I let the peripherals talk behind the CPU’s back?”
If the answer is “yes,” unleash PRS and let your firmware catch some well-earned sleep.

### RPRM2

But sensing is only half the story. To make use of the data, you often need a way to transmit it — especially if the microcontroller lacks wireless capabilities. That’s where Radio Module Two, recently introduced by Raspberry Pi, comes into play — and it costs only four dollars.

every Raspberry Pi board starting with Model 3B+ has included a similar component as an onboard module. This helped the foundation avoid redundant wireless certifications — saving tens of thousands of dollars per product revision. Now, the same certified module is available as a standalone part, ready to be installed in your own designs.

It includes a PCB antenna, low-noise amplifier, Wi-Fi and Bluetooth connectivity, and Theoretical speeds up to 96 Mbps — all packed into a pre-certified, easy-to-integrate module.

Its compact size and ease of integration make it suitable both for prototyping and for mass production.

Most importantly: it’s a pre-certified device — which is a major advantage when bringing a product to market.

### Walter

But if your project requires cellular communication—and perhaps GNSS as well—that’s where Walter comes into play. It’s 18 times more expensive, yes, but it also offers unmatched advantages.

Walter is not just a combination of a central processor and a radio module—everything is integrated on a single board:
	•	An ESP32-S3,
	•	A 5G-ready cellular modem,
	•	Compact size,
	•	Low power consumption,
	•	And most importantly—full certification.

Just pop in a SIM card, and you’ve got a ready-to-deploy device for industrial IoT, asset tracking, environmental monitoring, or remote infrastructure—anywhere you have cellular coverage.

### HA 2025.7

Great! Our end devices are ready — now it’s time to talk about the interface for managing them and displaying their values. And for that, Home Assistant 2025.7 is the perfect match.

The updated dashboard panels are now even better optimized for tablet use, with large touch targets and responsive layout for efficient interaction with your smart home.
Print a sturdy wall mount for your old iPad — and voilà: a full-fledged control center. Everything you need, at a glance, with no scrolling.

Home Assistant’s voice assistant has taken a major leap forward. Until now, Assist was transactional — you gave a command, it replied or acted, and that was it.
With the latest update, Assist becomes truly conversational.

You can now build custom voice dialogs right in the automation editor.
Assist can ask you a question, wait for a response, and act based on what you say.
For example, you can have Home Assistant ask:
“Should I close the blinds now?”
— and respond accordingly.

Developers have even released a ready-made blueprint for the most common type of interaction — a yes/no question.
And it understands over 50 different ways to say “yes” or “no” —
including phrases like “Make it so” and “Let’s not.”

All of this runs 100% locally, with no cloud dependency — meaning it’s fast and private.
What’s more, Home Assistant pre-trains its speech recognition engine on these possible answers for maximum accuracy.

This is a major milestone. Your smart home doesn’t just react — it talks with you. We’re moving beyond basic commands into the era of true dialogue.

Another big win in version 2025.7: Integration sub-entries.
I’ve already put this to use — just yesterday I added a couple of new soil moisture sensors for our houseplants.
Instead of writing YAML configuration for MQTT, I simply added them via the interface.
Now, each integration holds your credentials and settings, and the sub-entries let you configure individual devices or services under that umbrella — clean and modular.

If you’re using Home Assistant, don’t forget to update — and support the project if you can.
It keeps getting better, and smarter — just like your home.

### Wrap up

And that’s a wrap for episode 13.
As always, if you learned something new, send it to a fellow tinkerer or engineer — that’s how we grow the community.
All sources are linked in the description.
Thanks for being part of the IoT Forge — see you in two weeks!
