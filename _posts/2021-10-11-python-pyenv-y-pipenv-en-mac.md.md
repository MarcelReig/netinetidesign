---
layout: post
title: Python Pyenv y Pipenv en Mac
description: Python Pyenv y Pipenv en Mac
comments: true
tags: python
category: programacion
image: python-3.jpg
---

{:.lead.my-5}
### Creo que el nombre de estas herramientas se les puso para poner a prueba la destreza de los principiantes en Python analizando pequeñas diferencias en el texto.

## Que es [Homebrew](https://brew.sh/)?

Si no lo tienes ya Homebrew es la herramienta que ideal para instalar software en Mac y lo vamos a utilizar para instalar Pyenv y Pipenv.

El siguiente comando instalará Homebrew en tu Mac: 
```sh
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Que es [Pyenv](https://github.com/pyenv/pyenv)?

Pyenv es una herrramienta que te permite instalar diferentes versiones de Python y cambiar entre ellas según las necesidades del proyecto.

Por lo que pyenv es la herramianta ideal para instalar Python en tu Mac.

Instalar Pyenv con Homebrew: 

```sh
$ brew install pyenv
```

Añadir pyenv al Path de Mac: 

```sh
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.zshrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.zshrc
```

Añadir Pyenv Init a tu terminal: 

```sh
echo 'eval "$(pyenv init --path)"' >> ~/.zprofile
echo 'eval "$(pyenv init -)"' >> ~/.zshrc
```

Ahora resetea la terminal: 

```sh
$ reset
```

Saber la versión de pyenv: 

```sh
$ pyenv -v
```
Ver todas las versiones de Python disponibles para instalar: 

```sh 
$ pyenv install --list
```

Instalar una versión de Python: 

<small>(En lugar de 3.9.7 pon la versión que quieras) </small>

```sh
$ pyenv 3.9.7
```

Ver las versiones de Python instaladas en el sistema: 

```sh
$ pyenv versions
```

Poner una versión de Python de pyenv por defecto en el sistema: 

<small>(En lugar de 3.9.7 pon la versión que quieras) </small>

```sh
$ pyenv global 3.9.7
```

Si cierras y abres la terminal y escribes python y debería mostrar la nueva versión que has establecido como global: 

```sh
~ 
❯ python
Python 3.9.7 (default, Oct 11 2021, 11:17:25) 
[Clang 13.0.0 (clang-1300.0.29.3)] on darwin
Type "help", "copyright", "credits" or "license" for more information.
>>> 
```

## Que es [Pipenv](Pipenv)?

Pipenv es un administración de paquetes además de un gestor de entornos virtuales en Python. Algo así como bundler, npm o yarn, si has trabajado con Ruby o JavaScript te resultarán familiares.

Pipenv crea entornos exclusivos en una carpeta separada para cada proyecto.

Instalar Pipenv en Mac con Homebrew: 

```sh
$ brew install pipenv
```

Actualizar Pipenv con Homebrew:

```sh
$ brew upgrade pipenv
```