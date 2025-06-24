---
title: "{{ replace .Name "-" " " | title }}"
date: {{ .Date }}
audio: "iotforge_unplugged_{{ dateFormat "060102" .Date }}.mp3"
image: "cover.png"
script: "script.md"
sources: "sources.md"
description: "..."
tags: ["podcast", "episode"]
categories: ["Podcasts"]
---
