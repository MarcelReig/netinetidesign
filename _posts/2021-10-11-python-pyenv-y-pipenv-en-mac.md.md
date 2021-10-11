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

{:.lead.mb-5}
### Vamos a ver como instalar Python 3 en Mac con Pyenv y como crear proyectos con Pipenv en un entorno virtual aislado.

## Que es [Homebrew](https://brew.sh/)?

Si no lo tienes ya Homebrew es la herramienta que ideal para instalar software en Mac y lo vamos a utilizar para instalar Pyenv y Pipenv.

El siguiente comando instalará Homebrew en tu Mac: 
```sh
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Que es [Pyenv](https://github.com/pyenv/pyenv)?

Pyenv es una herrramienta que te permite instalar diferentes versiones de Python y cambiar entre ellas según las necesidades del proyecto.

Por lo que Pyenv es la herramianta ideal para instalar Python en tu Mac.

Python ya viene instalado en Mac por defecto pero viene con la versión 2.7 y vas a necesitar una versión más moderna, Python 3.7 en adelante.

macOS necesita Python 2 para alguna aplicación interna, por lo que no debes tocar la versión del sistema.


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

Pipenv es una herramienta de administración de paquetes además de un gestor de entornos virtuales en Python. Algo así como bundler, npm o yarn, si has trabajado con Ruby o JavaScript te resultarán familiares.

Pipenv crea entornos exclusivos en una carpeta separada para cada proyecto.

Instalar Pipenv en Mac con Homebrew: 

```sh
$ brew install pipenv
```

Actualizar Pipenv con Homebrew:

```sh
$ brew upgrade pipenv
```

Iniciar un entorno: 
Creamos la carpeta con el nombre de nuestro proyecto, nos situamos en la cerpeta de nuestro proyecto con el terminal y esribimos: 

```sh
$ pipenv shell
```

Al iniciar un nuevo entorno se crea un archivo `Pipfile` y un archivo `Pipfile.lock` que vienen a ser el equivalente a `Gemfile` y `Gemfile.lock` en Ruby o `package.json` y `package-lock.json` en node.

Instalar paquetes: 
Con el siguiente comando instalaríamos requests en nuestro proyecto.

```sh
$ pipenv install requests
```

<img src="{{ site.baseurl }}/assets/images/blog/pipenv.png" width="800" class="img-fluid text-center m-xl-auto" alt="Pipenv working">

Ahora si revisas el archivo Pipfile verás que se ha actualizado y aparece la librería requests en los paquetes.

<img src="{{ site.baseurl }}/assets/images/blog/pipfile.png" width="800" class="img-fluid text-center m-xl-auto" alt="Pipfile Python">


