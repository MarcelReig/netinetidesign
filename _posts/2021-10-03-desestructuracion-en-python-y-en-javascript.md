---
layout: post
title: Desestructuración en Python y en JavaScript
description: Desestructuración en Python y en JavaScript
comments: true
tags: javascript python
category: programacion
image: python-3.jpg
---

{:.lead.my-5}
### La desestructuración nos permite asignar las propiedades de un array en JavaScript o de una lista o en Python a variables individuales.

{:.lead.my-5}
### De hecho la desestructuración no se limita a listas también puedes desestructurar tuplas y cadenas.


<div class="alert alert-info" role="alert">
<p><i class="fas fa-sticky-note"></i> Nota:</p>
 <p>En Python a desestructurar también se le llama desempaquetar.</p>
</div>

## Desestructuración en Python

Python permite asignar más de una variable al mismo tiempo y en una sola línea de código. Solo necesitas añadir el mismo número de valores a cada lado de la asignación, los valores son asignados según el orden, el primero con el primero, el segundo con el segundo etc...  

```py
a, b = (1, 2)

print(a)

# Output: 1

print(b)

# Output: 2
```

Si intentas añadir más valores de los que hay en el iterable obtendrás un error: 

```py
a, b, c, d = (1, 2)

# ValueError: not enough values to unpack (expected 4, got 2)
```

### Desestructurar una lista en Python

Puedes desempaquetar una lista sin saber cuantos elementos contiene utilizando el asterisco `*`.

```py
el_primero, *el_resto = [1, 2, 3, 4, 5]

print(el_primero)

# Output: 1

print(el_resto)

# Output: [2, 3, 4, 5]
```

### Ignorar valores en la asignación al desestructurar

Puedes ingorar valores al desestructurar utilizando un guión bajo `_`.

```py
nombre, _, segundo_apellido = ['Alvaro', 'Reyes', 'Guerrero']

print(nombre)

# Output: Alvaro

print(segundo_apellido)

# Output: Guerrero
```

### Ignorar múltiples valores

Puedes ignorar múltiples valores con la siguiente sintaxis `*_`.

```py
a, *_ = [1, 2, 3, 4, 5]
print(a)

# Output: 1
```

Ignorar todos los valores menos el primero y el último.

```py
 a, *_, b = [1, 2, 3, 4, 5]
 print(a, b)

 # Output: 1 5
```
Obtener todos los valores intermedios pero ignorar el primer y el último valor.

```py
_, *contenido, _ = [1, 2, 3, 4, 5]
print(contenido)

# Output: [2, 3, 4]
```

## Desestructuración en JavaScript

```js
let [a, b] = [1, 2]

console.log(b)

// Output: 2
```

[Referencia](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
