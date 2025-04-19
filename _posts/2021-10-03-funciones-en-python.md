---
layout: post
title: Funciones en Python
description: Funciones en Python
comments: true
tags: python
category: programacion
image: python-3.jpg
---

{:.lead.mt-5}
### Las funciones nos permiten reutilizar bloques de código en diferentes partes de nuestra aplicación.

{:.lead.mb-5}
### Las funciones se crean con la palabra clave `def` seguida por el nombre de la función y paréntesis `my_func()` entre los paréntesis van los parámetros de la función y después definimos el contenido de la función que irá en un bloque de código indentado. Para ejecutar la función solo hay y que escribir el nombre de la función con sus parámetros si es que los tiene.

## Ejemplo de función

Los paréntesis son obligatorios, los parámetros son opcionales, no todas las funciones tienen parámetros.

```py
def full_name(first, last):
    print(f'{first} {last}')

full_name('Marcel', 'Reig')

# Output: Marcel Reig
```

Ejemplo de una función con un condicional.

```py
def user_auth(email, password):
    if email == 'marcelreig@gmail.com' and password == 'admin123':
        print('Usuario autentificado')
    else:
        print('Usuario o contraseña incorrecto')


user_auth('marcelreig@gmail.com', 'admin123')
# Output: Usuario autentificado
user_auth('marcelreig@gmail.com', 'menorca')
# Output: Usuario o contraseña incorrecto
```

Ejemplo de función sin parámetros.

```py
def counter():
    for num in range(1, 4):
        print(num)

        
counter()

# Output: 
'''
1
2
3
'''
```

## Funciones anidadas en Python

Cuando una función solo va a ser utilizada dentro de una función podemos crearla dentro de la función en caso contrario deberíamos crearla fuera.

```py
def greeting(first, last):
    def full_name():
        return f'{first} {last}'

    print(f'Hola {full_name()}!')


greeting('Marcel', 'Reig')

# Output: Hola Marcel Reig!
```

## Parámetros por defecto

Python nos permite definir parámetros por defecto con el operador de asignación `=`. Si añadimos un parámetro el valor por defecto se sobreescribirá con el nuevo valor.

```py
def greeting(name='John'):
    print(f'Hello, {name}!')


greeting()
# Output: Hello, John! 
greeting('Marcel')
# Output: Hello, Marcel!
```