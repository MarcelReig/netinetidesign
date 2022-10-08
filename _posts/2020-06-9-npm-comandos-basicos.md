---
layout: post
title: npm comandos básicos
description: npm comandos básicos
comments: true
tags: npm
category: programacion
image: npm.png
---

Ver la versión actual de node:

```sh
$ node -v
```

Instalar dependencias de desarrollo:

```sh
$ npm install nombre_paquete -D
```

O versión extendida:

```sh
$ npm install nombre_paquete --save-dev
```

Comprobar si existen versiones más actuales de los paquetes instalados:

```sh
$ npm outdate
```

Actualizar todos los paquetes:

```sh
$ npm update
```

Actualizar solo el paquete nombrado:

```sh
$ npm update nombre_paquete
```

Desinstalar el paquete nombrado:

```sh
$ npm uninstall nombre_paquete
```

Revisar vulnerabilidades de seguridad:

```sh
$ npm audit
```

Corregir vulnerabilidades de seguridad:

```sh
$ npm audit fix
```

Actualizar npm globalmente a la última versión:

```sh
$ npm install npm@latest -g
```

Eliminar node_modules de tu proyecto y volver a instalar las dependencias de nuevo:

```sh
$ rm -rf node_modules
$ rm -rf package-lock.json
$ npm cache clean -f
$ npm install
```

[npm](https://www.npmjs.com/) sitio oficial.
