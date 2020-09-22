---
layout: post
title: Arrays en JavaScript
meta:
  description: Arrays en JavaScript
comments: true
tags: javascript
category: programacion
image: arrays-javascript.jpg
---

Un **Array** es un objeto global en JavaScript utilizado para almacenar datos de tipo números, strings y objetos en una lista de valores con un nombre y un índice.
Los arrays comienzan a partir del índice cero y pueden ser manipulados con varios métodos.

```js
let scifiBooks = [
  "Yo Robot",
  "Fundación e imperio",
  "1984"
]
console.log(scifiBooks[2]);
```

Para acceder a un item en el array añadimos su índice entre corchetes detrás de la variable.

```sh
Output
"1984"
```
[<small><i class="fas fa-external-link-alt"></i> Play with it in JS Bin!</small>](https://jsbin.com/bubukey/edit?js,console){:target="_blank"}


**Array.isArray()** determina si el valor pasado es un Array.

```js
Array.isArray([1, 2, 3]);  // true
```

<h3>
  Métodos Mutadores
  <small class="text-muted">Mutan el array original</small>
</h3>

- **pop ()** Elimina el último elemento de un array y lo devuelve.
- **shift()** Elimina el primer elemento del array y lo retorna.
- **push()** Añade uno o más elementos al final de un array.
- **unshift()** Agrega uno o más elementos al inicio del array.
- **splice()** El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos. Acepta tres parámetros: 
  1. índice donde se comenzará a cambiar el array.
  2. un entero indicando el  número de elementos a eliminar.
  3. los elemetos que se añadirán al array empezando en el índice indicado en el primer parámetro.
- **reverse()** El método reverse() invierte el orden de los elementos de un array.
- **fill()** Cambia todos los elementos en un array por un valor estático. Acepta tres parámetros: 
  1. Valor con el que se va a rellenar el array.
  2. Índice inicial.
  3. Índice final.
- **sort()** Ordena los elementos de un array de acuerdo a su valor Unicode.

<h3>
  Métodos de acceso
  <small class="text-muted">No mutan el array original</small>
</h3>

- concat()
- join()
- slice()
- indexOf()
- lastIndexOf()

### Métodos de iteración

#### For

```js
let bebidas = [
  "Vodka",
  "Mate",
  "Caipirinha"
  ];
  for(let i = 0; i < bebidas.length; i++){
console.log(bebidas[i]);
}
```
```sh
Output
"Vodka"
"Mate"
"Caipirinha"
```

**Pros:** Permite hacer cosas como utilizar break y continue.<br>
**Contras:** Sintaxis poco legible.

<div class="alert alert-info" role="alert">
  <i class="fas fa-info-circle"></i> <b>Nota:</b> For no es un método de los arrays, es una sentencia para bucles en JavaScript pero se utiliza para recorrer arrays.
</div>

[<small><i class="fas fa-external-link-alt"></i> Play with it in JS Bin!</small>](https://jsbin.com/wuhiqun/edit?js,console){:target="_blank"}

#### Foreach

Array forEach() es un método de `Array.prototype` introducido en ECMAScript 5. 

ForEach Es la versión moderna del bucle for, con una sintaxis más sencilla.

El método forEach() ejecuta la función indicada una vez por cada elemento del array.

El método foreach() no modifica el array original.

El método foreach() llama a una función callback que acepta tres parámetros:

1. Valor actual del elemento
2. Indice del elemento (opcional)
3. El Array (opcional)

```js
const listaCompra = ['Platanos', 'Chocolate', 'Limones'];

function miCompra(producto,index,array){
  console.log(`En el ${index}: ${producto}`);
}

listaCompra.forEach(miCompra);
```

```sh
Output
"En el 0: Platanos"
"En el 1: Chocolate"
"En el 2: Limones"
```

[<small><i class="fas fa-external-link-alt"></i> Play with it in JS Bin!</small>](https://jsbin.com/xukiher/edit?js,console){:target="_blank"}

Puedes simplificar el código de los loops foEach utlizando funciones flecha.

```js
let colors = ['red', 'green', 'blue'];

colors.forEach(color => console.log(color));
```

```sh
Output
'red'
'green'
'blue'
```
[<small><i class="fas fa-external-link-alt"></i> Play with it in JS Bin!</small>](https://jsbin.com/jecuyet/edit?js,console){:target="_blank"}


#### Map

Array map() es un método de `Array.prototype` introducido en ECMAScript 5.

El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

El método map() no modifica el array original.

El método map() llama a una función callback que recibe tres parámetros:

1. Valor actual del elemento
2. Indice del elemento (opcional)
3. El Array (opcional)

```js
let scifiMovies = [
  {
    name: "Tron",
    director: "Steven Lisberger",
    year: 1982
  },
  {
    name: "Bade Runner 2049",
    director: "Denis Villeneuve",
    year: 2017
  },
  {
    name: "Ex Machina",
    director: "Alex Garland",
    year: 2015
  }
]

let directores = scifiMovies.map(x => {
  return x.director
})

console.log(directores);
```

```sh
Output
["Steven Lisberger", "Denis Villeneuve", "Alex Garland"]
````

[<small><i class="fas fa-external-link-alt"></i> Play with it in JS Bin!</small>](https://jsbin.com/wumudop/edit?js,console){:target="_blank"}

<div class="alert alert-info" role="alert">
  <p><i class="fas fa-info-circle"></i> <b>Diferencia entre foreach() y map()</b></p>
  <p>foreach() itera sobre una array en el que puedes aplicar operaciones en cada uno de sus ítems pero no devuelve nada, si guardas el resultado de la ejecución en una variable devuelve undefined.</p>
  <p>map() recorre un array y devuelve una copia del array modificado.</p>
</div>

#### Filter

El método filter() de `Array.prototype` crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

callback es invocado con tres argumentos:

- el valor del elemento
- el indice del elemento
- el objeto array completo

```js
let randomPlaylist = [
  
  {name: 'Led Zepelin', genre: 'Rock'},
  {name: 'Daft Punk', genre: 'Techno'},
  {name: 'Wu Tang', genre: 'Hip Hop'},
  {name: 'Tupack', genre: 'Hip Hop'}
  ]

let hiphopMusic = randomPlaylist
.filter( band => band.genre === 'Hip Hop');
let hiphopBand = hiphopMusic
.map( artist => artist.name );

console.log(hiphopMusic);
console.log(hiphopBand);
```

```sh
Output
[[object Object] {
  genre: "Hip Hop",
  name: "Wu Tang"
}, [object Object] {
  genre: "Hip Hop",
  name: "Tupack"
}]
["Wu Tang", "Tupack"]
```

<div class="alert alert-secondary" role="alert">
  En el ejemplo he combinado los métodos map() y filter() para obtener solo el nombre de la banda, no el objeto completo.
</div>

[<small><i class="fas fa-external-link-alt"></i> Play with it in JS Bin!</small>](https://jsbin.com/foyikef/edit?js,console){:target="_blank"}

#### Reduce

Array Reduce es un método de `Array.prototype` introducido en ECMAScript 5 (ES5) y es soportado por todos los navegadores modernos.

El método reduce() ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

La función reductora recibe cuatro argumentos:

- Acumulador (acc)
- Valor Actual (cur)
- Índice Actual (idx) // Opcional
- Array (arr) // Opcional

```js
let letters = ["H","e","l","l","o"];

let word = letters.reduce((acc, cur) =>{
  return acc + cur;
});

console.log(word);
```

```sh
Output
"Hello"
```

[<small><i class="fas fa-external-link-alt"></i> Play with it in JS Bin!</small>](https://jsbin.com/heduson/edit?js,console){:target="_blank"}

#### Find

**Find en un array de cadenas**

```js
const objetosPerdidos = [
  "Airpod derecho",
  "Chancla izquierda",
  "Gafas de sol"
  ];

const buscar = objetosPerdidos.find(buscarObjeto);

function buscarObjeto(objeto) {
  return objeto === "Chancla izquierda";
}

console.log(buscar);
```
```sh
Output
"Chancla izquierda"
```

[<small><i class="fas fa-external-link-alt"></i> Play with it in JS Bin!</small>](https://jsbin.com/nelekut/2/edit?js,console){:target="_blank"}

**Find en un array de objetos**

```js
const vehiculosOcasion = [
  {
    marca: "Volkswagen",
    modelo: "Polo",
    km: 80.000,
    year: 2000
  },
  {
    marca: "Seat",
    modelo: "Ibiza",
    km: 280.000,
    year: 2005
  },
  
  {
    marca: "Toyota",
    modelo: "Yaris",
    km: 30.000,
    year: 2010
  }
  
];

const propiedad1 = vehiculosOcasion.find(pocosKm).marca;
const propiedad2 = vehiculosOcasion.find(pocosKm).modelo

function pocosKm(vehiculo) {
  return vehiculo.km < 50.000;
}

console.log(`Tenemos un: ${propiedad1} ${propiedad2}`);
```
```sh
Output
"Tenemos un: Toyota Yaris"
```

[<small><i class="fas fa-external-link-alt"></i> Play with it in JS Bin!</small>](https://jsbin.com/boseqif/edit?js,console){:target="_blank"}


#### Spread operator

Spread operator es añadido en ECMAScript 6

`...`

Spread coge un array y lo divide en una lista de argumentos.

```js
let frutas = ['Manzana','Naranja','Platano'];

let nuevoArrayFrutas = [...frutas];

console.log(nuevoArrayFrutas);
```
```sh
Output
["Manzana", "Naranja", "Platano"]
```

Spread te permite concatenar arrays,(también funciona con objetos.)

```js
let frutas = ['Manzana','Naranja','Platano'];
let frutas2 = ['Piña','Limon','Mandarina'];

let macedonia = [...frutas, ...frutas2];

console.log(macedonia);
```

```zsh
Output
[
  "Manzana",
  "Naranja",
  "Platano",
  "Piña",
  "Limon",
  "Mandarina"
]
```

[<small><i class="fas fa-external-link-alt"></i> Play with it in JS Bin!</small>](https://jsbin.com/cofaqup/edit?js,console){:target="_blank"}





