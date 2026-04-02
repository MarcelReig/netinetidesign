---
layout: post
title: Git comandos básicos
description: Git comandos básicos
comments: true
category: programacion
tags: git
image: coding-2.webp
---

Referencia rápida de los comandos de Git más habituales.

## Inicialización

Iniciar un repositorio local:

```sh
$ git init
```

Clonar un repositorio remoto:

```sh
$ git clone https://github.com/usuario/repositorio.git
```

## Estado e historial

Ver el estado actual del repositorio:

```sh
$ git status
```

Ver el historial de commits:

```sh
$ git log --oneline
```

Ver los cambios no staged:

```sh
$ git diff
```

Ver los cambios staged (listos para commit):

```sh
$ git diff --staged
```

## Staging y commits

Añadir todos los archivos al staging:

```sh
$ git add .
```

Añadir un archivo concreto:

```sh
$ git add nombre-del-archivo
```

Hacer un commit:

```sh
$ git commit -m "descripción del cambio"
```

## Ramas

Crear una rama y cambiar a ella:

```sh
$ git switch -c nombre-de-la-rama
```

Cambiar a una rama existente:

```sh
$ git switch nombre-de-la-rama
```

Ver ramas locales:

```sh
$ git branch
```

Ver ramas locales y remotas:

```sh
$ git branch --all
```

Eliminar una rama local:

```sh
$ git branch -d nombre-de-la-rama
```

## Trabajo remoto

Ver la URL del repositorio remoto:

```sh
$ git remote -v
```

Subir cambios al repositorio remoto:

```sh
$ git push origin main
```

Bajar cambios del repositorio remoto:

```sh
$ git pull origin main
```

Cambiar la URL del repositorio remoto:

```sh
$ git remote set-url origin https://github.com/usuario/nuevo-repositorio.git
```

## Merge y rebase

Fusionar una rama en main:

```sh
$ git switch main
$ git merge nombre-de-la-rama
```

Actualizar tu rama con los cambios de main sin crear un merge commit:

```sh
$ git rebase main
```

## Stash

Guardar los cambios actuales temporalmente sin hacer commit:

```sh
$ git stash
```

Recuperar los cambios guardados:

```sh
$ git stash pop
```

Ver todos los stashes guardados:

```sh
$ git stash list
```

## Deshacer cambios

Descartar cambios en el working tree (sin staged):

```sh
$ git restore nombre-del-archivo
```

Descartar todos los cambios no staged:

```sh
$ git restore .
```

Deshacer el último commit manteniendo los cambios:

```sh
$ git reset HEAD~1
```

Deshacer el último commit descartando los cambios:

```sh
$ git reset --hard HEAD~1
```

## Utilidades

Eliminar un archivo del seguimiento de Git sin borrarlo del disco:

```sh
$ git rm -r --cached nombre-del-archivo
```

Eliminar Git de un proyecto:

```sh
$ rm -rf .git
```
