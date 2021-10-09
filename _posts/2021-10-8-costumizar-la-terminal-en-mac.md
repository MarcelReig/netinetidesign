---
layout: post
title: Costumizar la terminal en Mac
description: Costumizar la terminal en Mac
comments: true
tags: mac
category: programacion
image: terminal-mac.jpg
---

{:.lead.my-5}
### Configura la terminal con Hyper, oh my zsh y Spaceship en tu Mac.

Mac OSX viene con una terminal por defecto que funciona perfectamente, pero no es muy personalizable.

Los emuladores de terminal como Hyper o iTerm2 te dan la posibilidad de personalizar la terminal con multitud de temas y plugins.

<div class="alert alert-danger my-5" role="alert">
<p><i class="fas fa-exclamation-triangle"></i> Alerta:</p>
 <p>Peligro de procrastinar durante horas, reserva esto para una tarde de Sábado lluviosa...</p>
</div>

## Comprobar que ya tienes zsh en tu Mac

Desde macOS Catalina zsh es la shell por defecto en Mac así que no tienes que instalar nada.

Para comprobar tu shell escribe el siguiente comando: 

```shell
$ echo $SHELL
```

La respuesta será: 

```shell
/bin/zsh
```

## Instalar Hyper

<div class="d-flex justify-content-center my-5">
<img src="{{ site.baseurl }}/assets/images/blog/hyper.png" width="200" class="img-fluid text-center m-xl-auto" alt="Hyper logo">
</div>

