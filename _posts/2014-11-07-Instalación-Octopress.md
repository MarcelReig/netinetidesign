---
layout: post
title: Primeros pasos con Octopress
meta:
  description: Primeros pasos con Octopress
comments: true
tags: jekyll
category: programacion
image: octopress.jpg
---

**Octopress** es un framework basado en **Jekyll**, aportando algunas mejoras y facilitando un poco las cosas, parece una buena opción para empezar.

**Jekyll** es una sistema para crear sitios web estáticos creado en Ruby.

<!-- more -->

<br>

<div class="alert alert-warning" role="alert">
  <h5>Este post es antiguo</h5>
  <p>El contenido de este post sigue siendo válido y Octopress te ofrece un sistema de Blogging muy completo, pero desde Enero del 2015 que <a href="http://octopress.org/">Octopress 3.0 Is Coming</a> así que decidí seguir con Jekyll a secas.</p>
</div>

<div class="spacer-mini"></div>

## Que lleva Octopress recien sacado de la caja?

- Una plantilla semántica HTML5.
- Un layout responsive preparado para móviles.
- Soporte para Twitter, Google Plus One, Disqus Coments, Pinboard, Delicious y Google Analytics.
- Una fácil estrategia para alojar tu web con Github Pages o Rsync.
- Soporte para POW.
- Compass y Sass.
- Resaltado de sintaxis Solarized.
- Un montón de pluguins interesantes listos para usar.

## Ventajas frente a Wordpress como sistema de blogging: <br>

- No necesitas base de datos.
- No necesitas un servidor local tipo MAMP para hacer pruebas.
- Utiliza Markdown, lo que hace que escribir sea muy cómodo.
- Github te permite alojar tu blog Jekyll u Octopress grátis en sus servidores.
- Hace uso de Git, lo que viene muy bien para acostumbrarse a este sistema de control de versiones.
- Hace uso de la terminal, lo que te obliga a utilizar los comandos básicos de la Shell de Unix.
- Te permite escribir tus post en local, aunque no tengas conexión a internet y subirlos posteriormente cuando estén listos.

**Octopress** se autodescribe como un framework para hackers, de acuerdo tal vez estén exajerando un poco, no es necesario ser un hacker para utilizarlo, pero no es un mal principio :)<br>
Estas son algunas de las tecnologías con las que vas a trastear si decides darle caña al blogging como un hacker:

- **Ruby**. No necesitas saber Ruby pero si necesitas tenerlo instalado en tu máquina.
- **RVM** o **rbenv**. Son herramientas muy útiles para manejar distintas versiones de Ruby.
- **Git** Quien no ha oido hablar de Git a estas alturas?
- **Github pages** o **Heroku**. Opciones de alojamiento gratuitas para todos!
- **ssh keys**. Donde me deje las llaves?
- **Markdown** Para escribir tus post cómodamente.
- **Terminal**

## Crear el hambiente de trabajo adecuado para utilizar Octopress en Mac OS X.

<hr>

## Instalando las Command Line Tools de Xcode

