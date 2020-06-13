---
layout: post
title: npm comandos básicos
meta:
  description: npm comandos básicos
comments: true
tags: npm
category: programacion
image: npm.png
---

<div class="mb-5"></div>

Ver la versión actual de node:

`$ node -v`

Instalar dependencias de desarrollo:

`$ npm install nombre_paquete -D`

O versión extendida:

`$ npm install nombre_paquete --save-dev`

Comprobar si existen versiones más actuales de los paquetes instalados:

`$ npm outdate`

Actualizar todos los paquetes:

`$ npm update`

Actualizar solo el paquete nombrado:

`$ npm update nombre_paquete`

Desinstalar el paquete nombrado:

`$ npm uninstall nombre_paquete`

Revisar vulnerabilidades de seguridad:

`$ npm audit`

Corregir vulnerabilidades de seguridad:

`$ npm audit fix`

Actualizar npm globalmente a la última versión:

`$ npm install npm@latest -g`

Eliminar node_modules de tu proyecto y volver a instalar las dependencias de nuevo:

```shell
$ rm -rf node_modules
$ rm -rf package-lock.json
$ npm cache clean -f
$ npm install
```

[npm](https://www.npmjs.com/) sitio oficial.
