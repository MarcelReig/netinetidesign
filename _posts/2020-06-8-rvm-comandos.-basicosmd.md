---
layout: post
title: rvm comandos básicos
meta:
  description: rvm comandos básicos
comments: true
tags: node
category: programacion
image: rvm.png
---

Listar versiones de ruby instaladas:

`$ rvm list`

listar versiones de ruby disponibles para instalar:

`$ rvm list known`

Instalar la última versión: 

`rvm install ruby@latest`

Instalar cualquier versión de ruby:

`$ rvm install <version>`

Utilizar una versión de ruby que tengas instalada:

`$ rvm use <version>`

Eliminar una versión de ruby:

`$ rvm remove <version>`

Actualizar rvm a la versión estable:

`$ rvm get stable`

### Manejo de gemas con los gemsets

Listar los gemsets disponibles:

`$ rvm gemset list`

Crear un nuevo gemset:

`$ rvm use <ruby version>@<gemset name> --create`

Utilizar un gemset:

`$ rvm use <ruby version>@<gemset name>`

[rvm](https://rvm.io/) sitio oficial.
