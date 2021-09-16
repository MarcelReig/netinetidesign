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

### Métodos de los Diccionarios

`get()` Recibe una clave como parámetro y devuelve su valor. Si no lo encuentra, devuelve un objeto none.
Permite especificar un valor por defecto, que devolverá en caso de no encontrar la clave.

```py
hacker = {
    "Name": "Elliot Alderson",
    "Age": 28,
    "programming languages": ["Python", "Ruby"],
    "Tabs or Spaces": "Tabs"
}
 
hacker_name = hacker.get("Name")

print(hacker_name)

# Output: Elliot Alderson

print(hacker_name)
hacker_name = hacker.get("Car")

# Output: None

print(hacker_name)
hacker_name = hacker.get("Car", "Not a valid Key")

# Output: Not a valid Key
```

`dict()`

`zip()`

`items()`

`keys()`

`values()`

`clear()`

`copy()`

`fromkeys()`

`pop()`

`setdefault()`

`update()`

### Eliminar ítems de un diccionario

Para eliminar ítems de un diccionario podemos utilizar la palabra clave `del` o el método `pop()`.

Eliminar ítems con __del__:

La palabra clave del elimina un objeto. Como los pares `key:value` de los diccionarios son objetos podemos utilizar `del` para eliminarlos.

```py
hacker = {
    "Name": "Elliot Alderson",
    "Age": 28,
    "programming languages": ["Python", "Ruby"],
    "Tabs or Spaces": "Tabs"
}

del hacker["Name"]

print(hacker)

# Output: 
'''
{'Age': 28,
 'programming languages': ['Python', 'Ruby'],
 'Tabs or Spaces': 'Tabs'}
'''
```

Eliminar ítems con __pop()__:

El método `pop()` se puede utilizar para eliminar una clave y su valor asociado.
Un par `key:value` de un diccionario.

El método pop() acepta uno o dos parámetros:

- El nombre de la clave que quieres eliminar (obligatorio).
- El valor que debe retornar si no encuentra la clave (opcional).

```py
hacker = {
    "Name": "Elliot Alderson",
    "Age": 28,
    "programming languages": ["Python", "Ruby"],
    "Tabs or Spaces": "Tabs"
}
removed_item = hacker.pop("Name", "Item not found")

print(removed_item) # Output: Elliot Alderson

print(hacker)

# Output: 
'''
{'Age': 28,
 'programming languages': ['Python',
  'Ruby'], 'Tabs or Spaces': 'Tabs'}
'''
```

### Diccionarios anidados

Un diccionario anidado es un diccionario dentro de otro.

```py
hackers = {
    1: {
        "Name": "Elliot Alderson",
        "Age": 28,
    },
    2: {
        "Name": "Richard Hendricks",
        "Age": 33,
    }
}
print(hackers[1]["Name"])
print(hackers[1]["Age"])
print(hackers[2]["Name"])
print(hackers[2]["Age"]
# Output:
'''
Elliot Alderson
28
Richard Hendricks
33
'''
```
### Trabajando con una lista de diccionarios anidados

```py
hackers = [
    {
        'hacker_one': {
            "Name": "Elliot Alderson",
            "Age": 28,
            "programming languages": ["Python", "Ruby"],
            "Tabs or Spaces": "Tabs"
        }
    },
    {
        'hacker_two': {
            "Name": "Richard Hendricks",
            "Age": 33,
            "programming languages": ["C", "Ruby", "Java"],
            "Tabs or Spaces": "Tabs"
        }
    }
]

print(hackers)

# Output: 
'''
[{'hacker_one':
{'Name': 'Elliot Alderson', 
'Age': 28,
 'programming languages': ['Python', 'Ruby'], 
 'Tabs or Spaces': 'Tabs'}},
{'hacker_two': 
{'Name': 'Richard Hendricks', 
'Age': 33,
 'programming languages': ['C', 'Ruby', 'Java'],
  'Tabs or Spaces': 'Tabs'}}]
'''
```

### Acceder a elementos en la lista de diccionarios anidados

Para acceder a elementos en la lista de diccionarios anidados utilizamos el índice `[]` en Python.

```py
hackers = [
    {
        'hacker_one': {
            "Name": "Elliot Alderson",
            "Age": 28,
            "programming languages": ["Python", "Ruby"],
            "Tabs or Spaces": "Tabs"
        }
    },
    {
        'hacker_two': {
            "Name": "Richard Hendricks",
            "Age": 33,
            "programming languages": ["C", "Ruby", "Java"],
            "Tabs or Spaces": "Tabs"
        }
    }
]

hacker_two = hackers[1].get("hacker_two", "Hacker not found")

print(list(hacker_two.values())[0])
print(list(hacker_two.values())[1])
print(list(hacker_two.values())[2])

# Output: 
'''
Richard Hendricks
33
['C', 'Ruby', 'Java']
'''
```





