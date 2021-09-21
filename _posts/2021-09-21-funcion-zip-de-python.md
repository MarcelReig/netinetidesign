---
layout: post
title: Función zip de Python
description: Función zip de Python
comments: true
tags: python
category: programacion
image: python-zip-function.jpg
---

La función `zip()`toma como argumentos dos o más objetos iterables.
El resultado de pasar dos listas a `zip()` será una tupla en la que cada uno de sus elementos contendrá los valores de la primera y segunda lista fusionados en el orden que ocupaban los objetos iterables originales (el primero con el primero, el segundo con el segundo...).

<div class="alert alert-info" role="alert">
<p><i class="fas fa-sticky-note"></i> Nota:</p>
 <p>Si los iteradores de entrada tienen diferente longitud, la función zip se para cuando termina el iterador más corto, el resto de elementos serán ignorados.</p>
</div>

### Utilizar la función `zip()` para fusionar tres listas en tres tuplas de Python

```py
animal = ['Rana', 'Mono', 'Tortuga']

longevidad = [3, 25, 180]

genero = ['Anfibio', 'Primate', 'Reptil']

animales = zip(animal, longevidad, genero)

for i in animales:
    print(i)

# Output: 
'''
('Rana', 3, 'Anfibio')
('Mono', 25, 'Primate')
('Tortuga', 180, 'Reptil')
'''
```

En este otro ejemplo no mostraremos las tuplas completas, solo su contenido: 
  
```py
series = ['Westworld', 'Humans', 'Devs']
directed_by = ['Jonathan Nolan', 'Sam Donovan', 'Alex Garland']
date = ['2016', '2015', '2020']

for a, b, c in zip(series, directed_by, date):
    print(f' Serie: {a} \n dirigida por: {b} \n estreno: {c}')

# Output: 
'''
 Serie: Westworld 
 dirigida por: Jonathan Nolan 
 estreno: 2016
 Serie: Humans 
 dirigida por: Sam Donovan 
 estreno: 2015
 Serie: Devs 
 dirigida por: Alex Garland 
 estreno: 2020
 '''
```

### Utilizar `dict()` con la función `zip()` para fusionar dos listas en un diccionario de Python

En este caso solo se pueden usar 2 parámetros.

```py
series = ['Westworld', 'Humans', 'Devs']
directed_by = ['Jonathan Nolan', 'Sam Donovan', 'Alex Garland']

series_info = dict(zip(series, directed_by))

for key, value in series_info.items():
    print(key + ' : ' + value)

# Output:
'''
Westworld : Jonathan Nolan
Humans : Sam Donovan
Devs : Alex Garland
'''
```

<div class="alert alert-warning" role="alert">
<p><i class="fas fa-sticky-note"></i> Nota:</p>
 <p>Si intentas fusionar 3 iterables en un diccionario te dará el siguiente error: </p> 
 <p><code>ValueError: dictionary update sequence element #0 has length 3; 2 is required</code></p>
</div>