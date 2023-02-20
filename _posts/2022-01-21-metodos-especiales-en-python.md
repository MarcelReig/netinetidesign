---
layout: post
title: Métodos especiales en Python
description: Métodos especiales en Python
comments: true
tags: javascript python
category: programacion
image: magic.jpg
---

{:.lead.my-5}
### Métodos especiales, también conocidos como métodos Dunder o métodos Mágicos. Se utilizan para emular el comportamiento de las funciones integradas.


{:.lead.my-5}
### Estos métodos tienen un significado particular para el intérprete de Python. Sus nombres empiezan y terminan en __ (doble guión bajo). Por ejemplo __init__.

{:.lead.my-5}
### Normalmente estos métodos no son invocados directamente por el programador. Por ejemplo cuando haces una simple suma `2 + 2` se está invocando al método `__add__` internamente.

## Métodos de iniciación y constructores

`__init__` Inicializa un objeto


Crea un nuevo objeto cuando se llama a la instancia de una clase.

```python
class Car(object):
    def __init__(self):
        ...
    def __repr__(self):
        ...
```

`__new__`  Crea un objeto

`__del__` Elimina un objeto

## Métodos mágicos de comparación

`__lt__`  a < b

`__gt__`  a > b

`__le__`  a <= b

`__ge__`  a >= b

`__ne__`  a != b

`__eq__`  a == b

## Métodos mágicos para matemáticas

`__add__` obj + ...

`__sub__` obj - ...

`__mul__` obj * ...

`__floordiv__` obj //

`__truediv__` obj /

`__mod__` obj %

`__pow__` obj ** ...


## Otros Métodos mágicos

`__str__` Pretty print object. Devuelve una cadena de carácteres. Representación Legible para usuarios.

`__repr__` Devuelve una cadena de carácteres. Representación no ambigua útil para desarrolladores.

`__len__` Devuelve la cantidad de elementos que tiene una lista.


### Links

[Special Methods  Socratica Youtube 📹](https://www.youtube.com/watch?v=IkWrlRei0uA&t=488s){:target="_blank"}

[Corey Schafer Youtube 📹](https://www.youtube.com/watch?v=3ohzBxoFHAY){:target="_blank"}

[Magic Methods](https://rszalski.github.io/magicmethods/){:target="_blank"}

[Mathspp](https://mathspp.com/blog/pydonts/dunder-methods){:target="_blank"}

