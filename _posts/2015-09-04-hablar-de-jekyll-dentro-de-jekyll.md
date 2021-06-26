---
layout: post
title: Hablar de Jekyll dentro de Jekyll
description: Hablar de Jekyll dentro de Jekyll
comments: true
tags: jekyll
category: programacion
image: inception.jpg
---

Como hablar de {{ site.double-lcb }} site.variables {{ site.double-rcb }} dentro de Jekyll sin que interprete que estás escribiendo una {{ site.double-lcb }} site.variable {{ site.double-rcb }} ?

<!-- more -->

La solución más rápida que he encontrado es crear unas variables en config.yml para poder escribir dobles llaves y llaves simples sin que jekyll interprete su contenido como variables.

```md
# Para hablar de Jekyll dentro de Jekyll

lcb: "{{ site.lcb }}"
rcb: "{{ site.rcb }}"
double-lcb: "{{ site.double-lcb }}"
double-rcb: "{{ site.double-rcb }}"
```
