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

```sh
$ git init
```

Añadir todos los archivos:

```sh
$ git add —all
```

Lo que es lo mismo que:

```sh
$ git add .
```

Subir los archivos a un repositorio remoto:

```sh
$ git commit -m “primer commit”
```

```sh
$ git push -u origin master
```

Crear una nueva rama de Git en local y cambiar a esa rama:

```sh
$ git checkout -b [nombre_de_la_rama]
```

Esto es solo un atajo para:

```sh
$ git branch [nombre_de_la_rama]
```

```sh
$ git checkout [nombre_de_la_rama]
```

Cambiar a una rama:

```sh
$ git checkout [nombre_de_la_rama]
```

Ver el estado de la rama: 

```sh
$ git status
```

Mostrar la ramas locales: 

```sh
$ git branch
```

Mostrar las ramas locales y remotas: 

```sh
$ git branch --all
```

Una vez finalizado tus cambios en una rama para unir a master:

Nos situamos en master

```sh
$ git checkout master
```

Solo necesario si hay cambios en origin

```sh
$ git pull origin master
```

```sh
$ git merge [nombre_de_la_rama]
```

Subimos los cambios a nuestro repositorio remoto

```sh
$ git push origin master
``` 

Ver el historial:

```sh
$ git log
```

Para salir de la pantalla de git log inserta: q

Cambiar el "origin" de un repositorio Git

Ver el origin actual:

```sh
$ git remote -v
```

Te mostrará algo así:

```bash
origin  https://Netinetidesign@bitbucket.org/yuraksisa/mybooking_theme_foundation_6.git (fetch)
origin  https://Netinetidesign@bitbucket.org/yuraksisa/mybooking_theme_foundation_6.git (push)
```

Eliminar el origin actual y añadir uno nuevo:

```sh
$ git remote rm origin
```

```sh
$ git remote add origin https://Netinetidesign@bitbucket.org/Netinetidesign/mybooking-theme-nautic.git
```

```sh
$ git push -u origin master
```

Para eliminar Git de un proyecto, desde la carpeta del proyecto:

```sh
$ rm -rf .git
```

Eliminar node_modules de tu repositorio local y remoto: 
Primero añade node_modules a .gitignore, después ejecuta lo siguiente:

```sh
$ git rm -r --cached node_modules
```

```sh
$ git commit -m 'Remove the now ignored directory node_modules'
```

```sh
$ git push origin master
```

Bajar todas las nuevas ramas del repositorio remoto:

```sh
$ git clone url-repositorio
```
