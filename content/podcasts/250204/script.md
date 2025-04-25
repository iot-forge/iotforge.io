Hi everyone, and welcome to the IoT Forge Unplugged podcast!
Every two weeks, we pick the most exciting news from the world of IoT and share them with you in this short podcast, where I break down the latest updates and trends. I'd love for you to get involved---whether it's sharing feedback, suggesting news stories I might have missed (because, let's be honest, my interests sometimes reflect my own hobbies), or joining the conversation about these updates.
So, let's get started! Today is February 4th, and this is our third episode of 2025.
And I will be completely honest with you: these past two weeks have not been very rich in news in the IoT world---most of the news was shared at CES, and it's kind of a calm period now.
For this episode, I want to focus on something more specific in one area, as opposed to covering a wide variety of news. Recently, I came across a couple of news stories and articles about robotics and their role in different areas. I want to highlight three particular cases: medical, manufacturing, and food. And to start a new tradition, every odd episode I will include a few observations from the personal projects I'm working on---stay tuned to learn how to use fewer microcontrollers to make life easier.

Ok, here we go: first topic -- robotics in medicine, particularly -- surgical robots:

# Surgeon

My brother is a surgeon, and I often hear different stories from him
about the challenges and advancements in the medical field. One of the
most exciting developments is the use of robotics in surgery, which
significantly reduces human error and improves patient outcomes.

Recent advancements in AI-powered surgical technology are transforming
the operating room. For instance, new surgical guidance platforms
leverage advanced computer vision and AI to provide real-time 3D
anatomical mapping. This technology captures high-definition views of
the surgery and integrates vast amounts of data, such as CT and MRI
scans, to deliver precise guidance to surgeons. This is akin to having a
real-time GPS system for surgery, which adapts to changes in the
patient\'s body and provides critical insights to improve surgical
outcomes.

Another significant technology is volumetric intelligence, which creates
a 3D view of anatomy and the surgical space without using radiation.
This reduces the need for radiation-based imaging, making surgeries
safer for both patients and surgical staff. Additionally, AI-driven
overlays assist surgeons in real time, aiming to reduce errors and boost
overall outcomes.

Robotic systems are also being developed to handle specific surgical
tasks with high precision. For example, imitation learning from video
recordings allows robots to perform tasks like tissue manipulation and
suturing. This not only enhances the accuracy of these procedures but
also frees up surgeons to focus on more complex aspects of the surgery.

Furthermore, light field rendering technology captures 3D data in real
time, allowing for high-fidelity visualization of the surgical scene.
This technology helps guide surgical decisions in real time, improving
the precision and efficiency of the procedures.

These technological advancements are crucial in addressing the looming
shortage of surgeons, especially in rural areas where access to surgical
care is limited. By enabling skilled surgeons to scale their abilities
and reach underserved patients, these technologies could transform the
field of surgery and elevate the standard of care worldwide.

You can find all links to the articles with more details in the Podcast
description or in our Teams channel.

# Manufacture

Now, let\'s switch to another area where workforce shortages are also a
concern: manufacturing. And let's be real---there's a CNC machine in my
workshop, not an operating room bed.

Manufacturers are facing widespread shortages of skilled labor, but more
intelligent automation could alleviate the problem. One exciting
development in this field is the use of highly automated workcells,
which make production more flexible and less labor-intensive.

Watch Out, a company specializing in precision manufacturing, has
developed autonomous CNC cells that use patented sensors and machine
learning for precision manufacturing in industries like aerospace,
automotive, and medical. These workcells offer \"Level 5\" autonomy for
tasks such as materials handling, machining, and inspection.

The key technology here is the integration of advanced sensors and AI to
monitor and adjust the machining process in real time. This allows for
precise control and continuous learning, ensuring high-quality
production with minimal human intervention. The system can handle new
work orders, calibration, optimization, and dynamic adjustments to the
production process autonomously.

Another interesting concept is Robotics-as-a-Service (RaaS), which
allows companies to subscribe to robotic systems rather than purchasing
them outright. This model offers several benefits, including reduced
capital expenditure and continuous updates to the technology, ensuring
that the systems remain state-of-the-art.

By adopting these advanced technologies, manufacturers can address labor
shortages, improve production efficiency, and maintain high standards of
quality. These innovations also enable the reshoring of production,
bringing manufacturing jobs back to local markets.

# Food

Let's switch gears to an area that, much like surgeons and skilled
manufacturers, is also facing a workforce shortage---quick-service
restaurants (QSRs). Yes, you heard that right! While hospitals struggle
to find enough surgeons and manufacturers face skilled labor gaps,
fast-food joints are in the same boat. In fact, a whopping 70% of
restaurant operators report having job openings they can't fill, and 45%
say they lack enough staff to meet customer demand. With turnover rates
in QSRs reaching 150% annually, it's no wonder the industry is turning
to automation.

But don't worry---robots are here to save the day! Thanks to new tech,
even younger workers---who were previously too young to legally operate
deep fryers---can now jump into the action. Who knew flipping fries
would become a high-tech career path? At this rate, we might see
surgical robots flipping burgers next!

Miso Robotics has unveiled its next-generation Flippy Fry Station, an
AI-powered robot designed to automate the preparation of fried foods
like French fries, onion rings, and chicken. This new version boasts
improvements in precision, consistency, and efficiency, promising
immediate return on investment for quick-serve restaurants (QSRs).

One of the standout features of the new Flippy Fry Station is its
enhanced safety measures, which allow employees under 18 to operate the
machine, addressing labor shortages in the fast food industry. This
innovation comes at a crucial time when restaurants are struggling to
hire enough kitchen workers.

Key features of the new Flippy Fry Station include:

Scalable Reliability: Transitioning from an experimental product to a
scalable industrial solution, it is now the most reliable fry-station
automation product on the market.

Compact Design: The new model is 50% smaller, fitting into a wider range
of kitchen layouts.

Quick Installation: Installation can be completed overnight, reducing
downtime significantly.

Enhanced Vision and Speed: With a faster robotic arm and AI vision
system, it can process over 100 baskets per hour, nearly double the
capacity of human workers.

Improved User Experience: Upgraded interface with LED lights and a
grease-resistant display simplifies onboarding and daily operations.

Additional Benefits: Includes 24/7 support, warranty, preventive
maintenance, and optional POS integration.

Miso Robotics has partnered with White Castle and other major brands for
pilot programs, showing that the new Flippy is half the size, twice as
fast, and installs in just a few hours. The system is designed to be
cost-effective, with a rental price of \$5,400 per month, potentially
saving restaurants \$5,000 to \$20,000 monthly through labor
redeployment and reduced food waste.

Hygiene systems provider Ecolab has also contributed to the project,
enhancing the robot's cleaning speed and food-safety capabilities.
Ecolab's sales team will now offer Flippy rentals, supported by their
6,000 sales professionals.

In summary, the new Flippy Fry Station by Miso Robotics represents a
significant advancement in kitchen automation, addressing labor
shortages and operational challenges while improving safety and
efficiency in the fast food industry.

ZIGBEE

Well, from robots flipping fries, let's jump into personal
projects---because, let's be honest, we all love a good smart home
upgrade.

A long, long time ago, in one of the IoTForge tech talks, I mentioned
that I use the Xiaomi Mijia (LYWSD03MMC)---a little Bluetooth
thermometer---as part of my smart home setup. I've got about 10 of them
scattered across different areas, because, you know, one is never
enough. But here's the catch---Bluetooth has a pretty limited range, and
I couldn't rely on just one router to cover everything.

So, my solution? Three ESP32 devices---one for each floor---running
ESPHome firmware. They grab the temperature data via BLE and send it
over WiFi to my Home Assistant setup. Pretty neat, right? But here's the
thing---I started feeling like I wasn't really using my ESP32s to their
full potential.

Then, about 4--5 months ago, I remembered a community member mentioning
an experimental firmware that unlocks Zigbee functionality in these
thermometers. So, naturally, I had to try it. Flashed one of the
devices, and boom---it instantly showed up in my ZHA integration! And
the best part? Since I already have a bunch of IKEA TRÅDFRI bulbs acting
as Zigbee routers, I don't have to worry about coverage anymore.

So, if you've got one of these thermometers and are still using
BLE---and you also have a Zigbee router---give it a shot! Worst case?
You can always roll back if it doesn't work out. I've dropped a link to
the full list of supported devices in the podcast description. Happy
hacking!

# Wrap up

And that's a wrap for today's episode! As always you will find all the
links in the description. I hope you enjoyed the insights and updates we
shared. Whether you're exploring the latest IoT innovations or grappling
with the challenges of evolving technologies, remember---this podcast is
here to keep you informed and inspired.

Don't forget, your voice matters! If you've got news, feedback, or ideas
you'd like to share, I'd love to hear from you. This is a
community-driven space, and your input helps make it even better.

A quick note: I always strive to bring you fresh, relevant content while
steering clear of overlap with our biweekly IoTuesday brown bag
sessions. Mark your calendar---we'll be back in two weeks with more
exciting updates, thought-provoking articles, and expert insights.

And if you haven't already, check out **IoT Forge**---our vibrant
community for learning, sharing, and connecting with like-minded
enthusiasts. It's a great place to take your IoT journey to the next
level.

Until next time, stay curious, keep innovating, and take care. Cheers!

<https://www.prnewswire.com/news-releases/proprio-successfully-completes-50-surgeries-using-first-ai-powered-surgical-platform-unveils-massive-dataset-302242958.html>

<https://www.therobotreport.com/proprio-ceo-charts-future-surgical-robotics-shortage-surgeons-looms/>

<https://www.therobotreport.com/asensus-surgical-completes-gallbladder-removal-on-16-year-old/>

<https://www.therobotreport.com/miso-robotics-refines-flippy-fry-station-with-ai-partners/>

<https://www.therobotreport.com/watch-out-adds-autonomy-cnc-cells-precise-production/>

<https://pmc.ncbi.nlm.nih.gov/articles/PMC10784205/>

<https://github.com/pvvx/ZigbeeTLc>
