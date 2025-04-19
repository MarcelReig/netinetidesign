---
layout: post
title: rvm comandos básicos
description: rvm comandos básicos
comments: true
tags: node
category: programacion
image: coding-2.webp
---

Listar versiones de ruby instaladas:

```sh
$ rvm list
```

listar versiones de ruby disponibles para instalar:

```sh
$ rvm list known
```

Instalar la última versión: 

```sh
$ rvm install ruby@latest
```

Instalar cualquier versión de ruby:

```sh
$ rvm install <version>
```

Utilizar una versión de ruby que tengas instalada:

```sh
$ rvm use <version>
```

Eliminar una versión de ruby:

```sh
$ rvm remove <version>
```

Actualizar rvm a la versión estable:

```sh
$ rvm get stable
```

### Manejo de gemas con los gemsets

Listar los gemsets disponibles:

```sh
$ rvm gemset list
```

Crear un nuevo gemset:

```sh
$ rvm use <ruby version>@<gemset name> --create
```

Utilizar un gemset:

```sh
$ rvm use <ruby version>@<gemset name>
```

[rvm](https://rvm.io/) sitio oficial.
