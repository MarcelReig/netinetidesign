---
layout: post
title: nvm comandos básicos
description: nvm comandos básicos
comments: true
tags: node
category: programacion
image: nvm.jpg
---

# [nvm](https://github.com/creationix/nvm)

**nvm** nos permite tener múltiples versiones de node en nuestro sistema y trabajar con diferentes versiones en cada proyecto.

Instalar nvm:

```shell
$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash
```

Listar todas las versiones de node instaladas:

`$ nvm ls`

Instalar la última versión de node:

`$ nvm install node`

Ver todas las versiones de node disponibles para instalar:

`$ nvm ls-remote`

Instalar una versión específica:

`$ nvm install [version]`

Utilizar una versión específica:

`$ nvm use <version>`

Desinstalar una versión específica:

`$ nvm uninstall [version]`

Establecer una versión de node por defecto

`$ nvm alias default [version]`
