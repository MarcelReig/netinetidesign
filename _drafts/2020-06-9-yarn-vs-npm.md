---
layout: post
title: Yarn vs npm
meta:
  description: Yarn vs npm
comments: true
tags: node
category: programacion
image: packages.jpg
---

Los dos son gestores de paquetes de node, cuál utilizar?

npm instala los paquetes secuencialmente mientras que yarn lo hace en paralelo por lo que yarn es más rápido.

En cuanto al audit el de npm es mucho más completo que el de yarn y tiene la opción `npm audit fix` que yarn no tiene.

### Archivos .lock

Los archivos .lock especifican la versión exacta de las dependencias instaladas en node_modules.

Yarn genera un [yarn.lock](https://yarnpkg.com/lang/es-es/docs/yarn-lock/)

npm genera un [package.json.lock](https://docs.npmjs.com/files/package-lock.json)

Yarn import utiliza package-lock.json para sincronizar los lock.
[Leer más...](https://yarnpkg.com/blog/2018/06/04/yarn-import-package-lock/)

También existe una herramienta para importar ambos:
[synp](https://github.com/imsnif/synp)

Para conseguir instalaciones consistentes en todas las máquinas, Yarn necesita más información que las dependencias que se configura en tu package.json. Yarn necesita almacenar exactamente las versiones que se instalaron de cada dependencia.

Para hacer esto Yarn utiliza un archivo yarn.lock en la raíz de tu proyecto.

Todos los archivos yarn.lock y package.json deben ser incluidos en control de versiones (ej: git o mercurial).

Que diferencia hay entre los .lock y el package.json

Si cambias de un gestor a otro puedes tener problemas?

### Problema al utilizar npm y yarn en el mismo proyecto

Como hemos dicho, cuando ejecutas `npm install` te genera el package-lock.json mientras que cuando cuando ejecutas `yarn`te genera el yarn.lock. Al hacer el commit de estos archivos estás dando soporte a cada una de estas herramientas.

No hay nada malo en dar soporte a las dos tecnologías, pero debes asegurarte de tener los dos archivos .lock sincronizados de alguna forma.

Con el comando `yarn import`puedes generar un yarn.lock desde un package-lock.json.

En sentido contrario, para generar un package-lock.json desde un yarn.lock puedes utilizar [sync](https://github.com/imsnif/synp).

### Como dar soporte para npm:

clean up

`rm -rf node_modules`

remove previous if exists

`rm package-lock.json`

create node_modules tree according to yarn.lock file

`yarn install`

generate lock file for currently installed node_modules tree

`npm shrinkwrap`

rename shrinkwrap to lock

`mv npm-shrinkwrap.json package-lock.json`

adds network metadata to package-lock.json (resolved and integrity sha-1)

`npm install`

Leer más sobre [npm-shrinkwrap](https://docs.npmjs.com/cli/shrinkwrap)...

[Migrar de npm a yarn](https://yarnpkg.com/en/docs/migrating-from-npm)

Migrar de yarn a npm:

- Remove yarn.lock (don't need this file).
- Remove folder node_modules
- In package.json, change script use yarn to the same command with npm
- Remove all global package of yarn (don't need to remove if you want use npm for one project)
- Remove yarn if you don't want to use it again.
- Install npm (if you installed, ignore this step)
- Install global and local package you need

Migrar de npm a yarn:

- Remove package-lock.json (don't need this file).
- Remove folder node_modules
- In package.json, change script use npm to the same command with yarn
- Remove all global package of npm (don't need remove if you want to use yarn for one project)
- Remove npm if you don't want to use it again.
- Install yarn (if you installed, ignore this step)
- Install global and local package you need
