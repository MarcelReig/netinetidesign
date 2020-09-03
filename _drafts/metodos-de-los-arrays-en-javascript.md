---
layout: post
title: Trabajando con arrays en JavaScript
meta:
  description: Trabajando con arrays en JavaScript
comments: true
tags: javascript
category: programacion
image: arrays-javascript.jpg
---

Un **Array** es un objeto global en JavaScript utilizado para almacenar datos de tipo números, strings y objetos en una lista de valores con un nombre y un índice.
Los arrays comienzan a partir del índice cero y pueden ser manipulados con varios métodos.

```js
let scifyBooks = [
  "Yo Robot",
  "Fundación e imperio",
  "1984",
  "Un mundo feliz"
]
```
Para acceder a un item en el array añadimos su índice entre corchetes detrás de la variable.

```js
scifyBooks[2];
```
```js
Output
1984
```

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
  "Caipirinha",
  "Mojito"
  ];
  for(let i = 0; i < bebidas.length; i++){
console.log(bebidas[i]);
}
```

**Pros:** Permite hacer cosas como utilizar break y continue.<br>
**Contras:** Sintaxis poco legible.

<div class="alert alert-info" role="alert">
  <b>Nota:</b> Aclarar que for es una sentencia para bucles en JavaScript no un método propio de los arrays pero se utiliza para recorrerlos.
</div>

[<small><i class="fas fa-external-link-alt"></i> Play with it in JS Bin!</small>](https://jsbin.com/wuhiqun/edit?js,console){:target="_blank"}

#### Foreach

forEach() ejecuta la función callback una vez por cada elemento en el array:

calback es invocado con tres argumentos:

1. Valor actual del elemento
2. Indice del elemento (opcional)
3. El Array (opcional)

```js
const listaCompra = [
  'Patatas',
  'Manzanas',
  'Platanos',
  'Chocolate',
  'Limones'
  ];

function miCompra(producto,index,array){
  console.log(producto);
  console.log(index);
  console.log(array);
}

listaCompra.forEach(miCompra);
```

[<small><i class="fas fa-external-link-alt"></i> Play with it in JS Bin!</small>](https://jsbin.com/xukiher/edit?js,console){:target="_blank"}

Puedes simplificar el código de los loops foEach utlizando funciones flecha.

```js
let colors = ['red', 'green', 'blue']
colors.forEach(color => console.log(color))
// red
// green
// blue
```

### Otros métodos interesantes
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

[<small><i class="fas fa-external-link-alt"></i> Play with it in JS Bin!</small>](https://jsbin.com/boseqif/edit?js,console){:target="_blank"}
