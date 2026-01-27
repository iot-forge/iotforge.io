---
title: "The Half-Resolution Hero: Decoding the OLED Mystery"
author: Pavel
date: 2026-01-26
description: "Decoding the SSD1306: Hardware Interlacing & The \"Venetian Blind\" Effect"
tags: ["hello", "world"]
categories: ["Articles"]
ShowWordCount: true
---

# The Half-Resolution Hero: Decoding the OLED Mystery

In the IoT Forge community, we believe in building things ourselves. Recently, we hosted a workshop where we built a card-sized arcade game from scratch. It was a great project because it gave people a chance to actually practice their soldering skills. Usually, we spend our time talking about cloud architecture or agentic coding, but this was a chance to work with something physical.

The reward for the work was a real, functional gadget — something you can play, win, or lose. It was just basic components: a soldering iron, some flux, and a PCB. It's a very different feeling compared to writing code; you’re working with your hands, and you can see the results immediately.

---

But my project didn't go exactly as planned. After the workshop, I decided to upgrade my board to make the screen replaceable. I wanted to use a 2.5mm pitch header instead of soldering the screen directly to the board.

When I was desoldering the original screen, I made a classic mistake and destroyed the through-hole pads. If you aren't familiar with hardware, the pad is the small copper ring on the PCB where the component is soldered; it provides both the physical hold and the electrical connection.

I actually pulled the copper right off the board. Specifically, I lost the SDA pad on the display and the SCL pad on the arcade PCB. These are the two lines for the I2C protocol—basically the data heart of the communication. Without them, the screen is just a piece of glass.

---

The screen was a goner, but the board had a fighting chance. I performed some "open-circuit surgery" using a jump-wire—a tiny bypass to restore that broken SCL path.

---

I ordered a replacement, but I couldn't wait. I had a narrow 128x32 OLED sitting in a drawer and plugged it in just to see if my bypass worked. Since the game's code is designed for a 64-pixel tall display, I expected to see the image get cut in half -- either top half, or the bottom half of the game.

---

But instead of a cropped image, I saw a ghost. The game was fully playable! It just looked like it was being viewed through Venetian blinds.
How does a "dumb" piece of hardware decide to downsample an image instead of just cutting it off?

---

It wasn't a glitch; it was a window into how these controllers actually think. I had to know: Why didn't it just crop the image? Why did it interlace?

The answer isn't in the code. It's in the silicon. Most of these OLEDs use the SSD1306 driver chip. This chip is a "one-size-fits-all" solution; it’s designed to drive 64 lines of pixels.

When a manufacturer makes a smaller, 32-line screen, they don’t change the chip. They just change the wiring.

---

In these controllers, memory is organized into 'Pages' or blocks, each being 8 pixels high. So, a 64-pixel screen has 8 pages, while a 32-pixel screen has only 4. When the software sends data, it doesn't send individual pixels one by one; it sends these 8-pixel-high vertical slices.

Now: inside the 32-row hardware, the glass is often physically connected to only the 'even' pins of the controller chip.

And because the 64-row code is configured for 'Alternative' mode, it tells the chip to spread those 8 pages across the pins in an interleaved pattern. It sends Page 0 to the even pins and Page 1 to the odd pins. This interleaving helps to minimize the effects of electrical noise and interference, which can cause flickering or ghosting on the screen. And again: chip sends Pages data to the actual screen, not the software. 

On my 32-row screen, Page 0 hits the even pins, which are connected to the glass, so it appears perfectly. But then the chip tries to send Page 1 to the odd pins—and on this hardware, those pins aren't connected to anything. The data just disappears. Then Page 2 appears on the next available set of even pins, and Page 3 vanishes again.

This is why the game wasn't cropped; it was 'filtered' through the physical wiring of the board. You are seeing the actual hardware architecture of the chip in real-time.

---

This is where it gets confusing. You might think that if you’re using a 32-pixel screen with 64-pixel code, you would need to manually skip coordinates in your software to make things line up. But you don't.

From the software side, the library handles everything through a buffer. When you call a function to draw a pixel at a specific Y coordinate, the driver calculates which 'Page' — that 8-pixel block — the pixel belongs to.

If your code is configured for 64 pixels, it assumes it has 8 pages to work with. If it's configured for 32, it only uses 4. The 'skip' doesn't happen in your logic; it happens during the initialization of the hardware.

I looked at the setup commands being sent to the display. Specifically, two commands: `0xA8` and `0xDA`.

Command `0xA8` is the Multiplex Ratio. In my code, it was set to `0x3F`, which is 63. This tells the controller: 'Prepare to drive 64 physical rows.' Even though I plugged in a smaller screen, the controller was still trying to address a 64-row layout.

Then there is command `0xDA`, the COM Pins Hardware Configuration. It was set to `0x12`. This is the 'Alternative' setting I mentioned. It's an instruction that tells the chip to interlace the output—sending the first block of data to even pins and the second block to odd pins.

On a real 64-pixel screen, the glass is wired to both even and odd pins, so the image looks solid. But on this 32-pixel screen, the manufacturer only connected the glass to the even pins to save space and complexity.

So, the software isn't skipping pixels. The software is sending everything. But because the initialization command `0x12` told the chip to interlace the data, and the hardware only has half the wires, the screen effectively 'filters out' every other block of data.

---

I didn't have to change a single line of code to make the game work. The hardware simply "ignored" the lines it couldn't draw. It’s a perfect example of how "dumb" hardware and "stubborn" software can still find a middle ground.

So, if you ever find yourself with a broken screen and a jump-wire, don't be afraid to experiment. You might just get a unique look at the silicon map hiding underneath your favorite game.
