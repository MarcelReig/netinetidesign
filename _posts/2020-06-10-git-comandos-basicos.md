---
layout: post
title: Git comandos básicos
description: Git comandos básicos
comments: true
category: programacion
tags: git
image: git.png
---

Iniciar un repositorio local desde un projecto existente:

<!-- more -->

`$ git init`

Añadir todos los archivos:

`$ git add —all`

Lo que es lo mismo que:

`$ git add .`

Subir los archivos a un repositorio remoto:

`$ git commit -m “primer commit”`

`$ git push -u origin master`

Crear una nueva rama de Git en local y cambiar a esa rama:

`$ git checkout -b [nombre_de_la_rama]`

Esto es solo un atajo para:

`$ git branch [nombre_de_la_rama]`

`$ git checkout [nombre_de_la_rama]`

Cambiar a una rama:

`$ git checkout [nombre_de_la_rama]`

Ver todas las ramas:

`$ git branch`

Una vez finalizado tus cambios en una rama para unir a master:

`$ git checkout master` // Nos situamos en master

`$ git pull origin master` // Solo necesario si hay cambios en origin

`$ git merge [nombre_de_la_rama]`

`$ git push origin master` // Subimos los cambios a nuestro repositorio remoto

Ver el historial:

`$ git log`

Para salir de la pantalla de git log inserta: q

Cambiar el "origin" de un repositorio Git

Ver el origin actual:

`$ git remote -v`

Te mostrará algo así:

```bash
origin  https://Netinetidesign@bitbucket.org/yuraksisa/mybooking_theme_foundation_6.git (fetch)
origin  https://Netinetidesign@bitbucket.org/yuraksisa/mybooking_theme_foundation_6.git (push)
```

Eliminar el origin actual y añadir uno nuevo:

`$ git remote rm origin`

`$ git remote add origin https://Netinetidesign@bitbucket.org/Netinetidesign/mybooking-theme-nautic.git`

`$ git push -u origin master`

Para eliminar Git de un proyecto, desde la carpeta del proyecto:

`$ rm -rf .git`

Eliminar node_modules, bower_components o lo que necesites de tu repositorio.
Primero añade node_modules a .gitignore, después ejecuta lo siguiente:

`$ git rm -r --cached node_modules`

`$ git commit -m 'Remove the now ignored directory node_modules'`

`$ git push origin master`

Bajar todas las nuevas ramas del repositorio remoto:

`$ git clone url-repo`

El comando git branch, nos lista las ramas locales.
si le pasamos el parámetro --all (o -a), nos mostrará las locales y las remotas.
