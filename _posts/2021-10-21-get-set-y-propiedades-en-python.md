---
layout: post
title: Get y Set en Python
description: Get y Set en Python
comments: true
tags: python
category: programacion
image: joker.jpg
---

{:.lead.my-5}
### En otros lenguajes de programación como en Java no se permite accceder ni modificar datos de una clase sin antes haber creado una función especifica para ello. Python si que lo permite y esto puede hacer que cambiemos el valor de un atributo sin querer y se produzcan errores en nuestra aplicación.


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

## Python Properties y Decorators

En el ejemplo anterior hemos visto como accededer, añadir y modificar atributos de clase. Pero la forma en la que lo hemos hecho, (directamente desde fuera de la clase con la sintaxis `.` para get y la sintaxis `=` para setter) podría no ser la forma más segura y romper el código en el futuro.

Aquí es donde entran los conceptos de __encapsulación__ y __decoradores__ de Python.

La __encapsulación__ de manera muy resumida es exponer solo los atributos de clase que el usuario necesita.

Es convención en Python utilizar un guión bajo delante del nombre del atributo cuando creamos atributos protegidos. No es que el guión bajo haga nada, es convención para saber que estas creando un atributo privado. Si no creas una simulación de privacidad al interprete de Python le dará igual que lleve guión bajo.

En Java se utiliza las palabras reservadas `public` o `private` para definir si un elemento puedes ser utilizado o no fuera de la clase.

En Python no existen elementos públicos o privados (todos son públicos) pero se pueden simular.

Al utilizar `@property` no se permite cambiar el valor del atributo al vuelo desde fuera de la clase.

property() es una función integrada en Python que permite interceptar la lectura, escritura y borrado de atributos, para invocar la función `property()` utilizamos el decorador `@property`.

Si quieres que se pueda modificar desde fuera de la clase el atributo de un `@property` hay que crear un `setter` para exponerlo.

¿Por qué crear un @property si lo vamos a exponer igualmente con setter?

Porque con setter podemos crear ciertas normas.

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
