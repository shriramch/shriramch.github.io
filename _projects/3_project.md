---
layout: page
title: StarPlat Graph DSL - Program Analysis
description: Bachelor Project with Prof. Rupesh Nasre
# img: assets/img/7.jpg
# redirect: https://unsplash.com
importance: 3
category: work
related_publications: true
---

During my final year at IIT Madras, I joined the StarPlat team led by [Prof. Rupesh Nasre](http://www.cse.iitm.ac.in/~rupesh/), aiming to develop a graph DSL supporting several backends including threaded, distributed, and GPU-accelerated computation As a part of my bachelor thesis with the group, I implemented multiple compiler-level optimizations for the DSL compiler using AST-level analyses, such as barriers in the parallel PageRank algorithm, and converting between a push-based implementation of the parallel SSSP algorithm and a pull-based implementation, to enhance the efficiency of generated C/C++ code. We rigorously tested these optimizations on real datasets containing up to 90 million nodes on several backends across algorithms such as the Single-Source Shortest Path, PageRank, and Strongly Connected Component among others, demonstrating how smart compiler optimizations and hardware-specific design can enhance the performance and scalability of graph algorithms on large datasets. The project led to my first patent{% cite Nasre2022Patent %}!
