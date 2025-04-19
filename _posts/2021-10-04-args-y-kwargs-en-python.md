---
layout: post
title: args y kwargs en Python
description: args y kwargs en Python
comments: true
tags: python
category: programacion
image: python-3.jpg
---

{:.lead.my-5}
### Los `*args` y `**kwargs` en Python nos permiten pasar un número variable de argumentos a una función.

{:.lead.mb-5}
### En una función típica tenemos el nombre de la función y unos parámetros, en la llamada a la función se espera que haya el mismo número de argumentos que de parámetros, si no es así, se producirá  un error.

<div class="alert alert-info" role="alert">
<p><i class="fas fa-sticky-note"></i> Nota:</p>
 <p>Al definir una función los valores que se reciben se denominan <b>parámetros</b>, pero durante la llamada los valores que se envían se denominan <b>argumentos</b>.</p>
</div>

## Función básica

En una función básica se reciben el mismo número de parámetros que de argumentos y todo funciona como se espera.

```py
def suma(x, y, z):
    print("Suma:", x+y+z)


suma(10, 5, 2)

# Return: 17
```
## Ejemplo de Error

Si se envía un número deferente de argumentos que de parámetros se produce un error.

```py
def sumar_numeros(x, y, z):
    print("Suma:", x+y+z)

    
sumar_numeros(1, 2, 3, 4, 5, 6, 7)

# TypeError: suma() takes 3 positional arguments but 7 were given
```
## Función con `*args`

El simbolo asterisco `*` nos permite hacer la llamada a la función sin importar el número de argumentos. Los argumentos enviados se almacenan en una tupla.

El nombre del parámetro `*args` no importa pudes utilizar args o lo que quieras, en el ejemplo he utilizado `*num` y funciona exactamente igual, lo que importa es el asterisco.

```py
def sumar_numeros(*num):
    suma = 0

    for n in num:
        suma = suma + n

    print(("Suma:", suma))


sumar_numeros(1, 2, 3)
# Output: ('Suma:', 6)

sumar_numeros(1, 2, 3, 4, 5, 6, 7)
# Output: ('Suma:', 28)
```

## Función con `**kwargs`

Se utiliza para trabajar con argumentos con palabras clave. Los argumentos enviados se almacenan en un diccionario.

De nuevo, el nombre `**kwargs` es una convención, no una regla puedes llamarlos como quieras, lo importante son los dos asteriscos.

```py
def empleado(**kwargs):
    for key, value in kwargs.items():
        print(f"{key} : {value}")


empleado(name='Marcel', role='Python Hacker', salary='50k')

# Output: 
'''
name : Marcel
role : Python Hacker
salary : 50k
'''
```

## Función que combina parámetros normales con `*args` y `**kwargs`

No hay ningún problema en combinar distintos tipos de parámetro en una función.

```py
def timetable(time_shedule, *args, **kwargs):
    print(f"Hola {' '.join(args)}, Tus clases serán en horario {time_shedule}.")

    if kwargs:
        print('Los días de estudio serán los siguientes:')
        for key, val in kwargs.items():
            print(f'{key} -> {val}')


timetable('Nocturno',
         'Marcel', 'Reig',
         Martes='Programación Orientada a Objetos',
         Miércoles='Algoritmos',
         Jueves='Base de datos')

# Output: 
'''
Hola Marcel Reig, Tus clases serán en horario Nocturno.
Los días de estudio serán los siguientes:
Martes -> Programación Orientada a Objetos
Miércoles -> Algoritmos
Jueves -> Base de datos
'''
```