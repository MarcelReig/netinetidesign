---
layout: post
title: "Ámbito y clausuras en JavaScript"
meta:
  description:
comments: true
category: programacion
tags: javascript
image: closures.jpg
---

## Ámbito (Scope)

El ámbito de una variable en javascript es la zona donde se declara una variable y puede ser de dos tipos, global o local.

La variables que se crean dentro de una función son variables locales y solamente son accesibles desde dentro de la función.

<!-- more -->

Las variables que se crean fuera de cualquier función se convierten en variables globales y son accesibles desde cualquier punto del programa.

JavaScript no soporta ámbito de bloque por lo que crear una variable dentro de una estructura de bloque como un bucle for no restringe la variable a este bucle.

Ejemplo de variable global:

```js
var varGlobal = "Soy una variable global";
console.log(varGlobal); // Soy una variable global
```

## Clausuras (Closures)

> Los closures son funciones que manejan variables independientes. En otras palabras, la función definida en el closure "recuerda" el entorno en el que se ha creado. - [mdn](https://developer.mozilla.org/es/docs/Web/JavaScript/Closures)

Ejemplo de clausura:

```js
function numberGenerator() {
  // Variable local que termina dentro de la clausura
  var num = 1;
  function checkNumber() {
    console.log(num);
  }
  num++;
  return checkNumber;
}

var number = numberGenerator();
number(); // 2
```

Enlaces útiles

- [mdn JavaScript Closures](https://developer.mozilla.org/es/docs/Web/JavaScript/Closures)

- [mdn JavaScript Funciones](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Funciones)
