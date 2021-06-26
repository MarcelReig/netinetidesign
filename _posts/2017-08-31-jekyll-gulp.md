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

**\_config.yml** es el archivo de configuración de Jekyll donde podemos declarar las variables que queramos. Para aceder a las variables declaradas en \_config.yml desde nuestras plantillas utilizaremeos la sintaxis {{ site.double-lcb }} site.mi_variable {{ site.double-rcb }}.

**\_drafts** es la carpeta donde guardamos los posts en los que estamos trabajando, pero que todavía no hemos terminado.

### Instalación de Jekyll

Si ya tienes [Ruby](https://www.ruby-lang.org/en/downloads/) y [RubyGems](https://rubygems.org/pages/download) instalados en tu máquina, puedes crear un nuevo sitio en Jekyll de este modo:

Instalar las gemas Jekyll y Bundler a traves de RubyGems
`$ gem install jekyll bundler`

Crear un nuevo sito Jekyll en ./myblog
`$ jekyll new myblog`

Cambiar a tu nuevo directorio
`$ cd myblog`

Montar el sitio en el servidor local
`$ bundle exec jekyll serve`

Ahora puedes ver tu sitio en `http://localhost:4000`

<div class="alert alert-info" role="alert">
  <p><i class="fas fa-sticky-note"></i> Nota:</p>
  <p>Oficialmente Jekyll no tiene soporte para Windows, pero puede instalarse en Windows, con un poco de trabajo extra.</p>
  Instrucciones para instalar <a href="https://jekyllrb.com/docs/windows/#installation">Jekyll en Windows.</a>
</div>

### Temas

Los Temas en Jekyll también son gemas de Ruby, puede que esto no sea raro en el mundo de Ruby pero si para los neófitos como yo.

Qué significa esto?

Cuando creas un nuevo sitio en Jekyll con `jekyll new new-shiny-site`, Jekyll instala un sitio con el tema [Minima](https://github.com/jekyll/minima), con el sistema de gemas.

Con este sistema algunos de los directorios como `assets`,`_layouts`,`_includes` y `_sass` se quedan ocultos en las gemas del tema, aunque sean leídos y procesados por Jekyll, no los vas a ver en tu directorio principal y por lo tanto, no vas a poder trabajar con ellos.

### Convertir un tema basado en gemas en un tema en el que podemos trabajar

Para poder crear nuestros temas queremos que todos los archivos estén a mano en el directorio principal de Jekyll, no en el mundo mágico de las gemas.

Puedes descargar [minima](https://github.com/jekyll/minima){:target="_blank"} para copiar los archivos del theme en el directorio principal y eliminar las referencias al tema original basado en gemas, en este caso minima.

Eliminar referencias al gem theme:

1. Abre el archivo `Gemfile` y elimina o comenta la línea donde hace referencia al theme `gem "minima", "~> 2.0"`.
2. Abre el archivo de configuración de Jekyll `_config.yml` y elimina `theme: minima`.

Si has llegado hasta aquí, felicidades! Ahora tienes un tema totalmente independiente (e inservible).

<div class="alert alert-warning" role="alert">
<p><i class="fa fa-exclamation" aria-hidden="true"></i> Advertencia:</p>
  <p>Hemos eliminado todas las referencias al tema inicial por lo que ahora tu Jekyll va a dar errores.</p>
  <p>Te dará el error de que no encuentra los svg de los iconos sociales en el footer, elimina esa parte y cualquier otra que te de errores, ahora el tema es tuyo! No tengas miedo de cargarte todo lo que no te haga falta de minima theme.</p>
  <p>Las clases, puedes eliminarlas o reusarlas si te gusta como están nombradas, pero ya no hacen referencia a ningún css, tendrás que crear tus propios estilos para darle forma de nuevo al tema. Tranquilo, minima es un tema muy simple y no hay mucho que eliminar realmente.</p>
</div>

Hemos instalado Jekyll y preparado los archivos para nuestro tema, nos hemos cargado las referencias al theme original y nos hemos quedado con un churro de website, enhorabuena!!

Edita los estilos para que la cosa quede presentable y pasamos a la siguiente tarea, añadir Gulp!
### [Gulp](https://gulpjs.com/)

Gulp es un automatizador de tareas hecho en Node.js.

Tanto el código de Gulp como tu Gulp file donde defines tus tareas están escritos en JavaScript.

Gulp nos ayuda a organizar, compilar y optimizar nuestro código.

Gulp usado correctamente puede mejorar tu workflow y la nota de tu sitio web en Google Page Speed.

Gulp te da total libertad a la hora de organizar el código por lo que los requisitos de la estructura de archivos de tu sitio no serán un problema.

La instalación de Gulp se hace con npm.

Instalar Gulp sencillo, primero se tiene que instalar globalmente:

```sh
$ npm install -g gulp
```

Después tienes que instalarlo en tu proyecto:

```sh
$ npm install --save-dev gulp
```
### Determinar que tareas quieres que haga Jekyll y que tareas quieres que haga Gulp

Tanto Jekyll como Gulp pueden procesar Sass, copiar assets a \_dist y lanzar un server local, por lo que tendrás que elegir que tareas quieres que haga cada uno.

Tienes mucha libertad para hacer esto, esta es mi elección personal:
### Tareas para Jekyll

1. Limpiar el contenido de \_site cada vez que se ejecuta jekyll build.
2. Procesar Markdown, gestionar los archivos del Blog y montar los layouts con Liquid y YAML.
3. Copiar los assets de la raíz a \_site.

Jekyll por defecto copia todos los archivos y carpetas que encuentra en la raíz con algunas excepciones:

1. Carpetas nombradas con un guión bajo al principio.
2. Archivos con un punto al principio.
3. Archivos que especifiques ignorar en tu \_config.yml.

Estos son los archivos que estoy copiando e ignorando:

**Estoy copiando** las páginas que tiene mi proyecto más los assets una vez procesado por Gulp:

- about
- assets
- blog
- contact
- open-source
- post
- index.html

**Estoy excluyendo:**

- Gemfile
- Gemfile.lock
- vendor
- gulpfile.js
- package-lock.json
- package.json
- node_modules
- README.md
- readme.md
- CHANGELOG.md

### Tareas para Gulp

1. Copiar las fuentes de _assets a assets
2. Procesar estilos
3. Procesar Scripts
4. Minificar imágenes 
5. Ejecutar Jekyll
6. Lanzar el servidor local Browsersync 
7. Vigilar cambios y refrescar el navegador

### 1. Fuentes

```js
function build_fonts() {
  return gulp
    .src("./_assets/fonts/*.{woff,woff2,eot,svg,ttf}")
    .pipe(gulp.dest("./assets/fonts"));
}
```
### 2. Estilos

Estos son los plugins que estoy utilizando para procesar los estilos:

- **gulp-sass**: compila sass.
- **gulp-autoprefixer**: añade los prefijos de navegador necesarios y elimina los que ya no lo son.

```js
function build_styles() {
  console.log("Compiling Sass");
  console.log("config.production:" + config.production);
  if (config.production) {
    return gulp
      .src("./_assets/styles/main.scss")
      .pipe(
        sass({
          includePaths: config.sassPaths,
          outputStyle: "compressed", // if css compressed **file size**
        }).on("error", sass.logError)
      )
      .pipe(
        autoprefixer({
          browsers: ["last 2 versions", "ie >= 9"],
        })
      )
      .pipe(gulp.dest("./assets/styles"))
      .pipe(gulp.dest("./_site/assets/styles"));
  } else {
    return gulp
      .src("./_assets/styles/main.scss")
      .pipe(
        sass({
          includePaths: config.sassPaths,
          outputStyle: "expanded", // if css compressed **file size**
        }).on("error", sass.logError)
      )
      .pipe(autoprefixer())
      .pipe(gulp.dest("./assets/styles"))
      .pipe(gulp.dest("./_site/assets/styles"))
      .pipe(
        browserSync.reload({
          stream: true,
        })
      );
  }
}
```

### 3. Scripts

```js
function build_scripts(done) {
  console.log("Compiling Scripts");
  if (config.production) {
    pump([
      gulp.src([
        "./_assets/scripts/**/*.js",
        "./node_modules/jquery/dist/jquery.min.js",
        "./node_modules/jquery-validation/dist/jquery.validate.js",
        "./node_modules/popper.js/dist/umd/popper.min.js",
        "./node_modules/bootstrap/dist/js/bootstrap.min.js",
      ]),
      order(
        [
          "node_modules/jquery/dist/jquery.min.js",
          "node_modules/jquery-validation/dist/jquery.validate.js",
          "node_modules/popper.js/dist/umd/popper.min.js",
          "node_modules/bootstrap/dist/js/bootstrap.min.js",
          "main.js",
        ],
        {
          base: "./",
        }
      ),
      concat("app.js"),
      uglify(),
      gulp.dest("./assets/scripts"),
    ]);
    done();
  } else {
    pump([
      gulp.src([
        "./_assets/scripts/**/*.js",
        "./node_modules/jquery/dist/jquery.js",
        "./node_modules/jquery-validation/dist/jquery.validate.js",
        "./node_modules/popper.js/dist/umd/popper.js",
        "./node_modules/bootstrap/dist/js/bootstrap.js",
      ]),
      order(
        [
          "node_modules/jquery/dist/jquery.js",
          "node_modules/jquery-validation/dist/jquery.validate.js",
          "node_modules/popper.js/dist/umd/popper.js",
          "node_modules/bootstrap/dist/js/bootstrap.js",
          "main.js",
        ],
        {
          base: "./",
        }
      ),
      concat("app.js"),
      gulp.dest("./assets/scripts"),
      gulp.dest("./_site/assets/scripts"),
      browserSync.reload({
        stream: true,
      }),
    ]);
    done();
  }
}
```
### 4. Imágenes

```js
function build_images() {
  // Construcción JEKYLL
  return (
    gulp
      .src("./_assets/images/**/*.+(jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG|ico)")
      // Caching images that ran through imagemin
      .pipe(
        cache(
          imagemin([
            imagemin.gifsicle({
              interlaced: true,
            }),
            imagemin.mozjpeg({
              progressive: true,
            }),
            imagemin.optipng({
              optimizationLevel: 5,
            }),
            imagemin.svgo({
              plugins: [
                {
                  removeViewBox: true,
                },
                {
                  cleanupIDs: false,
                },
              ],
            }),
          ])
        )
      )
      .pipe(gulp.dest("./assets/images"))
  );
}
```
### 5. Jekyll

Necesitamos ejecutar Jekyll para que procese Markdown, copie los assets, las páginas y los archivos del blog a \_dist, pero no queremos otro server en funcionamiento.

Por esta razón, no vamos a ejecutar `jekyll serve`, en su lugar vamos a ejecutar `jekyll build`.

`jekyll serve` procesa el html, copia los archivos a \_dist, monta un server local y vigila los cambios.

`jekyll build` se limita a procesar el html y copiar los archivos a \_dist.

Para ejecutar Jekyll desde Gulp utilizo el plugin [Gulp-shell](https://www.npmjs.com/package/gulp-shell).

```js
function build_jekyll() {
  if (config.production) {
    return gulp
      .src("index.html", {
        read: false,
      })
      .pipe(
        shell([
          "JEKYLL_ENV=production bundle exec jekyll build --config _config.yml",
        ])
      )
      .on("error", gutil.log);
  } else {
    return gulp
      .src("index.html", {
        read: false,
      })
      .pipe(
        shell([
          'bundle exec jekyll build  --config "_config.yml,_config_localhost.yml"',
        ])
      )
      .on("error", gutil.log);
  }
}
```

### 6. Browsersync

[Browsersync](https://browsersync.io/){:target="_blank"} es un servidor local muy útil para desarrollo.

Es lo mismo que utilizar jekyll serve y recargar la página manualmente pero más rápido y con algunas ventajas:

- Actualiza el navegador automáticamente en varios dispositivos y navegadores.

- Todos los navegadores siguen el scroll hasta el mismo punto.

- Todos los navegadores cargan los links al hacer click.

- Puede simular conexiones lentas, Browsersync puede simular que estas visitando tu web desde un lugar donde no llegan los 50MB de fibra que tienes en casa.

- Es compatible con Gulp.

- Es gratis y opensource.

Browsersync te facilita cuatro URL:

1. **Local**: donde puedes ver tu proyecto.
1. **Externa**: la dirección donde cualquier usuario en tu red local (Lan o Wifi) puede ver el proyecto.
1. **UI**: Browserync UI te muestra todas las opciones de Browsersync.
1. **UI Externa**: La UI para cualquier usuario de tu red.

![Browsersync UI]({{ site.url }}/assets/images/blog/browsersync-url.png){:.img-fluid}

Este es el aspecto de la UI de Browsersync, que en mi caso está en el puerto 3001.

![Browsersync UI]({{ site.url }}/assets/images/blog/browsersync-ui.png){:.img-fluid}

```js
function build_localServer() {
  console.log("BrowserSync setting up the server in port 4000");
  browserSync.init({
    port: 4000,
    server: {
      baseDir: "./_site/",
    },
  });
}
```

### 7. Vigilar cambios 

Queremos que Gulp vigile los cambios y refresque el navegador cuando cambie algo en cualquier parte del proyecto.

```js
function watchFiles() {
  console.log("watching files for changes");
  gulp.watch("_assets/styles/**/*.scss", build_styles);
  gulp.watch("_assets/scripts/*.js", build_scripts);
  gulp.watch(
    "_assets/images/**/*.+(ico|jpg|JPG|jpeg|JPEG|png|PNG|svg|SVG)",
    gulp.series(sync_images, browsersync_reload)
  );
  gulp.watch(
    ["**/*.+(html|md|markdown|MD)", "!_site/**/*.*"],
    gulp.series(build_jekyll, browsersync_reload)
  );
}
```

<div class="alert alert-info" role="alert">
  <p><i class="fas fa-sticky-note"></i> Nota:</p>
  <p>Es importante excluir la carpeta _site de la tarea watch, para que browsersync no entre en un loop de recargar el navegador.</p>
</div>

Crear un archivo de configuración distinto para desarrollo no es obligatorio pero puede ser útil.

En mi caso he creado un archivo \_config.dev.yml en el que he cambiado la url del proyecto para desarrollo.

```yml
url: http://netinetidesign.com // url en producción
url: http://localhost:4000     // url en desarrollo
```

Para sobreescribir tu config.yml con config.dev.yml cuando ejecutes jekyll en desarrollo, hazlo de este modo:

```js
"bundle exec jekyll build --config _config.yml,_config.dev.yml";
```

<div class="alert alert-info" role="alert">
  <p><i class="fab fa-github"></i></p>
  <p>Mi <a href="https://github.com/MarcelReig/netinetidesign/blob/master/gulpfile.js" target="_blanc">gulpfile</a> por si te sirve de referencia.</p>
</div>
<div class="spacer"></div>
