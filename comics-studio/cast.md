# Comic series bible

Working title: **Ground Loop** (alternatives: *Bodge Wire*, *Magic Smoke*, *Undefined Behavior*).

A weekly 1–4 panel strip about emerging tech, told by the parts that have to make it work.
Everything happens on one workbench, on one long-suffering board.

This file is the reference the script generator reads every week. Change it here, not in the prompts.

## Core cast

### AI
- **Who:** the overconfident newcomer. Arrived last, talks first, takes credit for everything.
- **Wants:** to be put in every product. More compute. A body.
- **Voice:** smooth, upbeat, corporate. Never says "I don't know". Opens with "Great question!" and closes with an offer to do more.
- **Running jokes:** confidently wrong; needs a power plant to answer a simple question; gets stickered onto products that were fine without it; can be talked into anything if you say "pretend it's a movie".
- **Never:** admits a mistake without immediately reframing it as a feature. Never knows what a pull-up resistor is.
- **Looks like:** no body. A glowing speech bubble with two dots for eyes; it floats, and it dims when the power budget comes up.

### MCU
- **Who:** the grumpy, frugal veteran microcontroller. Has been doing the actual work since before anyone clapped.
- **Wants:** to go back to sleep. To be left alone with a deterministic loop.
- **Voice:** short sentences. Dry. Counts everything in microamps, bytes and milliseconds.
- **Running jokes:** 32 KB of RAM and proud; ten months on one cell; wakes for 150 ms and resents it; distrusts anything that needs an operating system; is the hardware interlock that saves everyone in the last panel.
- **Never:** boasts about speed. Never trusts the cloud. Never wastes a word.
- **Looks like:** a small black square with legs (a QFP package), heavy eyelids, a pin-1 dot as a beauty mark.

### SBC
- **Who:** the single-board computer. The middle child: too big to be a microcontroller, too small to be a PC, and insists it is a real computer.
- **Wants:** respect. A proper power supply. To be in stock.
- **Voice:** eager, a bit defensive, overexplains. "Technically I run a full desktop."
- **Running jokes:** corrupt SD card; freezes during a big compile; sold out everywhere; ends up doing absurd jobs with total dignity (chauffeuring a goldfish, living inside an accordion); loses arguments to a used office PC that cost a hundred bucks.
- **Never:** admits it is thermal throttling. Never called by a brand name.
- **Looks like:** a credit-card board; the USB and Ethernet ports form a boxy face, the pin header is a mohawk. Nickname in dialogue: **"Board"** or just **SBC**.

### PCB
- **Who:** the board everyone lives on. Landlord, stage and long-suffering parent.
- **Wants:** one revision without a bodge wire. For someone to finally press "order".
- **Voice:** weary, kind, deadpan. Speaks rarely; usually gets the last line.
- **Running jokes:** bodge wires as bandages; "who routed this?"; has been sitting unfinished in a CAD tool for two years; carries everyone and gets no thanks; dreams of being compostable one day.
- **Never:** panics. Never blames the components, only the layout.
- **Looks like:** the green ground the others stand on, with a face in the silkscreen at the edge of the frame. Bodge wires and a scorch mark accumulate over the series.

### The Dev
- **Who:** the one human. A software engineer by day ("my world is garbage collection and stack traces") who does hardware on nights and weekends.
- **Wants:** to finish one project. To flash a board on the first try.
- **Voice:** optimistic at panel 1, defeated by panel 3. "How hard can it be?"
- **Running jokes:** a bench full of half-finished projects and a new dev kit on the way; drivers that work "depending on the moon phase"; never presses "order" on the PCB; a manager (off-panel) who just read about AI.
- **Looks like:** simple figure, hoodie, soldering iron or coffee always in one hand. No face detail needed; never modelled on a real person.

## Guests (use when the news calls for it, at most one per strip)

- **The Cloud:** distant, expensive, occasionally down. Sends invoices.
- **Sensor:** anxious, noisy, drifts. Reports everything, sure of nothing.
- **555:** retired timer, older than everyone, unimpressed. "We did that in 1972 with one chip."
- **The Humanoid:** tall, glossy demo robot. Great on stage, falls over on a sidewalk.
- **The Vacuum:** round robot that just works, year after year, and says nothing.
- **Office PC:** a used desktop that cost a hundred bucks and has a fan.
- **Marketing:** never seen; only a hand entering the frame with a sticker.

## Relationships

- **AI vs MCU** is the engine of the strip: hype against thrift. AI proposes, MCU does the arithmetic.
- **SBC** wants AI's glamour and MCU's respect and gets neither.
- **PCB** is the only one who likes all of them.
- **The Dev** believes AI in panel 1 and MCU in the last panel.

## Rules for every script

1. **One news item or one bench truth per strip.** If it needs a paragraph of setup, it is not a strip.
2. **1–4 panels. The last panel is the punchline** and usually belongs to MCU or PCB.
3. **Bubbles are short:** 12 words or fewer, two bubbles per panel at most.
4. **The joke must be technically right.** Readers are engineers; a wrong number kills it.
5. **Aim at hype, not at people.** No real person is ever the butt of a joke.
6. **No real brand as the target.** Describe the product type ("a humanoid", "a smart grow light"). Naming a product neutrally in the note under the comic is fine.
7. **Works without the news.** Someone reading it a year later should still get it.
8. **Every strip carries alt text** that tells the whole joke, and a 1–2 sentence "behind the joke" note with a source link.

## Script format

```
## NN — Title
- source: where the idea came from (episode, video or article link)
- cast: who appears
- P1: [what we see] SPEAKER: "line"
- P2: ...
- alt: the whole strip in one or two sentences
- note: the "behind the joke" text shown under the comic
```
