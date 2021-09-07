---
layout: post
title: Listas y Tuplas en Python
description: Listas y Tuplas en Python
comments: true
tags: python
category: programacion
image: listas-tuplas-python.jpg
---

## Listas

Una lista es una secuencia ordenada de elementos, las listas no son inmutables, podemos añadir, eliminar, mover y cambiar items de lista a nuestro antojo.
Las listas se crean añadiendo valores separados por comas entre `[ ]` corchetes.

```py
helados = ['chocolate', 'limón', 'mango']
print(helados)
# Output: ['chocolate', 'limón', 'mango']

helados.insert(1, 'vainilla')

print(helados)
# Output: ['chocolate', 'vainilla', 'limón', 'mango']

helados.append('pistacho')

print(helados)
# Output:
# ['chocolate', 'vainilla', 'limón', 'mango', 'pistacho']
```

Podemos acceder a los valores de lista por su índice igual que en las cadenas.

```py
helados = ['chocolate', 'limón', 'mango']
print(helados[2])
# Output: mango
```

Si no te gusta el mango siempre puedes cambiarlo por fresas silvestres asignándole otro valor a través de su índice.

```py
helados = ['chocolate', 'limón', 'mango']
helados[2] = 'fresas silvestres'
print(helados)
# Output: ['chocolate', 'limón', 'fresas silvestres']
```

También puedes utilizar la palabra clave `del` para eliminar elementos de lista.

```py
helados = ['chocolate', 'limón', 'mango']
del helados[2]
print(helados) # Output: ['chocolate', 'limón']
```

Python nos permite crear listas de listas o listas anidadas.

```py
nested_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

print(nested_list[0][1])  # Output: 2

print(nested_list[1][-1])  # Output: 6
```

Para acceder al último elemento de la lista utilizamos el indice negativo  `[-1]`.

```py
helados = ['chocolate', 'limón', 'mango']
print(helados[-1])  # Output: mango
```

Para saber cuantos elementos tiene una lista utilizamos la función predefinida `len`.

```py
helados = ['chocolate', 'limón', 'mango']
print(len(helados))  # Output: 3
```

__Métodos de las listas__

`append()`

`clear()`

`extend()`

`count()`

`index()` Utilizamos este método para saber en que índice se encuentra un elemento en una lista.
```py
helados = ['chocolate', 'limón', 'mango']
print(helados.index('limón'))  # Output: 1
```

`insert()`

`pop()` Elimina el último elemento de la lista, pero no se limita a eso, también lo retorna por lo que podemos guardarlo en una variable.

```py
helados = ['chocolate', 'limón', 'mango']
ultimo_helado = helados.pop()
print(ultimo_helado) # Output: mango
print(helados) # Output: ['chocolate', 'limón']
```

`remove()` Si no te gusta el mango puedes utilizar este método para eliminarlo de la lista.

```py
helados = ['chocolate', 'limón', 'mango']
helados.remove('mango')
print(helados) # Output: ['chocolate', 'limón']
```

`sort()` Ordena los ítems de lista alfabéticamente.

```py
helados = ['café', 'straciatella', 'avellana']
helados.sort()
print(helados)
# Output:  ['avellana', 'café', 'straciatella']
```

`reverse()` Invierte los elementos de la lista original.

Combinando los métodos `sort()` y `reverse()` podemos ordenar una lista de Z a A.

```py
helados = ['café', 'straciatella', 'avellana']

helados.sort(reverse=True)

print(helados)
# Output:  ['straciatella', 'café', 'avellana']
```

## Tuplas

Las tuplas son una secuencia de items ordenada, igual que las listas, la diferencia es que las tuplas son inmutables.

Las tuplas una vez creadas no se pueden modificar.

Las tuplas se definen con parentesis `()` mientras que las listas se definen con corchetes `[]`. 

```py
inmutable_list = (36, 'bizcocho', 4+7)

print(inmutable_list)

# Output: (36, 'bizcocho', 11)
```