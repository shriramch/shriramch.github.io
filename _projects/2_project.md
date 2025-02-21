---
layout: page
title: Integrating the GPU Backend Into the Maximus DB Engine
description: Practical Work - Semester Project with the Systems Group
# img: assets/img/3.jpg
importance: 2
category: work
# giscus_comments: true
related_publications: true
---

In my third semester at ETH Zürich, I joined the Systems Group to work with [Prof. Gustavo Alonso](https://people.inf.ethz.ch/alonso/)'s group for my semester project, with [Marko Kabić](https://systems.ethz.ch/people/profile.MjIyMzYw.TGlzdC8zODg4LDEyOTU2NDI2OTI=.html) and [Wu Bowen](https://systems.ethz.ch/people/profile.MjU1MTE4.TGlzdC8zODg4LDEyOTU2NDI2OTI=.html). In this project, I integrated GPU-support into the Maximus database engine. I designed and implemented a GPU data structure that stores databases in the Arrow columnar format. I designed the data structure to be architecture agnostic, making sure my work could be easily extended to AMD GPUs or non-GPU devices as well. I also added support for all types found in the TPC-H benchmark. Then I implemented a complete set of GPU-accelerated operators powered by cuDF, ensuring that Maximus could run the full TPC-H benchmark on GPU. Our work was accepted at SIGMOD 2025{% cite Kabić2025Maximus %}!
