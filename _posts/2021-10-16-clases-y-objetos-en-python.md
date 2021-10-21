---
layout: post
title: Clases y Objetos en Python
description: Clases en Python
comments: true
tags: python
category: programacion
image: python-5.jpg
---

{:.lead.my-5}
### Podemos pensar en las Clases como en plantillas para crear Objetos.

Las clases en Python se definen con la palabra clave `class`.

Por convención el nombre de las clases va en mayúsculas y el nombre de las instancias en minúscula.

`self` es siempre el primer parámetro de las funciones de las clases.

`self` en Python es el equivalente a `this` en JavaScript.

Para accceder a los atributos de una instancia de una clase utilizamos la sintaxis `objeto.atributo`.

El método `__init__` es un método especial que Python utiliza para construir una instancia de la clase cuando creamos los objetos.

La sintaxis para crear objetos instancia de una clase es la siguiente:

`objeto = Clase()`, nombre objeto + `=` + nombre clase + parentesis `()` para argumentos.

En el siguiente ejemplo he creado la clase `Film` con los atributos `name`, `director`, `year` y `genre` para poder crear objetos instancia de de la clase `Film` y mostrar la información de varias películas por pantalla.

Para acceder a un atributo una instancia de la clase `Film` escibimos el nombre de la instancia + un punto `.` + el nombre del atributo: `film2.name`.

```py
class Film:

    def __init__(self, name, director, year, genre):
        self.name = name
        self.director = director
        self.year = year
        self.genre = genre


film1 = Film('Noche en la Tierra', 'Jim Jarmusch', '1991', 'Comedia')
film2 = Film('Akira', 'Katsuhiro Ôtomo', '1988', 'Ciencia ficción')

print(film1.year) # Output: 1991

print(film2.year) # Output: 1988
```

## Pintar por pantalla todos los atributos de un Objeto de Python

`film1` y `film2` son instancias de la clase `Film` cada una con sus propio atributos.

La sintaxis `object.__dict__` retorna un dicccionario con todos los nombres y atributos de un objeto.

```py
class Film:

    def __init__(self, name, director, year, genre):
        self.name = name
        self.director = director
        self.year = year
        self.genre = genre


film1 = Film('Noche en la Tierra', 'Jim Jarmusch', '1991', 'Comedia')
film2 = Film('Akira', 'Katsuhiro Ôtomo', '1988', 'Ciencia ficción')


print(film1.__dict__)

# Output:
'''{
  'name': 'Noche en la Tierra',
  'director': 'Jim Jarmusch',
  'year': '1991',
  'genre': 'Comedia'}
'''

print(film2.__dict__)

# Output: 
'''{
  'name': 'Akira',
  'director': 'Katsuhiro Ôtomo',
  'year': '1988',
  'genre': 'Ciencia ficción'}
'''
```

Si queremos obtener un diccionario limpio, sin llaves ni comillas, primero convertimos el objeto en un diccionario con `__dict__` y después obtenemos los ítems del diccionario con un `for` loop y el método `.items()` de los diccionarios. 

```py
class Film:

    def __init__(self, name, director, year, genre):
        self.name = name
        self.director = director
        self.year = year
        self.genre = genre


film1 = Film('Noche en la Tierra', 'Jim Jarmusch', '1991', 'Comedia')
film2 = Film('Akira', 'Katsuhiro Ôtomo', '1988', 'Ciencia ficción')


def film_dict(film):
    x = film.__dict__

    for clave, valor in x.items():
        print(clave.capitalize(), ':', valor)


film_dict(film1)
# Output: 
'''
Name : Noche en la Tierra
Director : Jim Jarmusch
Year : 1991
Genre : Comedia
'''

film_dict(film2)
# Output: 
'''
Name : Akira
Director : Katsuhiro Ôtomo
Year : 1988
Genre : Ciencia ficción
'''
```


- [Casses & Objects - Mike Dane](https://www.youtube.com/watch?v=6chvxajS3yc){:target="_blank"}

- [Classes and Objects - Python Simplified](https://www.youtube.com/watch?v=f0TrMH9s-VE){:target="_blank"}

- [Classes and Objects - Socratica](https://www.youtube.com/watch?v=apACNr7DC_s){:target="_blank"}

- [Clases y Objetos - Chio Code](https://www.youtube.com/watch?v=-E4O0mz-gGE){:target="_blank"}