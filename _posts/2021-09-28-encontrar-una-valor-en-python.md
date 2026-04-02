---
layout: post
title: Buscar valores en Python
description: Buscar valores en Python
comments: true
tags: python
category: programacion
image: python-3.jpg
---

{:.lead.my-5}
### Python ofrece varias formas de buscar valores en strings, listas y diccionarios. Aquí tienes las más habituales.

## El operador in

La forma más directa. Devuelve un booleano.

```py
sentence = 'Todos esos momentos se perderán en el tiempo, como lágrimas en la lluvia.'
word = 'tiempo'

if word in sentence:
    print('La palabra está en la frase')

# Output: La palabra está en la frase
```

También funciona con listas:

```py
nums = [34, 12, 89, 345, 92, 7]

if 12 in nums:
    print('El número está en la lista')

# Output: El número está en la lista
```

## index() — obtener la posición de un elemento

`index()` devuelve el índice de la primera aparición del valor. Si el valor no existe lanza una excepción `ValueError`.

```py
fruits = ['manzana', 'pera', 'uva', 'manzana']

print(fruits.index('uva'))

# Output: 2
```

También funciona con strings:

```py
word = 'javascript'

print(word.index('script'))

# Output: 4
```

## find() — buscar en strings sin excepciones

`find()` funciona como `index()` pero en lugar de lanzar una excepción devuelve `-1` si el valor no se encuentra. Solo está disponible para strings.

```py
url = 'https://www.netinetidesign.com'

print(url.find('www'))    # Output: 8
print(url.find('ftp'))    # Output: -1
```

## dict.get() — buscar en diccionarios

Para diccionarios, `get()` es más seguro que acceder directamente por clave porque no lanza excepción si la clave no existe, sino que devuelve `None` o el valor por defecto que le indiques.

```py
user = {'name': 'Marcel', 'role': 'developer'}

print(user.get('name'))           # Output: Marcel
print(user.get('age'))            # Output: None
print(user.get('age', 'unknown')) # Output: unknown
```

## filter() — buscar elementos que cumplen una condición

`filter()` aplica una función a cada elemento de un iterable y devuelve solo los que cumplen la condición.

```py
nums = [1, 2, 3, 4, 5, 6, 7, 8]

evens = list(filter(lambda n: n % 2 == 0, nums))

print(evens)

# Output: [2, 4, 6, 8]
```