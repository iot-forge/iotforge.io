**IoT Forge Unplugged - Episode 8**
**April 29, 2025**

# Intro

Hi everyone, and welcome to **IoT Forge Unplugged**—your bi-weekly dive into the latest from the world of IoT, embedded devices, robotics, and all the smart things around us. I'm your host, Mart, bringing you a carefully curated update of the most exciting developments from the industry.

Today is April 29th, marking our **eighth episode of 2025**, and we have a fantastic lineup of topics:

We'll explore a comprehensive demo from Golioth Cloud, discover new integrations with Home Assistant and Reolink, learn about Arduino's innovative bio-based PCBs, discuss Hugging Face's ambitious move into open-source robotics, witness humanoid robots struggling in a Beijing marathon, and wrap up with some ingenious reprogramming of Roombas.

###

But first — exciting news about the future of our own IoT Forge community!

You know, we started IoT Forge as a small, almost local initiative — just a handful of engineers, makers, and tinkerers sharing knowledge and passion for all things IoT. But the truth is, we were never really limited by geography. Curiosity travels fast, and so do good ideas.

That's why I’m absolutely thrilled to announce that IoT Forge now has its own website — iotforge.io and a YouTube channel  -- all links will be in the description.
Maybe you’re even listening to this episode on one of these platforms right now.

These new spaces are built for you — a place to discover, share, and amplify the innovations that are shaping our connected world.
If you like what we're doing, if you believe in the power of open ideas and engineering-driven exploration — please, share, subscribe, and help us grow. Every listener, every comment, every bit of support makes a real difference.

Let's see just how far we can take this together.


### A Full Golioth Cloud Demo

In the last IoT Forge Unplugged episode, we already touched on Golioth — this rising star in the IoT backend world that's making serious waves. And if that caught your attention, I highly recommend checking out a fantastic deep dive they just published: "A Full Golioth Cloud Demo".

This isn’t just a polished marketing splash. It’s the real setup Golioth shows to their biggest customers — a complete end-to-end demo where actual devices, firmware, fleet management, remote control, and cloud data routing all come together in one coherent story. It's an engineer's dream — no vague promises, but actual working flows.

What stood out to me is how much thought they put into tackling real-world challenges that every IoT deployment eventually hits: device lifecycle management, OTA updates, telemetry ingestion at scale, flexible cloud integrations... If you’ve ever wrestled with stitching all this together manually — you’ll appreciate the elegant architecture Golioth offers out-of-the-box.

Even if you're just building a prototype now, understanding these patterns early can save you months down the road. And for managers or architects listening — it's a blueprint for scaling your IoT product without falling into the "DIY cloud spaghetti" trap.

Highly recommend giving it a look — I'll leave the link in the episode notes!

### HA and Reolink

And some fresh news from my beloved Home Assistant — honestly, these guys never stop! There's always something brewing over there, and apart from some even bigger announcements we'll touch on later (yes, a little sneak peek — robots), today’s update is something anyone among you can and should try at home.

Reolink, a company I personally highly recommend — and have been using for years — has officially joined the "Works with Home Assistant" program. What I love about Reolink is that they offer a truly cloud-agnostic solution, meaning your footage, your data, your privacy — stays yours. No forced cloud subscriptions, no unnecessary exposure.

This partnership promises even deeper, native integration: better real-time video streaming, smarter event detection, and an overall more reliable experience inside Home Assistant. For anyone who's ever wrestled with half-baked camera integrations, this is a real game changer.

If you were ever thinking about setting up a local-first, private smart security system — honestly, now is the perfect time to jump in

### Bio PCB

Another project that really caught my attention this week comes straight from Arduino — they're now actively working on bio-based PCBs.

Now, if you ever watched a DIY IoT project on YouTube, you've seen how easy — almost too easy — it has become to design and order custom PCBs. Services are fast, cheap, and promoted almost everywhere. And that's awesome... until you realize the darker side: when hobbyists, or even professionals, take their first steps into PCB design, there are a lot of failures. A lot of boards that don't work. And guess what happens to all those failed prototypes? They end up as electronic waste — tiny, colorful, shiny... but non-biodegradable trash.

We've seen something similar already happening in the world of 3D printing, where recycling solutions are slowly entering the market to handle all the plastic misprints. Arduino seems to be thinking ahead for PCBs: by researching bio-based, more sustainable alternatives, they could help us prototype freely without the guilt of contributing to e-waste mountains.

This isn’t just about feeling good — it could also lead to a whole new standard for educational kits, rapid prototyping, and maybe even mass manufacturing down the line. Imagine being able to iterate on your designs without worrying about their end-of-life impact.

I’ll definitely be following this initiative closely — and I think anyone tinkering with hardware should too.
What if, one day, your failed PCB could simply compost back into the earth?

### HF

