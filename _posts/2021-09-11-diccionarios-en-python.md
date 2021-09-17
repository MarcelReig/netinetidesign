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

A diferencia de las listas, tuplas y strings que son indexados por su índice los diccionarios son indexados por claves.

La lista de pares `key:value` se crea entre llaves `{}` y cada par de  clave:valor se separa con comas.

Los diccionarios __son mutables__, su contenido se puede modificar.

Los diccionarios permiten guardar distintos tipos de datos: Strings, enteros, flotantes, booleanos, tuplas, listas y otros diccionarios.

Asignando el valor `{}` a una variable creas un diccionario vacio.

Los diccionarios también se pueden crear con el constructor `dict()`, introduciendo los pares `key:value` entre paréntesis.

Veamos un ejemplo envolviendo los pares clave:valor entre llaves `{}`: 

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

hacker_pets = hacker.get("Pets")

print(hacker_pets)

# Output: None

hacker_pets = hacker.get("Pets", "Not a valid Key")

print(hacker_pets)

# Output: Not a valid Key
```

`dict()` Método constructor de diccionarios. Veamos un ejemplo: 

```py
hacker = dict([
    ("Name", "Elliot Alderson"),
    ("Age", 28),
    ("programming languages", ["Python", "Ruby"]),
    ("Tabs or Spaces", "Tabs")
])
print(hacker)

# Output:
'''
{'Name': 'Elliot Alderson',
'Age': 28,
'programming languages': ['Python', 'Ruby'],
'Tabs or Spaces': 'Tabs'}
'''
```

`items()` Retorna una vista de los pares `key:value` clave:valor de un diccionario.

`keys()` Retorna una vista de las claves de un diccionario.

`values()` Retorna una vista de los valores de un diccionario.

`clear()` Elimina todos los ítems de un diccionario.

`copy()` Retorna una copia del diccionario.

`pop()` Método para eliminar ítems de diccionario (también retorna valores).

`setdefault()` Método que retorna el valor de la clave si esta existe, si no, inserta la clave con su valor en el diccionario. setdefault() acepta dos parámetros: 
- la clave 
- el valor (opcional)

`update()` Actualiza el diccionario con los elementos de otro diccionario o desde un iterable de pares clave:valor.

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

Eliminar ítems con __clear()__

`clear()` Elimina todos los pares `key:value` de un diccionario.

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





