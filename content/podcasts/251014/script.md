## Intro

Hi, you’re listening to the IoT Forge News Digest. This is episode 20. Today, we’ll explore the latest news in the world of IoT and embedded systems.  Let’s connect the dots.

### Arduino Q

So, the latest headline — Qualcomm just bought Arduino.
And honestly, no one really knows what to expect.

If you scroll through the big YouTube maker channels, you’ll hear the same emotional note:
“Arduino is what got me into hardware — I’ll be grateful forever.”
But… in my corner of the internet?
I barely see anyone actually building with it anymore.
ESP32s, STM32 Nucleos, Nordic nRF52 boards — that’s the real activity.
Even Silicon Labs boards pop up more often than Arduino in DIY projects these days.

And I have to admit something:
I’ve never actually owned an original Arduino.
Started with cheap clones, the kind that covered with flux and ch340 windows drivers adventure.
In the last ten years, I’ve built maybe two things with them:
a pulse generator for a stepper driver — about five years ago,
and a “virtual infrared wall” for my Roomba — just last year.
That one used an Uno because, you know, it had an onboard DC-DC converter,
and I already had a pile of 9-volt batteries with matching sockets.
It’s a purely manual addition to my “auto” smart home — no Wi-Fi, no Bluetooth,
just classic button-and-battery engineering.

So yeah, I’m torn.

On one hand — I’ve heard from people who work with Qualcomm chips in big, serious, multi-million-dollar projects.
And they all say the same thing: their software ecosystem can be… painful.
Bugs, toolchains, documentation — you name it.
Not exactly beginner-friendly.

But On the other hand — Arduino’s original magic was simplicity.
The language, the tooling, the “plug it in and it just works” feeling.
That feeling of instant success — plug it in, blink the LED, boom, you’re a maker.
If newcomers now face the kind of friction that pros see in Qualcomm’s world — they’ll just drift away.

Still, I’m curious. I want to explore Arduino App Labs, see how it all ties together — Docker, Zephyr, edge AI.
It could be a bridge between the old “blink an LED” days and something more industrial.

But that’s the big question: who’s the target now?
Is Qualcomm aiming for industrial IoT, where their chips already play?
Or do they want to stay in the enthusiast space, where Arduino built its legend?
Both markets are crowded — and demanding in totally different ways.

So yeah, let’s keep an eye on this one.
I’d love to revisit this story a year from now
and see whether Arduino’s still teaching people how to blink their first LED —
or teaching robots how to blink back.

###
It seems like our episodes never go without a segment where we explore and discuss the latest in robotics — not just the hype-worthy metal machines walking across stages, but actual research in the field.

So, let’s talk about robots.
But not soft robots. Not swarms of insect-like scouts. Not today.

Today, I want to zoom in on two clear directions we’re seeing in the field.
Two flavors that dominate the headlines and demo reels.

*First — Task-Specific Robots*

These aren’t built to look like people.
They don’t wave. They don’t walk.
They just work — quietly, efficiently, and often better than we can.

Take the Roomba.
It doesn’t do much. But it does it — over and over, year after year.
No complaints. No coffee breaks.

Or surgical robots like Da Vinci — with movements so precise they filter out hand tremors.
Controlled by a human, enhanced by the machine.

Agricultural drones?
They fly over crops, scan, spray, optimize.
No drama. Just yield.

Boston Dynamics’ Spot?
Four legs, sensors, and a job: inspecting hazardous environments where no human wants to go.

Warehouse bots?
They don’t walk. They roll.
No arms, no faces — just route planning and relentless efficiency.

These robots don’t care about being human.
They’re not trying to blend in.
They’re built to solve problems — cheaper, safer, faster.

*Second — Humanoid Robots*

This is a different game.
This is the “Let’s make machines that can operate in our world” philosophy.

Think about it:
Our entire environment is designed for us.
Doorknobs, staircases, shopping carts, coffee makers, drawer handles.

Rather than rebuilding the world for robots,
the goal here is to build robots that can handle our world as-is.

That’s where things like Tesla Optimus, Figure 01, Agility Digit, and Unitree G1 come in.
Two legs, two arms, maybe even a face.
Why? Because that’s what our world expects.

If they succeed — they become the physical version of a smartphone:
One platform. Endless possibilities.

Today it stacks boxes.
Tomorrow it helps grandma.
Next week? It’s flipping pancakes.

But… it’s hard.
Really hard.
Walking is hard. Grabbing objects is hard.
Balance, sensors, vision, planning — it’s a full-stack engineering Everest.

And here’s where it gets really interesting.

There’s a recent research project — and I won’t spoil it.
Just follow the link in the description.
It’s truly fascinating and worth your time.

The core idea?
Teaching robots not just to recognize objects — but to understand their function.
And even more specifically: the function of parts of those objects.

Not just “knife.”
But “butter knife” vs. “bread knife.”
If you want to spread jam — grab the butter knife.

Not just “container.”
But “jug,” “teapot,” or “bottle” — and which part is meant for pouring.

The model learns to associate shape with purpose.
Not by label. Not by brand.
But by how that object is meant to interact with the world.

And that — that might be the key to moving from recognition… to true understanding.

Because we, as humans, act based on affordances — what an object invites us to do.
And future robots? They’ll need to think the same way.

###

That is it for now. Don't forget to share with your fellow tinkers and subscribe to stay tuned for more episodes of the IoT Forge News Digest.