Hyper es un emulador de terminal customizable creado por [Vercel](https://vercel.com/), se trata de una aplicación [Electron](https://www.electronjs.org/) por lo que es multiplataforma, está disponible para Windows, Linux y macOS.

Hyper está construido con tecnologías web HTML, CSS y JavaScript y está basado en [xterm.js](https://xtermjs.org/) un componente frontend escrito en TypeScript, el mismo que utiliza la terminal de VS Code y Atom.

Al no ser una aplicación nativa como [iTerm2](https://iterm2.com/) el rendimiento es algo menor y consume más recursos, si eres tiquismiquis en ese aspecto tal vez prefieras iTerm2 que también ofrece muchas ventajas frente a la terminal por defecto.

Hyper, Visual Studio Code, Slack, Atom, Discord, WhatsApp Desktop, todas son aplicaciones electron y si tienes muchas abiertas al mismo tiempo notarás que los ventiladores se ponen a todo gas.

[awesome-hyper](https://github.com/bnb/awesome-hyper) es un repositorio de GitHub en el que encontrarás todo tipo de recursos para Hyper.

Descarga [Hyper](https://hyper.is/) desde su sitio web, haz doble click en el dmg y arrastra Hyper a la carpeta Aplicaciones.

<div class="d-flex justify-content-center my-5">
<img src="{{ site.baseurl }}/assets/images/blog/install-hyper.png" width="400" class="img-fluid text-center m-xl-auto" alt="Hyper install">
</div>

Abre Spotlight con <kbd>cmd + space</kbd> y escribe hyper, la aplicación debería aparecer en la lista.

<div class="d-flex justify-content-center my-5">
<img src="{{ site.baseurl }}/assets/images/blog/hyper-launchpad.png" width="600" class="img-fluid text-center m-xl-auto" alt="Hyper install">
</div>

Con Hyper abierto, en el menú superior de Apple aparecerá el menú de Hyper con el enlace a Preferencias que te abrirá el archivo de configuración `~/.hyper.js`, donde podrás cambiar la fuente, el tema, añadir plugins etc...

<div class="d-flex justify-content-center my-5">
<img src="{{ site.baseurl }}/assets/images/blog/menu-apple.png" width="600" class="img-fluid text-center m-xl-auto" alt="Menú apple">
</div>

Si tienes Visual Studio Code configurado para abrir archivos desde la terminal puedes abrir el archivo `~/.hyper.js`  con el siguiente comando: 

```sh
$  code ~/.hyper.js  
```

Para abrir `~/.hyper.js` con TextEdit ejecuta el siguiente comando: 

```sh
$ open ~/.hyper.js
```

Para abrir `~/.hyper.js` con Vim ejecuta el siguiente comando:  

```sh
$ vim ~/.hyper.js
```

### Temas para Hyper

En el [store](https://hyper.is/themes?newest) de hyper encontrarás una gran cantidad de temas para elegir.

Yo estoy utilizando [hyper-aura-theme](https://hyper.is/store/hyper-aura-theme), que tiene este aspecto: 

<div class="d-flex justify-content-center my-5">
<img src="{{ site.baseurl }}/assets/images/blog/hyper-captura.png" width="600" class="img-fluid text-center m-xl-auto" alt="Hyper captura">
</div>

## Instalar oh my zsh

<div class="d-flex justify-content-center my-5">
<img src="{{ site.baseurl }}/assets/images/blog/ohmyzsh.png" width="200" class="img-fluid text-center m-xl-auto" alt="oh my zsh logo">
</div>

Además de Hyper [oh my zsh](https://ohmyz.sh/) es un framework que pone a tu disposición toda una serie de plugins y temas para tu shell zsh.

El siguiente comando instalará oh my zsh en tu computadora: 

```sh
$ sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

Igual que con Hyper la instalación de oh my zsh te creará un archivo de configuración `~/.zshrc` en la raíz del sistema.

Si tienes Visual Studio Code configurado para abrir archivos desde la terminal puedes abrir el archivo `~/.zshrc`  con el siguiente comando: 

```sh
$  code ~/.zshrc  
```

Para abrir `~/.zshrc` con TextEdit ejecuta el siguiente comando: 

```sh
$ open ~/.zshrc
```

Para abrir `~/.zshrc` con Vim ejecuta el siguiente comando:  

```sh
$ vim ~/.zshrc
```

Una vez hecho cambios para ver el efecto ejecuta el siguiente comando:

```sh
$ source ~/.zshrc
```

## Instalar [Homebrew](https://brew.sh/)

<div class="d-flex justify-content-center my-5">
<img src="{{ site.baseurl }}/assets/images/blog/homebrew.png" width="200" class="img-fluid text-center m-xl-auto" alt="homebrew logo">
</div>

Homebrew es un sistema de administración de paquetes de software que instala todo aquello que necesitas que Apple no instala de serie. En el caso que nos ocupa nos ayudará a instalar un prompt personalizado para zsh.

El siguiente comando instala Homebrew en tu Mac: 

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Zsh prompt personalizado

Tenemos dos opciones muy elegantes para personalizar el prompt [Starship](https://starship.rs/) y  [Spaceship](https://spaceship-prompt.sh/), elige el que más te guste.

He probado los dos prompts y para el uso que le doy a la terminal no he notado diferencias notables entre uno y otro.

<div class="alert alert-warning my-5" role="alert">
<p><i class="fas fa-sticky-note"></i> Nota:</p>
 <p><b>Spaceship</b> necesita una fuente <b>powerline</b> para funcionar correctamente.</p>
 <p><b>Starship</b> necesita una fuente <b>Nerd fonts</b> para funcionar correctamente.</p>
 <p>Más abajo explico como instalar las fuentes.</p>
</div>

### Instalar [Starship](https://starship.rs/) + Nerd Fonts

<div class="d-flex justify-content-center my-5">
<img src="{{ site.baseurl }}/assets/images/blog/starship-logo.svg" width="200" class="img-fluid text-center m-xl-auto" alt="starship logo">
</div>

Para instalar starship con Homebrew ejecuta el siguiente comando: 

```shell
$ brew install starship
```

Una vez instalado abre el archivo de configuración de zsh `~/.zshrc` y añade la siguiente línea al final del archivo: 

```shell
eval "$(starship init zsh)"
```

### Instalar [Spaceship](https://spaceship-prompt.sh/) + Powerline Fonts

<div class="d-flex justify-content-center my-5">
<img src="{{ site.baseurl }}/assets/images/blog/spaceship.svg" width="200" class="img-fluid text-center" alt="spaceship logo">
</div>

Para instalar Spaceship con Homebrew ejecuta el siguiente comando:

```sh
$ brew install spaceship
```

Asegurate de que se han añadido las siguientes líneas a tu archivo de configuración `~/.zshrc`: 

```sh
# Set Spaceship ZSH as a prompt
autoload -U promptinit; promptinit
prompt spaceship
```

## Instalar fuentes

<div class="d-flex justify-content-center my-5">
<img src="{{ site.baseurl }}/assets/images/blog/nerd-fonts-logo.svg" width="200" class="img-fluid text-center m-xl-auto" alt="nerd-fonts logo">
</div>

Disponemos de dos repositorios populares de fuentes optimizadas para utilizar en terminales [nerdfonts](https://www.nerdfonts.com/) y [powerline-fonts](https://github.com/powerline/fonts#fontconfig).

Este tipo de fuentes cuentan con los iconos de git, node, ruby, python etc...

No es necesario descargar todas las fuentes nerd o todas las fuentes powerline, puedes descargar solo la fuente que te guste e instalarla en el sistema.

Nerdfonts tiene una página de descargas que hace el proceso muy sencillo [nerdfonts downloads](https://www.nerdfonts.com/font-downloads). O puedes leer el [Readme](https://github.com/ryanoasis/nerd-fonts/blob/master/readme.md) para ver todas las opciones.

Para la descarga fuentes individuales powerline tienes que acceder al repositorio de Git y descargarlas manualmente. 

## Instalar [nerdfonts](https://www.nerdfonts.com/) en Mac con Homebrew:

```sh
$ brew tap homebrew/cask-fonts
$ brew install --cask font-hack-nerd-font
```

Con las instrucciones anteriores instalaríamos la fuente `hack` en nuestro sistema, para instalar cualquier otra fuente de nerd-fonts substituye `hack` por la fuente que quieras instalar: 

```sh
$ brew tap homebrew/cask-fonts
$ brew install --cask font-<FONT NAME>-nerd-font
```

<div class="alert alert-warning my-5" role="alert">
<p><i class="fas fa-sticky-note"></i> Nota:</p>
 <p>Si tienes problemas descargando alguna fuente nerd con brew, utiliza la <a href="https://www.nerdfonts.com/font-downloads">página de descargas</a> que funciona perfecto.</p>
</div>

## Instalar [powerline-fonts](https://github.com/powerline/fonts#fontconfig): 

Los siguientes comandos instalarán todas las fuentes powerline en tu librería de fuentes en mi caso las ha instalado en `/Users/marcelreig/Library/Fonts`.

Clonar todas las fuentes powerline: 

```sh
$ git clone https://github.com/powerline/fonts.git
```

Instalar las fuentes: 

```sh
$ cd fonts

$ ./install.sh
```

Limpiar las carpetas una vez instaladas: 

```sh
cd ..
$ rm -rf fonts
```
