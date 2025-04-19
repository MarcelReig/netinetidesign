---
layout: post
title: Funciones Lambda en Python
description: Funciones Lambda en Python
comments: true
tags: python
category: programacion
image: python-3.jpg
---

{:.lead.mt-5}
### Las funciones lambda son funciones anónimas, es decir que no tienen nombre. Las funciones lambda se definen en una sola línea.

{:.lead.my-3}
### Lambda se utiliza para simplificar todavía más las funciones pequeñas, para funciones complejas siempre se utiliza la sintaxis normal.

{:.lead.mb-5}
### Las funciones lambda no se definen con la palabra clave `def` como las funciones normales, se definen con la palabra clave `lambda`.

<blockquote class="blockquote mb-5">
  <p class="mb-0">"Las lambdas de Python son sólo una notación abreviada si eres demasiado perezoso para definir una función"..</p>
  <br>
  <footer class="blockquote-footer">Tradución automatica de <cite title="Source Title">Documentación oficial</cite></footer>
</blockquote>

## Pasos para crear una función lambda
La siguiente función lambda recoge dos parámetros y los muestra en una cadena.

1. Definimos la función con la palabra clave `lambda`.
2. Añadimos los parámetros separados por comas, en este caso first y last.
3. Añadimos los dos puntos `:` y definimos la expresión de la función, sin necesidad de añadir `return`.
4. Para poder utilizar la función hay que guardarla en una variable en este caso la variable `full_name`.

Ya podemos llamar a la función con los argumentos que necesitemos, como en una función común.

```py
full_name = lambda first, last: f'{first} {last}'


print(full_name('Marcel', 'Reig'))

# Output: Marcel Reig
```

Para ver la diferencia entre una función normal y una función lambda veamos una función normal que suma 3 valores: 

```py
def result(x, y, z):
    return x + y + z


print(result(5, 5, 5))

# Output: 15
```

Ahora veamos la misma función convertida a lambda: 

```py
result = lambda x, y, z: x + y + z

print(result(5, 5, 5))

# Output: 15
```
