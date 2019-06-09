---
layout: post
title: Jekyll workflow con Gulp
meta:
  description: Jekyll workflow con Gulp
comments: true
category: programacion
tags: jekyll
image: rachael-blade-runner.jpg
---

[Jekyll](https://jekyllrb.com/) es un generador de sitios web estáticos preparado para blogging creado en Ruby por [Tom Preston](https://www.wikiwand.com/en/Tom_Preston-Werner), el cofundador de Github.

<!-- more -->

Jekyll es el motor detrás de [GitHub Pages](https://pages.github.com/) por lo que puedes alojar tu sitio web en GitHub de forma gratuita.

Jekyll utiliza [Liquid](https://shopify.github.io/liquid/) de Shopify como motor de plantillas.

Los posts en Jekyll normalmente se escriben en [Markdown](https://daringfireball.net/projects/markdown/), pero puedes utilizar HTML.

En el inicio de cada post y página en Jekyll va un bloque de código [YAML Frontmatter](http://yaml.org/).

El código YAML siempre va al principio entre triples guiones.

YAML tiene este aspecto:

```
---
layout: post
title: I have no idea what i'm doing
---
```

La estructura de un sitio en Jekyll es algo así:

```
.
├── _config.yml
├── _data
|   └── members.yml
├── _drafts
|   ├── el-post-que-me-hara-famoso.md
|   └── el-post-que-no-terminare-de-escribir.md
├── _includes
|   ├── footer.html
|   └── header.html
├── _layouts
|   ├── default.html
|   └── post.html
├── _posts
|   ├── 2017-10-29-no-tengo-ni-idea-de-lo-que-estoy-haciendo.md
|   └── 2017-04-26-mi-primer-post-en-jekyll.md
├── _sass
|   ├── _base.scss
|   └── _layout.scss
├── _site
└── index.html
# también puede ser 'index.md' con YAML Frontmatter
```

**\_config.yml** es el archivo de configuración de Jekyll donde podemos declarar las variables que queramos. Para aceder a las variables declaradas en \_config.yml desde nuestras plantillas utilizaremeos la sintaxis {{ site.double-lcb }} site.mivariable {{ site.double-rcb }}.

**\_drafts** es la carpeta donde guardamos los posts en los que estamos trabajando, pero que todavía no hemos terminado.

### Instalación de Jekyll

Si ya tienes [Ruby](https://www.ruby-lang.org/en/downloads/) y [RubyGems](https://rubygems.org/pages/download) instalados en tu máquina, puedes crear un nuevo sitio en Jekyll de este modo:

```yml
# Instalar las gemas Jekyll y Bundler a traves de RubyGems
~ $ gem install jekyll bundler

# Crear un nuevo sito Jekyll en ./myblog
~ $ jekyll new myblog

# Cambiar a tu nuevo directorio
~ $ cd myblog

# Montar el sitio en el servidor local
~/myblog $ bundle exec jekyll serve

# Ahora puedes ver tu sitio en http://localhost:4000
```

Si al ejecutar `bundle exec jekyll serve` te da un error con la fecha del post de bienvenida, tienes que abrir el archivo de configuración \_config.yml y excluir vendor.

<div class="callout primary">
  <p><i class="fa fa-sticky-note-o" aria-hidden="true"></i> Nota:</p>
  <p>Oficilamente Jekyll no tiene soporte para Windows, pero puede instalarse en Windows, con un poco de trabajo extra.</p>
  Instrucciones para instalar <a href="https://jekyllrb.com/docs/windows/#installation">Jekyll en Windows.</a>
</div>

### Temas

Los Temas en Jekyll también son gemas de Ruby, puede que esto no sea raro en el mundo de Ruby pero si para los neófitos como yo.

Que significa esto?

Cuando creas un nuevo sitio en Jekyll con `jekyll new new-shiny-site`, Jekyll instala un sitio con el tema [Minima](https://github.com/jekyll/minima), con el sistema de gemas.

Con este sistema algunos de los directorios como `assets`,`_layouts`,`_includes` y `_sass` se quedan ocultos en las gemas del tema, aunque sean leidos y procesados por Jekyll, no los vas a ver en tu directorio principal y por lo tanto, no vas a poder trabajar con ellos.

### Convertir un tema basado en gemas en un tema normal

Para poder crear nuestros temas queremos que todos los archivos estén a mano en el directorio principal de Jekyll, no en el mundo mágico de las gemas.

Puedes descargar [minima](https://github.com/jekyll/minima) para copiar los archivos del theme en el directorio principal y eliminar las referencias al tema original basado en gemas, en este caso minima.

Eliminar referencias al gem theme:

- Abre `Gemfile` y elimina `gem "minima", "~> 2.0"`.
- Abre `_config.yml`y elimina `theme: minima`.

Si has llegado hasta aquí, felicidades, ahora tienes un tema totalmente independiente!

<div class="callout warning">
<p><i class="fa fa-exclamation" aria-hidden="true"></i> Advertencia:</p>
  <p>Hemos eliminado todas las referencias al tema inicial por lo que ahora tu Jekyll va a dar errores.</p>
  <p>Te dará el error de que no encuentra los svg de los iconos sociales en el footer, abreló y elimina esa parte y cualquier otra que te de errores, ahora el tema es tuyo! No tengas miedo de cargarte todo lo que no te haga falta de minima theme.</p>
  <p>Las clases, puedes eliminarlas o reusarlas si te gusta como están nombradas, pero ya no hacen referencia a ningún css, tendrás que crear tus propios estilos para darle forma de nuevo al tema. Tranquilo, minima es un tema muy simple y no hay mucho que eliminar realmente.</p>
</div>

<div class="spacer"></div>

Hemos instalado Jekyll y preparado los archivos para nuestro tema, nos hemos cargado las referencias al theme original y nos hemos quedado con un churro de website, enhorabuena!!

Edita un poco los estilos para que la cosa quede presentable y pasamos a la siguiente tarea, añadir Gulp y Browsersync.

<div class="spacer"></div>
### [Gulp](https://gulpjs.com/)

Gulp es un automatizador de tareas hecho en Node.js.

Tanto el código de Gulp como tu Gulp file donde defines tus tareas están escritos en JavaScript.

Gulp nos ayuda a organizar, compilar y optimizar nuestro código.

Gulp usado correctamente puede mejorar tu workflow y la nota de tu sitio web en Google Page Speed.

Gulp te da total libertad a la hora de organizar el código por lo que los requisitos de la estructura de archivos de tu sitio no serán un problema.

La instalación de Gulp se hace con npm.

Instalar Gulp es muy sencillo, primero se tiene que instalar globalmente:

```html
npm install -g gulp
```

Después tienes que instalarlo en tu proyecto:

```html
npm install --save-dev gulp
```

<div class="callout primary">
<p><i class="fa fa-sticky-note-o" aria-hidden="true"></i> Nota:</p>
<p>En este post no voy a explicar el funcionamiento básico de Gulp. Si quieres aprender Gulp puedes empezar por aquí:</p>
<p>Si te gustan los videos te recomiendo la serie en español:
 <a href="https://www.youtube.com/watch?v=gsxSoPjz0XY&list=PLM-Y_YQmMEqBscmoT5y_W91oUnr_D4ulf">Crea tu workflow front-end con Gulp.js</a> de Juan Andrés Nuñez.</p>
<p>Si prefieres leer prueba con este artículo: <a href="https://www.smashingmagazine.com/2014/06/building-with-gulp/">Gulp – How To Build And Develop Websites</a></p>

</div>

<div class="spacer"></div>

### [Browsersync](https://browsersync.io/)

Browsersync es un servidor local muy útil para desarrollo.

Es lo mismo que utilizar jekyll serve y recargar la página manualmente pero más rápido y con algunas ventajas:

- Actualiza el navegador automáticamente en varios dispositivos y navegadores.

- Todos los navegadores siguen el scroll hasta el mismo punto.

- Todos los navegadores cargan los links al hacer click.

- Puede simular conexiones lentas, Browsersync puede simular que estas visitando tu web desde un lugar donde no llegan los 50MB de fibra que tienes en casa.

- Es compatible con Gulp.

- Es gratis y opensource.

Browsersync te facilita cuatro URL:

![Browsersync UI]({{ site.url }}/assets/images/blog/browsersync-url.png){:.img-fluid}

- **Local**: donde puedes ver tu proyecto.
- **Externa**: la dirección donde cualquier usuario en tu red local (Lan o Wifi) puede ver el proyecto.
- **UI**: Browserync UI te muestra todas las opciones de Browsersync.
- **UI Externa**: La UI para cualquier usuario de tu red.

Este es el aspecto de la UI de Browsersync, que en mi caso está en el puerto 3001.

![Browsersync UI]({{ site.url }}/assets/images/blog/browsersync-ui.png){:.img-fluid}

<div class="spacer"></div>

### Determinar que tareas quieres que haga Jekyll y que tareas quieres que haga Gulp

Tanto Jekyll como Gulp pueden procesar Sass, copiar assets a \_dist y lanzar un server local, por lo que tendrás que elegir que tareas quieres que haga cada uno.

Tienes mucha libertad para hacer esto, yo para empezar a funcionar sin complicarme mucho estoy haciendolo así:

### Tareas para Jekyll

- Limpiar el contenido de \_site cada vez que se ejecuta jekyll build.
- Procesar Markdown, gestionar los archivos del Blog y montar los layouts con Liquid y YAML.
- Copiar los assets de la raiz a \_site.

Jekyll por defecto copia todos los archivos y carpetas que encuentra en la raiz con algunas excepciones:

- Carpetas nombradas con un guión bajo al principio.
- Archivos con un punto al principio.
- Archivos que especifiques ignorar en tu \_config.yml.

Para que te hagas una idea, estos son los archivos que estoy copiando e ignorando:

**Estoy copiando:**

- blog
- bower_components
- css
- images
- js
- post
- CNAME
- index.html

**Estoy excluyendo:**

- vendor/bundle
- Gemfile
- Gemfile.lock
- bower.json
- gulpfile.js
- package.json
- package-lock.json
- CHANGELOG.md
- README.md
- feed.xml
- node_modules
- scss

<div class="callout primary">
<p><i class="fa fa-sticky-note-o" aria-hidden="true"></i> Nota:</p>
<p>Algunos desarrolladores prefieren procesar los assets con Gulp y copiarlos directamente en _dist en vez de copiarlos a la raiz y dejar que Jekyll los copie después a _dist como estoy haciendo yo.</p>
</div>
### Tareas para Gulp

- Procesar los estilos
- Ejecutar Jekyll y lanzar Browsersync
- Vigilar los cambios y refrescar el navegador

**Procesar estilos**

Jekyll por defecto compila Sass, pero hacerlo con Gulp tiene varias ventajas:

Podemos utilizar los plugins de Gulp para procesar estilos, hay muchos, yo de momento he empezado con dos:

- **gulp-sass**: compila sass.
- **gulp-autoprefixer**: añade los prefijos de navegador necesarios y elimina los que ya no lo son.

**Ejecutar Jekyll y lanzar Browsersync**

Con la orden `jekyll serve` Jekyll monta un servidor interno en localhost:4000, pero como hemos comentado, utilizar Browsersync tiene sus ventajas.

Necesitamos ejecutar Jekyll para que procese Markdown, copie los assets, las páginas independientes y los archivos del blog a \_dist, pero no queremos otro server en funcionamiento.

Por esta razón, no vamos a ejecutar `jekyll serve`, en su lugar vamos a ejecutar `jekyll build`.

`jekyll serve` procesa el html, copia los archivos a \_dist, monta un server local y vigila los cambios.

`jekyll build` se limita a procesar el html y copiar los archivos a \_dist.

Para ejecutar Jekyll desde Gulp utilizo el plugin [Gulp-shell](https://www.npmjs.com/package/gulp-shell).

```js
// Build Jekyll
gulp.task("build:jekyll", function() {
  return gulp
    .src("index.html", { read: false })
    .pipe(
      shell([
        "bundle exec jekyll build --drafts --config _config.yml,_config.dev.yml"
      ])
    )
    .on("error", gutil.log);
});
```

Y así es como estoy lanzando Browsersync desde Gulp:

```js
// Serve
gulp.task("serve", ["sass", "build:jekyll"], function() {
  browserSync.init({
    port: 4000,
    server: {
      baseDir: "./_site"
    }
  });
});
```

**Vigilar cambios y refrescar el navegador**

Queremos que Gulp vigile los cambios y refresque el navegador cuando cambie algo en cualquier parte del proyecto.

Para esto tenemos que crear una tarea watch en Gulp:

```js
// Watch
gulp.task("watch", function() {
  gulp.watch(["scss/*.scss"], ["build:styles"]);
  gulp.watch(["js/*js"], ["build:jekyll"]);
  gulp.watch(
    ["**/*.+(html|md|markdown|MD)", "!_site/**/*.*"],
    ["rebuild:jekyll"]
  );
});
```

<div class="callout warning">
  <p><i class="fa fa-sticky-note-o" aria-hidden="true"></i> Nota:</p>
  <p>Es importante excluir la carpeta _site de la tarea watch, para que browsersync no entre en un loop de recargar el navegador.</p>

</div>

Crear un archivo de configuración distinto para desarrollo no es obligatorio pero puede ser útil.

En mi caso he creado un archivo \_config.dev.yml en el que he cambiado la url del proyecto para desarrollo.

```yml
url: http://netinetidesign.com // url en produccción
url: http://localhost:4000     // url en desarrollo
```

Para sobreescribir tu config.yml con config.dev.yml cuando ejecutes jekyll en desarrollo, hazlo de este modo:

```js
"bundle exec jekyll build --config _config.yml,_config.dev.yml";
```

<div class="callout">
  <p>Este es <a href="https://github.com/MarcelReig/foundation-6-jekyll/blob/master/gulpfile.js">my gulpfile</a> terminado por si lo necesitas.</p>
</div>
<div class="spacer"></div>
