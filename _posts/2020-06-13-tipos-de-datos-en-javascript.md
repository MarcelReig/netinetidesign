---
layout: post
title: Tipos de datos en javascript
meta:
  description: Tipos de datos en javascript
comments: true
category: programacion
tags: javascript
image: js.jpg
---

JavaScript es un lenguaje de tipado débil o dinámico. Esto significa que no es necesario declarar el tipo de variable antes de usarla.

<!-- more -->

En los lenguajes de tipado dinámico como JavaScript o Phyton la comprobación de los tipos se realiza durante la ejecución del programa en vez de durante la compilación.

En los lenguajes de tipado estático o fuertemente tipados como C#, Go, Java o C++ la comprobación de los tipos se realiza durante la compilación, y no durante la ejecución.

### Declaración de variables en JS

En los lenguajes con tipos dinámicos no especificamos el tipo de valor al declarar las variables y podemos utilizar el mismo nombre de variable para contener distintos tipos de datos:

```js
var foo = 42; // foo es ahora un Number
var foo = "bar"; // foo es ahora un String
var foo = true; // foo es ahora un Boolean
```

En cambio en los lenguajes fuertemente tipados como en `C#`, especificamos el tipo de valor al declarar cada variable:

```c#
int edad = 38;
string nombre = "Marcel";
bool b = false;
```

### En Javascript existen 7 tipos de datos

- String <small class="color-gray">Cadenas de texto.</small>
- Number <small class="color-gray">Valores numéricos.</small>
- Boolean <small class="color-gray">Representa una entidad lógica y puede tener dos valores: true y false.</small>
- null <small class="color-gray">Es un valor asignado tiene el valor de "no valor".</small>
- undefined <small class="color-gray">Una variable a la que no se le ha asignado ningún valor tiene el valor undefined.</small>
- Symbol <small class="color-gray">Nuevo en ECMAScript 2015.</small>
- Object <small class="color-gray">Un valor en memoria al que podemos acceder por un identificador.</small>

Estos tipos se dividen en dos grupos, **Primitivos** y **de Objeto**.

### Tipos Primitivos

Los valores primitivos son inmutables, no pueden ser cambiados.

String, Number, Boolean, null, undefined y Symbol son tipos primitivos.

Los tipos primitivos no tienen métodos ni propiedades, aunque en los string, numbers y booleans podemos acceder a ellas grácias a los wrappers objects que veremos enseguida.

Veámos los tipos primitivos uno por uno:

### String

Un string es una cadena de caracteres.
A cada carácter de una cadena se le asigna una posición, empezando por el primer carácter en la posición 0, el segundo en la posición 1 y así sucesivamente.

```js
"tarta de plátano vegana con masa casera";
```

### Number

JavaScript solo tiene un tipo de datos numérico. No hay un tipo específico para los números enteros y de coma flotante.

```js
var peso = 54;
var pesoExacto = 54.3;
```

Declaración de variables numéricas en `C#`, lenguaje con diferentes tipos para para diferentes tipos de números:

```c#
int peso = 54;
float pesoExacto = 54.30f
```

### Boolean

Boolean representa una entidad lógica y puede tener dos valores: true, y false.

```js
var x = false;
if (x) {
  // este código no se ejecuta
}
```

### null

El tipo Null tiene el valor: null.

### undefined

Una variable a la cual no se le haya asignado valor tiene el valor undefined.

```js
var saludo;
console.log(typeof saludo); // "undefined"
```

### Symbol

<blockquote>
Symbol es un tipo de datos cuyos valores son <strong>únicos</strong> e <strong>inmutables</strong>. Dichos valores pueden ser utilizados como identificadores (claves) de las propiedades de los objetos.  Cada valor del tipo Symbol tiene asociado un valor del tipo String o Undefined que sirve únicamente como descripción del símbolo.
  <cite>mdn</cite>
</blockquote>

### Tipos de Objeto

Un Objeto es un valor en memoria al que podemos acceder por un identificador.

En JavaScript los objetos pueden ser vistos como una collección de propiedades.

Un Objeto en notación literal tiene este aspecto:

```js
var persona = { nombre: "Marcel", edad: "38", ciudad: "Alaior" };
```

Podemos escribirlo en multiples líneas para más claridad

```js
var persona = {
  nombre: "Marcel",
  edad: "38",
  ciudad: "Alaior"
};
```

### Determinar tipos utilizando el operador typeof

El operador typeof devuelve una cadena indicando el el tipo de valor de una variable.

Definamos unas variables:

```js
var mascota = "Gato";
var hermanas = 3;
var tv = false;
```

Veamos el operador typeof en acción:

```js
console.log(typeof mascota); // "string"
console.log(typeof hermanas); // "number"
console.log(typeof tv); // "boolean"
```

### Primitive wrapper objects en JavaScript

Los números, las cadenas y los valores Booleanos son primitivos, se supone que no tienen métodos ni propiedades.

Por qué podemos hacer esto?

```js
var nombre = "Marcel";
console.log(nombre.length); // devuelve 6
```

La variable nombre es un string primitivo, pero se comporta como si fuera un objeto, que esta pasando aquí?

Cuando se invoca un método o propiedad en un dato primitivo, javascript crea una instancia de su versión en objeto o "wrapper object" por un corto periodo para poder devolver su valor y después la destruye.

Digamos que Javascript convierte los tipos primitivos en objetos entre bastidores sin que te des cuenta.

Excepto para null y undefined, todos los valores primitivos tienen lo que se conoce como primitive wrapper object, lo que crea la versión en Objeto de su equivalente primitivo.

Podemos crear objetos wrapper esplícitamente utilizando sus constructores definidos:

- String para el primitivo string.
- Number para el primitivo number.
- Boolean para el primitivo Boolean.
- Symbol para el primitivo Symbol.

```js
var a = "tarta de plátano"; // primitivo
var b = new String("tarta de plátano"); // objeto
```

<div class="spacer-mini"></div>

<hr>

Referencias:

[Understanding Data Types in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-data-types-in-javascript){:target="_blank"}

[The Secret Life of JavaScript Primitives](https://javascriptweblog.wordpress.com/2010/09/27/the-secret-life-of-javascript-primitives/){:target="_blank"}
