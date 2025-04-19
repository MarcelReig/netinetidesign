---
layout: post
title: Get y Set en Python
description: Get y Set en Python
comments: true
tags: python
category: programacion
image: python-3.jpg
---


Sintaxis para Get (Obtener el valor de un atributo): `objeto.parámetro`

Sintaxis para el Set (Establecer el valor de un atributo): `objeto.parámetro = valor`


```py
class Villain:
    def __init__(self, name, quote):
        self.name = name
        self.quote = quote

    def villain_says(self):
        return f'{self.name} dice {self.quote}'


joker = Villain('Joker', 'Siempre hay que tener un as en la manga')

print(joker.villain_says())  # Getter

# Output: Joker dice Siempre hay que tener un as en la manga

joker.quote = 'Aprendí que todo tiene su tiempo y su lugar'  # Setter

print(joker.villain_says())  # Getter

# Output: Joker dice Aprendí que todo tiene su tiempo y su lugar
```

## Modificadores de acceso

En Java o C++, no se permite accceder ni modificar datos de una clase sin antes haber creado una función especifica para ello.

En Java o C++ tienen las palabras clave `public`, `private` y `protected` conocidas como modificadores de acceso, para controlar el acceso a los métodos de la clase.

Sin embargo Python no tiene modificadores de acceso y por defecto todos los métodos y variables son accesibles desde fuera, esto puede hacer que cometamos errores.

En cualquier caso Python tiene una convención para imitar los modificadores de acceso.
## Propiedades y decoradores

En el ejemplo anterior hemos visto como accededer, añadir y modificar atributos de clase con la sintaxis `.` para get y `=` para setter, pero esta no es la forma más segura de hacerlo y podría llevarnos a cometer errores al crecer el programa en complegidad.

Aquí es donde entran los conceptos de __encapsulación__ y __decoradores__ de Python.

La __encapsulación__ de manera muy resumida es exponer solo los atributos de clase que el usuario necesita. De esta manera evitamos sobreescibir algún parámetro por error y romper la aplicación.

En Java se utiliza las palabras reservadas `public` o `private` para definir si un elemento puede ser utilizado o no fuera de la clase.

En Python no existen modificadores de clase y todos los elementos son públicos por defecto, pero la privacidad se pueden simular con @property y setter.

Es convención en Python utilizar un guión bajo delante del nombre del atributo cuando creamos atributos protegidos `_protectedMember` y dos guiones bajos delante de atributos privados `__privateMember`.

El guión bajo no hace nada en si mismo, es solo una convención para dejar claro que estas creando un atributo protegido, tanto para ti como para otros desarrolladores que puedan leer tu código en el futuro.

El doble guión bajo si que afecta al interprete de Python, al utilizar doble guión bajo, Python reescribe el nombre de la variable.

Las variables nombradas con doble guión bajo no son acccesibles desde fuera de la clase o por lo menos e forma directa.

Python renombra las variables con dos guiones bajos a nombre de la clase + guión bajo + variable protegida `_class__protectedMember`. Por lo que que las variables privadas siguen siendo accesibles pero tienes que ser mucho más explícito.

## property()

property() es una función integrada en Python que permite interceptar la lectura, escritura y borrado de atributos.

Para invocar la función `property()` utilizamos el decorador `@property`.

El decorador @property nos permite utilizar un método como atributo.

Aclarar que un método es una función dentro de una clase.

Al utilizar @property ya no se permite acceder ni cambiar el valor del atributo al vuelo desde fuera de la clase con la sintaxis del punto para acceder y la sintaxis de asignación par asignar nuevos valores.

Si quieres modificar un método o instancia de variable de un @property desde fuera de la clase hay que crear un `setter` para exponerlo.

¿Por qué crear un @property si lo vamos a exponer igualmente con setter?

Porque con @property y setter podemos crear ciertas normas o crear una validación.

En el siguiente ejemplo he creado dos `@property` para los dos atributos de la clase `Villain`. Sin embargo he establecido el atributo `name` como protegido y he expuesto el atributo `quote` con un `setter`, por lo que permite cambiar la frase del villano pero no el nombre.

```py
class Villain:

    def __init__(self, name, quote):
        self._name = name
        self._quote = quote

    def villain_says(self):
        return f'{self._name} dice {self._quote}'

    @property
    def name(self):
        return self._name

    @property
    def quote(self):
        return self._quote

    @quote.setter
    def quote(self, quote):
        self._quote = quote


joker = Villain('Joker', 'Siempre hay que tener un as en la manga')

print(joker.villain_says())  # Getter

# Output: Joker dice Siempre hay que tener un as en la manga

joker.quote = '¡Esa fea cabeza tuya tiene cerebro!'

print(joker.villain_says())  # Getter

# Output: Joker dice ¡Esa fea cabeza tuya tiene cerebro!
```

## Público, Privado y Protegido

__¿Cuándo hago un atributo público?__

Si lo va a utilizar alguien fuera de la clase se hace público.

Por defecto todos los métodos y variables son públicos en Python.

__¿Cuándo hago un atributo protegido?__

Si lo va a utilizar alguien fuera de la clase, pero quieres establecer unas reglas de modificación, utiliza un @property con un setter para protegerlo.

A los atributos protegidos se les pone un guión bajo delante.

__¿Cuándo lo hago privado?__

Si el atributo de la clase no lo tiene que utilizar nadie fuera de la clase, se hace privado con @property.

A los atributos privados se les pone doble guión bajo delante.
