---
layout: post
title: Regreso a las páginas web estáticas
description: Regreso a las páginas web estáticas
comments: true
category: programacion
tags: jekyll
image: static.jpg
---

Hace unos 10 años cuando descubrí Wordpress, fue una revolución, de repente podía crear un Blog con la famosa instalación de 5 minutos sin apenas conocimientos de PHP, con un panel de administración amigable para los clientes, un directorio de plugins en continuo crecimiento y unos requisitos de servidor bastante básicos, en este escenario hacer páginas web estáticas estaba bien pero no era lo último, por así decirlo.

Sabemos que la herramienta no es lo importante si no como la usas, dependiendo de tu habilidad como desarrollador, WP puede ser la mejor opción para tu proyecto, pero hoy en día tenemos otras opciones con sus ventajas e inconvenientes que vale la pena analizar.

Ahora podemos aprovechar plataformas de terceros para incluir servicios en cualquier sitio web, sin necesidad de utilizar lenguajes de servidor.

- Comentarios: [Disqus](https://disqus.com/), [Facebook comments](https://developers.facebook.com/docs/plugins/comments/).
- Formularios: [Formspree](https://www.formspree.io/), [Simple Form](https://www.formspree.io/), [Formingo](https://www.formingo.co/)...
- Campaña de mailing: [MailChimp](https://mailchimp.com/) o [Campaing Monitor](https://www.campaignmonitor.com/)
- Contenido externo: Flikr, Youtube, Vimeo, Soundcloud y Google Maps.

Tenemos [**generadores de sitios web estáticos**](https://www.staticgen.com/) con sistemas de plantillas que nos facilitan el diseño de los layouts.

Los generadores de sitios web estáticos son para programadores o aficionados a la tecnología, que se sientan cómodos utilizando la terminal y escribiendo código.

Tecnologías que te encontrarás según el generador que elijas:

- npm <small class="color-gray">Manejador de paquetes node</small>
- Gulp <small class="color-gray">Automatizador de tareas</small>
- Git / GitHub <small class="color-gray">Control de versiones</small>
- Sass <small class="color-gray">Preprocesador de css</small>
- Liquid <small class="color-gray">Sistema de plantillas</small>
- Handlebars <small class="color-gray">Sistema de plantillas</small>
- Jade <small class="color-gray">Sistema de plantillas</small>
- Yaml <small class="color-gray">Formato de serialización de datos</small>
- JSON <small class="color-gray"> Formato de texto ligero para el intercambio de datos</small>

Para esta web he creado mi propio theme a partir de [minima](https://github.com/jekyll/minima), el theme por defecto de **Jekyll** y para los estilos he añadido **Bootstrap 4**.

Otros generadores que me parecen interesantes son [Hugo](https://gohugo.io/) y [Midlemann](https://middlemanapp.com/).

### Cómo funcionan los generadores de sitios web estáticos?

1. Te instalas el generador y las dependencias necesarias en local.
1. Trabajas en tu proyecto.
1. Subes tu página web estática generada a tu servidor vía ftp, rsync, Git o la técnica que prefieras.

Hay generadores de sitios web estáticos de todos los sabores, puedes encontrarlos escritos en .Net, Ruby, Phyton, PHP, Go o JavaScript. Pero finalmente con todos obtienes archivos en los lenguajes que conoce el navegador que son HTML, CSS y JavaScript.

Los generadores de sitios estáticos funcionan vía línea de comandos, soportan uno o más sistemas de plantillas, te montan un servidor local para testar y un sitio web estático final para producción.

En [StaticGen](https://www.staticgen.com/) puedes elegir el que más te guste.

### Lo que me gusta de Jekyll

- Jekyll utiliza Yaml Front Matter y Liquid, lo que permite darle algo de lógica a las plantillas, estructuras de control (if, case, for), definir variables etc...
- Puedes añadir el framework front-end que quieras, Foundation, Bootstrap, Materialize o ninguno.
- Puedes alojar tu web gratis en GitHub.
- Al no tener base de datos son más ligeros y más rápidos.
- Al no tener base de datos son más difícil de hackear.
- Puedes escribir tus posts en Markdown.
- Tienes control de versiones con Git.
- Mejoras el posicionamiento.
- Utilizas menos recursos del servidor.
- Aprendes a utilizar tecnologías web modernas

Si quieres añadir funcionalidades avanzadas como zonas autoeditables o un blog fácil de administrar por el cliente puedes hacerlo con aplicaciones de terceros aquí tienes una [lista de CMS para webs estáticas](https://headlesscms.org/).

**Alojamiento para Jekyll:**

- [Netlify](https://www.netlify.com/), es la opción que estoy utilizando actualmente, ofrece continuo despliegue desde git-hub, CDN global, SSL, optimización de assets y dominio propio, todo esto absolutamente Gratis!
- [Surge](https://surge.sh/), no lo he probado pero es otro servicio gratuito para webs estáticas.
- [GitHub Pages](https://pages.github.com/), gratis, con dominio propio, es la opción que he utilizado hasta conocer Netlify, funciona genial.

**Opciones avanzadas:**

- Configurar un VPS en DigitalOcean.
- Alojar Jekyll en Amazon S3.

**Definitivamente recomiendo Jekyll si:**

Eres desarrollador y quieres tener tu propio blog y portfolio, Jekyll es divertido, aprendes cosas nuevas y tienes muchas opciones de alojamiento gratuitas.
