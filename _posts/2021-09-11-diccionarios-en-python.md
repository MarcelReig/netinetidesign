---
layout: post
title: Diccionarios en Python
description: Diccionarios en Python
comments: true
tags: python
category: programacion
image: manatee.jpeg
---

Los diccionarios en Python son una estructura de datos que permite almacenar contenido en forma `key:value` clave:valor.

La lista de pares `key:value` se crea entre paréntesis `{}` y cada par de  `key:value` se separa con una coma.

Los diccionarios son mutables, su contenido se puede modificar.

Los diccionarios permiten guardar distintos tipos de datos: Strings, enteros, flotantes, booleanos, tuplas, listas y otros diccionarios.

```py
hacker = {
    "Name": "Elliot Alderson",
    "Age": 28,
    "programming languages": ["Python", "Ruby"],
    "Tabs or Spaces": "Tabs"
}

print(hacker)

# Output:
'''{'Name': 'Elliot Alderson',
 'Age': 28,
  'programming languages': ['Python', 'Ruby'],
  'Tabs or Spaces': 'Tabs'}
'''
```
Acceder a un valor por su clave:

```py
hacker = {
    "Name": "Elliot Alderson",
    "Age": 28,
    "programming languages": ["Python", "Ruby"],
    "Tabs or Spaces": "Tabs"
}

languages = hacker["programming languages"]

print(languages)

# Output: ['Python', 'Ruby']
```

Accceder a elementos de lista dentro de un diccionario:

```py
hacker = {
    "Name": "Elliot Alderson",
    "Age": 28,
    "programming languages": ["Python", "Ruby"],
    "Tabs or Spaces": "Tabs"
}

print(hacker['programming languages'][0])

# Output: Python
```

Para añadir añadir un nuevos pares de `key:value` a un diccionario basta con asignarles un valor:

```py
hacker = {
    "Name": "Elliot Alderson",
    "Age": 28,
    "programming languages": ["Python", "Ruby"],
    "Tabs or Spaces": "Tabs"
}

hacker['Pets'] = ["Fish", "Dog"]

hacker['Pets names'] = ["Querty", "Flipper"]

print(hacker)

# Output: 
'''{'Name': 'Elliot Alderson',
'Age': 28,
'programming languages': ['Python', 'Ruby'],
'Tabs or Spaces': 'Tabs',
'Pets': ['Fish', 'Dog'],
'Pets names': ['Querty', 'Flipper']}
'''

```