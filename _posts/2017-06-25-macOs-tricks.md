---
layout: post
title: Añadir espacios al dock de Mac OS X
description: Añadir espacios al dock de Mac OS X
comments: true
category: programacion
tags: mac
image: apple.jpg
---

Abre la terminal y mete esto:

<!-- more -->

`$ defaults write com.apple.dock persistent-apps -array-add '{"tile-type"="spacer-tile";}'`

Repite esto para crear todos los espacios que quieras.

No se mostrará hasta que no ejecutes:

`$ killall Dock`

Para quitar los espacios simplemente los arrastramos fuera del Dock.
