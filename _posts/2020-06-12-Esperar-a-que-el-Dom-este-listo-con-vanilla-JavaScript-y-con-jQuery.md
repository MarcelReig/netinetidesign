---
layout: post
title: Esperar a que el Dom este listo con vanilla JavaScript y con jQuery
description: Esperar a que el Dom este listo con vanilla JavaScript y con jQuery
comments: true
category: programacion
tags: javascript
image: coding-2.webp
---

Esperar a que el DOM este listo con vanilla JS:

<!-- more -->

```js
document.addEventListener("DOMContentLoaded", function() {
  console.log("Estoy listo!");
});
```

Esperar a que el DOM este cargado con jQuery:

```js
$(document).ready(function() {
  console.log("Estoy listo con jQuery!");
});
```

Podemos hacer lo mismo de forma abreviada:

```js
$(function() {
  console.log("Estoy listo con jQuery!");
});
```