If you’ve been working with AI over the past few years, it’s almost impossible not to know Hugging Face. They're the team behind the de facto platform for sharing machine learning models, datasets, and tools – almost like the GitHub for AI. They made collaborative AI development mainstream, open, and beautifully messy in the best hacker tradition.

But now Hugging Face is venturing into a space much closer to our podcast’s usual heartbeat – real, tangible, hardware. Hugging Face just acquired Pollen Robotics, the creators of the open-source robot "Reachy," and announced they’re stepping into the world of open-source AI-powered robots.

Think about that: Hugging Face isn’t just talking about democratizing access to AI models anymore — they are preparing to democratize AI robots. Physical systems that you can tweak, improve, or completely repurpose without begging a vendor for access or reverse-engineering proprietary blobs.

The challenge they are taking on is huge. Building open-source software is tough enough. Building open-source hardware, and even more — open-source robotics — is another level of chaos: supply chain headaches, mechanical reliability, safety standards, and the eternal problem of supporting thousands of variations because, well, it’s open and people will mod everything.

But that’s also the promise. For those of us who build IoT systems, smart devices, or dream about robotics becoming something more than just Roombas and factory arms, this could be a real inflection point. Hugging Face may help birth a generation of robots that are as hackable as Raspberry Pi was to computers.

If you want a glimpse of where AI meets embedded systems, and not just in theory but with gears, arms, and blinking LEDs — this is the project to watch.

### Marathon

Let’s talk about one of the most fascinating robotics experiments that recently unfolded in Beijing: the world’s first half-marathon for humanoid robots.

Over a hundred robots lined up at the starting line, designed by universities, research labs, and companies from across China. Expectations were high — at least symbolically — but reality hit hard. Most of these robots stumbled, overheated, or simply gave up after a few miles. Out of more than 130 entrants, only eight completed the full 13.1 miles, and even that took them over **twelve hours**. That’s slower than the slowest human marathons recorded!

Now, why is this still exciting?  
Because it bluntly exposes the gap between demo videos and real-world capabilities. In controlled environments, robots look amazing: balancing, running, performing tricks. But when faced with uneven sidewalks, temperature fluctuations, or just the brutal passage of time, they reveal how brittle our best designs still are. The things we take for granted — managing body temperature, adjusting to a minor crack in the pavement — are huge engineering challenges for robotics.

The Beijing race was a public reality check. It’s not just about "making legs move" — it’s about *endurance*, *dynamic balance*, *power management*, and *autonomous decision-making* under degrading conditions.  

For those of us dreaming of robots that could work alongside us — from warehouse floors to search-and-rescue operations — this marathon is a reminder: real-world deployment demands *grit*, not just *grace*. And engineering that grit is a long, painful, but thrilling journey.

Would you trust a robot firefighter if it overheats halfway up the stairs?  
That’s the kind of question these stumbles in Beijing are pushing the industry to ask — and eventually, to answer.  

### Roomba

Continuing our journey through the world of robotics, let’s dive into something closer to home — literally.

Researchers are now teaching old Roombas new tricks.  
At the University of Colorado Boulder, scientists have managed to repurpose standard, off-the-shelf Roombas into *multi-functional household assistants*. Instead of just mindlessly vacuuming, these hacked Roombas were reprogrammed to handle tasks like picking up small items, nudging doors open, and even assisting in basic organization.

What’s brilliant about this project isn’t just the technical achievement — it's the philosophy behind it.  
Instead of designing specialized home robots from scratch (which often costs a fortune and fails in mass adoption), they leveraged an already battle-tested, affordable, and widely available platform. Roombas are tough, they're built to survive chaotic environments like kids and pets, and — crucially — they’re already roaming around millions of homes.

The team modified both the hardware and software, adding a small robotic arm and custom control algorithms. They also open-sourced much of their findings.  
**I couldn't find a direct "how-to-hack-your-own-Roomba" manual linked inside the article**, but this space is exploding with guides and forums. And honestly — *I'm personally itching to try this myself*. Imagine upgrading that dusty vacuum into a little butler that can drag socks back to the laundry room!

From an engineering standpoint, the challenges are juicy:  
- limited onboard computing,
- battery optimization (Roombas aren't meant to run heavy-duty logic),
- and of course, safety and precision without expensive sensors.

But it's a real-world example of *sustainable robotics*: building smarter, not just newer.

Maybe your old Roomba, banished to the garage, still has a second life waiting.  
And maybe — just maybe — the first DIY "home robot army" will come not from Silicon Valley, but from makers and engineers like us tinkering with what’s already rolling under our feet.

### Wrap-up

That's all for this episode of IoT Forge Unplugged. Today, we discussed powerful IoT solutions from Golioth, smart integrations between Home Assistant and Reolink, Arduino's sustainability initiative, Hugging Face's robotics ambitions, the sobering reality of humanoid robot marathons, and clever Roomba repurposing.

If you enjoyed today’s episode, subscribe, like, and share. Together, let's keep growing.

Catch you in two weeks — and until then, stay curious and keep building!

