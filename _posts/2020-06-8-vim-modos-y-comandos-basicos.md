---
layout: post
title: Vim modos y comandos básicos
description: Vim modos y comandos básicos
comments: true
tags: vim
category: programacion
image: coding-2.webp
---

**Modo normal**

Permite al usuario navegar por el documento e introducir comandos.
Para entrar en modo comando pulsa la tecla `esc`.

Para mover el cursor por el archivo utiliza las teclas `hjkl` (izquierda, abajo, arriba y derecha respectivamente).

**Modo inserción**

En este modo escribiremos texto en el fichero.
Para entrar en modo insercción pulsamos la tecla `i`.

Para salir del modo insercción y volver al modo normal pulsa `esc`.

**Modo comando**

Para entrar a este modo escribe `:` seguido del comando que quieras utilizar.

`:q` sale del archivo, si no tenemos cambios sin guardar sale sin más.

`:q!` => sale del archivo descartando los cambios no guardados.

`:w` guarda los cambios del archivo, pero no sale de Vim para seguir editando el archivo.

`:wq` guarda los cambios y sale de Vim.

**Modo visual**

Se utiliza para hacer selecciones de texto.
Para entrar en modo visual pulsa `v`.
Para salir del modo visual pulsa `esc`.
