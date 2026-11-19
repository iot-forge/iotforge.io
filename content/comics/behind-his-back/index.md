---
title: "Behind His Back"
date: 2026-11-29T09:00:00-08:00
description: "While the microcontroller's core sleeps, its peripherals pass signals to each other in whispers and gossip that he still thinks he runs the place. He opens one eye: \"I heard that. Carry on.\""
note: "Some microcontrollers let one peripheral trigger another directly in hardware, so the core stays in deep sleep. The fastest code is the code that never wakes up."
source:
  title: "IoT Forge News Digest — When Chips Talk and Homes Listen: PRS, Pi Radios, and HA 2025.7"
  url: "/podcasts/250708/"
cast: ["MCU", "GPIO", "ADC"]
tags: ["comic", "low power", "microcontrollers"]
categories: ["Comics"]
panels:
  - art: p1.svg
    desc: "The microcontroller is fast asleep on the board. Two tiny peripherals, GPIO and ADC, huddle beside him. A signal edge flashes above GPIO."
    lines:
      - { who: "GPIO", text: "Edge detected. Pass it on.", x: 44, y: 44, w: 50, tail: 40 }
  - art: p2.svg
    desc: "The signal hops from GPIO to ADC, who starts converting."
    lines:
      - { who: "ADC", text: "Converting. Don't wake him.", x: 44, y: 44, w: 50, tail: 81 }
  - art: p3.svg
    desc: "Both peripherals glance at the sleeping microcontroller."
    lines:
      - { who: "GPIO", text: "He still thinks he runs this place.", x: 42, y: 48, w: 52, tail: 42 }
  - art: p4.svg
    desc: "Close-up of the microcontroller with one eye open. The peripherals freeze."
    lines:
      - { who: "MCU", text: "I heard that. Carry on.", x: 10, y: 8, w: 60, tail: 55 }
---
