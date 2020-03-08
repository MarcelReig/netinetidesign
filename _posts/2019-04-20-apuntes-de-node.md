---
layout: post
title: Apuntes de Node
meta:
  description: Apuntes de Node
category: programacion
tags: npm node
image: packages.jpg
---

Una pequeña chuleta para recordar los comandos más utilizados cuando trabajamos con Node, npm y nvm.

<!-- more -->

Ver la versión actual de node:

`$ node -v`

Instalar dependencias de desarrollo:

`$ npm install nombre_paquete --save-dev`

Instalar dependencias de desarrollo abreviado:

`$ npm install nombre_paquete -D`

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

Eliminar node_modules de tu proyecto y volver a instalar las dependencias de nuevo:

`$ rm -rf node_modules`

`$ rm -rf package-lock.json`

`$ npm cache clean -f`

`$ npm install`

## Node version manager

[nvm](https://github.com/creationix/nvm) nos permite tener múltiples versiones de node en nuestro sistema y trabajar con una versión específica de node en un proyecto.

Instalar nvm:

`$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash`

Descargar e instalar la última versión de node:

`$ nvm install node`

Instalar una versión específica de node:

`$ nvm install 6.14.4 # or 10.10.0, 8.9.1, etc`

Ver todas las versiones disponibles para instalar:

`$ nvm ls-remote`

Ver las versiones instaladas:

`$ nvm ls`

Utilizar una versión específica:

`$ nvm use <version>`

Desinstalar una versión:

`$ nvm uninstall <version>`

Establecer version de node por defecto con nvm

Instalar la versión que quieres:

`$ nvm install 6.1.0`

Establecer 6.1.0 (u otra versión) por defecto:

`$ nvm alias default 6.1.0`