Descárgate [Xcode de la App Store.](https://itunes.apple.com/us/app/xcode/id497799835)
Una vez tengas instalado Xcode, ves a las preferencias, icono Downloads y haz click en el botón Install de las Command Line Tools.

## Instalando Homebrew

Para instalar cosas en Mac te recomiendo utilizar [Homebrew](http://brew.sh/index_es.html).<br>
Homebrew es un manejador de paquetes hecho en Ruby para Mac OS X.<br>
Resulta muy útil para instalar todo lo que no viene de serie en tu mac.<br>
Para instalar Homebrew primero necesitas tener las Xcode Command Line Tools, si no Homebrew te dará un herror.<br>
Abre la terminal y pega este código para instalar Homebrew:

```
$ ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"
```

Para comprovar que hemos hecho la instalación correctamente ejecuta este comando:

```
$ brew doctor
```

Si lo prefieres sigue la [guía de oficial de Homebrew.](https://github.com/Homebrew/homebrew/wiki/Installation)

## Instalando Git

Si todavía no tienes Git instalado puedes hacerlo desde su [sitio oficial.](http://git-scm.com/downloads)<br>
O mucho mejor utiliza Homebrew.

Para instalar Git con Homebrew abre la terminal e introduce:

```
$ brew install git
```

Para mantener tu versión de Git actualizada con Homebrew utiliza este comando:

```
$ brew update git
```

## Instalando Ruby

Octopress necesita que tengas como mínimo la versión 1.9.3, de Ruby instalada en tu máquina.<br>
En Mac OS X Mavericks ya tienes pre-instalada la versión 2.0.0p247 de Ruby, pero es mejor no tocar la versión del sistema y utilizar [RVM](http://rvm.io/) o [rbenv](https://github.com/sstephenson/rbenv) para gestionar las distintas versiones de Ruby que puedas necesitar.

He probado las dos opciones y _rbenv_ me gusta más, en cualquier caso lo dejo a vuestra elección.
Si quieres utilizar _RVM_ te puede interesar esta guía de [RailsApps](http://railsapps.github.io/installrubyonrails-mac.html).

Para instalar _rbenv_ con _Homebrew_ abre la terminal e introduce estos comandos:

```
$ brew update #Actualiza Homebrew
$ brew install rbenv #Instala rbenv
$ brew install ruby-build #Instala ruby-build
```

Para poder hacer uso de rbenv-install necesitas instalar [ruby-build](https://github.com/sstephenson/ruby-build) como un pluguin para rbenv.

## Instalando Pow!!

Esto es opcional, utilizar la opción <code>rake preview</code> que viene por defecto en Octopress, esta bién, pero si eres usuario de Mac y utilizas [POW](http://pow.cx/) puedes previsualizar tu Octopress en local de esta forma:

```
cd ~/.pow
ln -s /path/to/octopress octopress
cd -
```

Ahora puedes abrir tu blog con POW, simplemente utiliza el comando <code>rake watch</code> y abre <code>http://octopress.dev</code> nada más.

<br>

## Descárgate Octopress.

```
git clone git://github.com/imathis/octopress.git octopress
cd octopress
```

Instala las dependencias.

```
gem install bundler
rbenv rehash    # Si utilizas rbenv, utiliza está opción
bundle install
```

Instala el theme por defecto de Octopress.

```
rake install
```

## Desplegando tu blog

Hay varias formas de desplegar tu blog fácilmente en Octopress:

1. Github Pages
2. Heroku
3. Rsync

Mi elección ha sido utilizar **Github Pages**, si prefieres otra, [visita el sitio oficial.](http://octopress.org/docs/deploying/)

Con Github Pages de nuevo tienes dos opciones, utilizar páginas Github de usuario/organizaciones o utilizar páginas Github de proyecto (hg-pages).

En mi caso he utilizado _páginas de usuario/organizaciones_ y esta es la opción de la que voy a hablar.

Crea un [nuevo repositorio de Github](https://github.com/new) y nombra el repositorio con el formato: <code>username.github.io</code> donde <code>username</code> es tu nombre de usuario de GitHub o el nombre de organización, esto es importante si le pones cualquier otro nombre no funcionará.

Github Pages para usuarios/organizaciones utiliza la rama master como el directorio público en el servidor web, sirviendo tus páginas en la url: <code>http://username.github.io</code><br>
Vas a trabajar en la rama source para después commitear el contenido generado en la rama master.<br> Octopress tiene una configuración que te ayuda con todo esto, para decirle a Octopress que quieres utilizar GitHub pages, abre la terminal e introduce este comando:

```
rake setup_github_pages
```

La tarea rake te preguntará por la URL de tu repositorio de Github. Copia la url SSH o HTTPS de tu recién creado repositorio, que será algo así: <code>git@github.com:username/username.github.io.git</code> y pegaló como respuesta.

Ahora introduce estos dos comandos:

```
rake generate
rake deploy
```

Esto generará tu blog.
No te olvides de commitear el código de tu blog.

```
git add .
git commit -m 'tu mensaje'
git push origin source
```

El deploy se toma su tiempo dale unos 10 min. después de esto deberias de poder ver tu sitio en la url <code>http://tunombredeusuario.github.io</code>

Para más información [leer la documentación oficial.](http://octopress.org/docs/deploying/github/)

**_Enlaces útiles:_**

- [ROBOTS](http://robots.thoughtbot.com/psa-do-not-use-system-ruby) _Por que no usar la versión de ruby del sistema._
- [ROBOTS](http://robots.thoughtbot.com/using-rbenv-to-manage-rubies-and-gems) _Instalación detallada de rbenv._
- [RailsApps Project](http://railsapps.github.io/installrubyonrails-mac.html) _Instalación detallada de RVM._
