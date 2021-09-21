---
layout: post
title: Diccionarios en Python
description: Diccionarios en Python
comments: true
tags: python
category: programacion
image: manatee.jpeg
---

<h3 class="lead my-5">
Los diccionarios en Python son una estructura de datos que permite almacenar contenido en forma <code>clave:valor</code>.</h3>

A diferencia de las listas, tuplas y strings que son indexados por su índice los diccionarios son indexados por claves.

La lista de pares `key:value` se crea entre llaves `{}` y cada par de  clave:valor se separa con comas.

Los diccionarios __son mutables__, su contenido se puede modificar.

Los diccionarios permiten guardar distintos tipos de datos: Strings, enteros, flotantes, booleanos, tuplas, listas y otros diccionarios.

Asignando el valor `{}` a una variable se crea un diccionario vacio, por ejemplo `users = {}` crea el diccionario vacio *users*.

Ejemplo de un dicccionario creado con llaves `{}` con varios pares de `key:value` ya creados: 

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

También es posible crear un diccionario con el método constructor de diccionarios `dict()`, introduciendo los pares `key:value` entre paréntesis `()`.

 Veamos un ejemplo del mismo diccionario anterior ahora creado con `dict()`: 

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

### Acceder a un valor de un diccionario de Python por su clave

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

### Accceder a elementos de lista dentro de un diccionario de Python

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

### Añadir nuevos pares `key:value` a un diccionario de Python

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

## Métodos de los Diccionarios de Python

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

`dict()` Método constructor de diccionarios. Aparte de las llaves `{}`, podemos crear diccionarios con el constructor `dict()`, introduciendo los pares `key:value` entre paréntesis `()`.

`items()` Retorna una vista de los pares `key:value` clave:valor de un diccionario.

```py
series = {'serie': 'Mr. Robot', 'director': 'Sam Esmail', 'año': 2015}

x = series.items()

print(x)

# Output:
'''
dict_items([('serie', 'Mr. Robot'),
 ('director', 'Sam Esmail'),
 ('año', 2015)])
'''
```

Puedes recorrer el diccionario utilizando `items()` con un iterable `for` para obtener un resultado más limpio: 

```py
series = {'serie': 'Mr. Robot', 'director': 'Sam Esmail', 'año': 2015}

for clave, valor in series.items():
    print(clave, valor)

# Output:
'''
serie Mr. Robot
director Sam Esmail
año 2015
''' 
```

`keys()` Retorna una vista de las claves de un diccionario.

`values()` Retorna una vista de los valores de un diccionario.

`clear()` Elimina todos los ítems de un diccionario.

`copy()` Retorna una copia del diccionario.

`pop()` Método para eliminar ítems de diccionario (también retorna valores).

`setdefault()` Método que retorna el valor de la clave si esta existe, si no, inserta la clave con su valor en el diccionario. setdefault() acepta dos parámetros: 
- la clave 
- el valor (opcional)

`update()` Actualiza el diccionario con los elementos de otro diccionario o desde un iterable de pares clave:valor.

## Eliminar ítems de un diccionario de Python

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

### Eliminar ítems con pop()

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

### Eliminar ítems con clear()

`clear()` Elimina todos los pares `key:value` de un diccionario.

## Diccionarios anidados en python

Un diccionario anidado es un diccionario dentro de otro.

```py
hackers = {
    "hacker_one": {
        "Name": "Elliot Alderson",
        "Age": 28,
    },
    "hacker_two": {
        "Name": "Richard Hendricks",
        "Age": 33,
    }
}

hacker_one_name = hackers["hacker_one"]["Name"]
hacker_two_name = hackers["hacker_two"]["Name"]
print(hacker_one_name)  # Output: Elliot Alderson
print(hacker_two_name)  # Output: Richard Hendricks
```

### Recorrer un diccionario anidado con un iterable `for`: 

```py
hackers = {
    "hacker_one": {
        "Name": "Elliot Alderson",
        "Age": 28,
    },
    "hacker_two": {
        "Name": "Richard Hendricks",
        "Age": 33,
    }
}

for hacker, data in hackers.items():
    print("{}: {}".format(hacker, data["Name"]))

# Output:
'''
hacker_one: Elliot Alderson
hacker_two: Richard Hendricks
'''
```
## Lista de diccionarios anidados en Python

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

### Acceder a elementos en una lista de diccionarios anidados

Para acceder a los elementos en una lista de diccionarios anidados utilizamos el índice `[]` en Python.

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

## Utilizar tuplas como claves de un diccionario de Python


<div class="alert alert-info" role="alert">
<p><i class="fas fa-sticky-note"></i> Nota:</p>
 <p>Solo se pueden utilizar elementos inmutables como claves de diccionario, por lo que solo las tuplas y no las listas se pueden utilizar como claves.</p>
</div>



