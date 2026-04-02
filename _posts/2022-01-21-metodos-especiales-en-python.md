---
layout: post
title: Métodos especiales en Python
description: Métodos especiales en Python
comments: true
tags: python
category: programacion
image: magic.jpg
---

{:.lead.my-5}
### Métodos especiales, también conocidos como métodos Dunder o métodos Mágicos. Se utilizan para emular el comportamiento de las funciones integradas.

{:.lead.my-5}
### Sus nombres empiezan y terminan en `__` (doble guión bajo). Por ejemplo `__init__`. Normalmente no son invocados directamente por el programador: cuando haces una suma `2 + 2` Python invoca `__add__` internamente.

## __init__ y __repr__

`__init__` inicializa un objeto cuando se crea una instancia de una clase. `__repr__` define la representación técnica del objeto, útil para depuración.

```python
class Car:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def __repr__(self):
        return f'Car({self.brand!r}, {self.model!r}, {self.year!r})'


my_car = Car('Toyota', 'Corolla', 2023)

print(repr(my_car))

# Output: Car('Toyota', 'Corolla', 2023)
```

## __str__ vs __repr__

`__str__` devuelve una representación legible para el usuario. `__repr__` devuelve una representación técnica no ambigua para el desarrollador.

```python
class Car:
    def __init__(self, brand, model, year):
        self.brand = brand
        self.model = model
        self.year = year

    def __str__(self):
        return f'{self.brand} {self.model} ({self.year})'

    def __repr__(self):
        return f'Car({self.brand!r}, {self.model!r}, {self.year!r})'


my_car = Car('Toyota', 'Corolla', 2023)

print(str(my_car))   # Toyota Corolla (2023)
print(repr(my_car))  # Car('Toyota', 'Corolla', 2023)
```

La regla general: `__str__` es para el usuario final, `__repr__` es para el desarrollador.

## Métodos de comparación

Permiten usar los operadores de comparación (`==`, `<`, `>`, etc.) con tus propias clases.

| Método | Operador |
|--------|----------|
| `__eq__` | `==` |
| `__ne__` | `!=` |
| `__lt__` | `<` |
| `__gt__` | `>` |
| `__le__` | `<=` |
| `__ge__` | `>=` |

```python
class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def __eq__(self, other):
        return self.price == other.price

    def __lt__(self, other):
        return self.price < other.price

    def __repr__(self):
        return f'{self.name} ({self.price}€)'


p1 = Product('Camiseta', 25)
p2 = Product('Pantalón', 50)

print(p1 == p2)  # False
print(p1 < p2)   # True
print(p1 > p2)   # False

products = [p2, p1]
print(sorted(products))

# Output: [Camiseta (25€), Pantalón (50€)]
```

<div class="alert alert-info" role="alert">
<p><i class="fas fa-sticky-note"></i> Nota:</p>
<p>Al definir <code>__lt__</code>, Python puede usar <code>sorted()</code> y <code>min()</code> / <code>max()</code> sobre objetos de tu clase.</p>
</div>

## Métodos aritméticos

Permiten usar los operadores matemáticos con tus propias clases.

| Método | Operador |
|--------|----------|
| `__add__` | `+` |
| `__sub__` | `-` |
| `__mul__` | `*` |
| `__truediv__` | `/` |
| `__floordiv__` | `//` |
| `__mod__` | `%` |
| `__pow__` | `**` |

```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)

    def __sub__(self, other):
        return Vector(self.x - other.x, self.y - other.y)

    def __mul__(self, scalar):
        return Vector(self.x * scalar, self.y * scalar)

    def __repr__(self):
        return f'Vector({self.x}, {self.y})'


v1 = Vector(1, 2)
v2 = Vector(3, 4)

print(v1 + v2)   # Vector(4, 6)
print(v2 - v1)   # Vector(2, 2)
print(v1 * 3)    # Vector(3, 6)
```

## __len__

Permite usar la función integrada `len()` con tus propias clases.

```python
class Playlist:
    def __init__(self):
        self.songs = []

    def add(self, song):
        self.songs.append(song)

    def __len__(self):
        return len(self.songs)


playlist = Playlist()
playlist.add('Bohemian Rhapsody')
playlist.add('Stairway to Heaven')
playlist.add('Hotel California')

print(len(playlist))

# Output: 3
```

## __contains__

Habilita el operador `in` en tus clases.

```python
class Playlist:
    def __init__(self):
        self.songs = []

    def add(self, song):
        self.songs.append(song)

    def __contains__(self, song):
        return song in self.songs

    def __len__(self):
        return len(self.songs)


playlist = Playlist()
playlist.add('Bohemian Rhapsody')
playlist.add('Stairway to Heaven')

print('Stairway to Heaven' in playlist)  # True
print('Wonderwall' in playlist)          # False
```

## __call__

Hace que un objeto sea invocable como si fuera una función.

```python
class Multiplier:
    def __init__(self, factor):
        self.factor = factor

    def __call__(self, number):
        return number * self.factor


double = Multiplier(2)
triple = Multiplier(3)

print(double(5))   # 10
print(triple(5))   # 15
```

Es útil cuando necesitas un objeto que mantenga estado entre llamadas pero que se comporte como una función.

## __new__ y __del__

`__new__` crea el objeto antes de que `__init__` lo inicialice. Raramente se usa directamente. `__del__` se llama cuando el objeto es eliminado por el recolector de basura, tampoco es común.

### Links

[Special Methods  Socratica Youtube 📹](https://www.youtube.com/watch?v=IkWrlRei0uA&t=488s){:target="_blank"}

[Corey Schafer Youtube 📹](https://www.youtube.com/watch?v=3ohzBxoFHAY){:target="_blank"}

[Magic Methods](https://rszalski.github.io/magicmethods/){:target="_blank"}

[Mathspp](https://mathspp.com/blog/pydonts/dunder-methods){:target="_blank"}
