---
layout: post
title: Primeros pasos con Python
description: Primeros pasos con Python
comments: true
tags: python
category: programacion
image: python.png
---

{:.lead}
### Python es un lenguaje de propósito general con una sintaxis limpia y sencilla, por lo que es una buena elección para aprender a programar.

{:.lead}
### Python fue creado en los 90 por [Guido van Rossum](https://twitter.com/gvanrossum?s=20){:target="\_blank"}, su nombre viene de los humoristas britanicos Monty Python.

{:.lead.mb-5}
### Si quieres cear aplicaciones web en Python puedes utilizar algunso de sus frameworks [django](https://www.djangoproject.com/){:target="\_blank"} o [Flask](https://flask.palletsprojects.com/en/2.0.x/){:target="\_blank"}.

## Empezar a programar en Python

__Sin instalación__

La manera más fácil de probar el lenguaje es utilizar [replit](https://replit.com/){:target="\_blank"} o [anyfidle](https://www.anyfiddle.com/), son herramientas tipo codepen pero que te permiten programar en Python.

__Con instalación__

Las herraminetas mencionadas anteriormente están bién para probar el lenguaje, pero tarde o temprano tendrás que instalar Python en tu computadora.

Para instalar Python ves a [python.org](https://www.python.org/){:target="\_blank"} y descarga la versión de Python para tu sistema operativo.

<div class="alert alert-info" role="alert">
<p><i class="fas fa-sticky-note"></i> Nota:</p>
<p>Para instalar Python en Mac te recomiendo seguir el <a href="https://www.freecodecamp.org/news/python-version-on-mac-update/" target="_blank">tutorial de Quincy Larson</a> en freeCodeCamp.</p>
</div>

Una vez instalado Python en tu computadora ya puedes abrir la terminal y escribir `python3`, esto te abrirá un interprete de Python en el que ya puedes ejecutar funciones de Python.

<img src="{{ site.baseurl }}/assets/images/blog/python-term.png" width="800" class="img-fluid text-center m-xl-auto" alt="python">

<div class="alert alert-info" role="alert">
 <p><i class="fas fa-sticky-note"></i> Nota:</p>
<p>Una vez instalado Python 3 ya puedes escribir comandos de Python detrás de los tres símbolos <code>>>></code><br>Si quieres código coloreado y que te avise de errores instala un editor de código.</p>
</div>

## Entorno de programación

No necesitas un IDE especializado para empezar a programar en Python, cualquier editor de código te irá bien.

Mi editor habitual es [Visual Studio Code](https://code.visualstudio.com/){:target="\_blank"} el cual tiene una [extensión para Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python){:target="\_blank"} pero de momento estoy utilizando [PyCharm](https://www.jetbrains.com/es-es/pycharm/download/){:target="\_blank"} la versión **Community** que es gratuita y para aprender el lenguaje es muy cómodo.

## Características principales del lenguaje

- Es un **lenguaje interpretado**, no compilado.
- Usa **tipado dinámico**, una variable puede tomar valores de distinto tipo.
- Es **fuertemente tipado**, el tipo no cambia de manera repentina. Para que se produzca un cambio de tipo se tiene que hacer una conversión explícita.
- Es **multiplataforma**, el mismo código funciona en macOS, Windows y Linux.

## Indentación

Python utiliza la indentación para indicar el inicio y fín de un bloque de código.

```py
def saludar(first_name, last_name):
    return("Hi " + first_name + " " + last_name + "!") # código indentado
print(saludar("Ana", "Toledo"))
```

## Comentarios
Comentario de una línea.

```py
# Hola soy un comentario
```

Los comentarios de varias líneas se hacen con 3 comillas dobles o simples al inicio y al final del comentario.

```py
"""
Comentario
de varias
líneas
"""
```

<div class="alert alert-info" role="alert">
 <p><i class="fas fa-sticky-note"></i> Nota:</p>
<p>En los siguientes ejemplos utilizaré <code># Comentarios de Python</code> para mostrar el resultado de la consola u otras aclaraciones.</p>
</div>

## Variables

Las variables nos permiten guardar valores que más tarde podemos utilizar en nuestro código.
Las variables pueden guardar cualquier tipo de dato, enteros, flotantes, booleanos y cadenas o Strings, también podemos guardar listas y tuplas.

```py
# variable que contiene un string
mascota = "Perro"
# variable que contiene un booleano
raza_peligrosa = True
# variable que contiene un número entero
edad = 2
```

## Tipos de datos en Python

- Booleanos _(bool)_
- Números _(int)_
- Números decimales _(float)_
- Número complejo _(complex)_
- Cadenas _(String)_
- Listas _(List)_
- Tuplas _(Tuple)_
- Diccionarios _(Dict)_
- set _(set)_


<div class="alert alert-info" role="alert">
 <p><i class="fas fa-sticky-note"></i> Nota:</p>
<p>En Python existen dos tipos de datos los que se pueden modificar tras su creación <b>Mutables</b> y los que no, <b>Inmutables</b>.</p>
</div>


__Mutables__ no se pueden modificar tras su creación.
- Listas
- Dicionarios
- Sets

__Inmutables__ se pueden modificar tras su creación.
- Booleanos
- Números
- Cadenas
- Tuplas


## Números

**Enteros** (`int`) números sin decimales, por ejemplo `500` o `-350`.

```py
sumar_enteros = 5 + 5
print(sumar_enteros)  # Output: 10
```
**Números con decimales** (`float`) por ejemplo `0.20` o `-34.000`.

```py
sumar_decimales = 5.50 + 0.8
print(sumar_decimales)  # Output: 6.3
```
__Operadores aritméticos en Python:__

<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Operador </th>
      <th scope="col">Descripción </th>
      <th scope="col">Uso </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">+</th>
      <td>Suma</td>
      <td>5 + 5 = 10 </td>
    </tr>
    <tr>
      <th scope="row">-</th>
      <td>Resta</td>
      <td>4 - 3 = 1</td>
    </tr>
    <tr>
      <th scope="row">*</th>
      <td>Multiplicación</td>
      <td>8 * 2 = 16</td>
    </tr>
        <tr>
      <th scope="row">/</th>
      <td>División</td>
      <td>16 / 2 = 8</td>
    </tr>
    <tr>
      <th scope="row">%</th>
      <td>Módulo</td>
      <td>16 % 3 = 1</td>
    </tr>
    <tr>
      <th scope="row">**</th>
      <td>Exponente</td>
      <td>12 ** 3 = 1728</td>
    </tr>
      <tr>
      <th scope="row">//</th>
      <td>División entera</td>
      <td>18 // 5 = 3</td>
    </tr>
  </tbody>
</table>

## Condicionales

```py
es_barato = True
es_bueno = True

if es_barato and es_bueno:
    print("Toma mi dinero!")
elif es_barato and not es_bueno:
    print("Eres barato pero no eres bueno")
elif not es_barato and es_bueno:
    print("Eres bueno pero no eres barato")
else:
    print("Eres una estafa")
```

Con los condicionales en Python puedes construir cosas tan geniales como una pequeña calculadora.

```py
num1 = float(input("Introduce un número: "))
op = input("Introduce un operador: ")
num2 = float(input("Introduce el segundo número: "))

if op == '+':
    print(num1 + num2)
elif op == '-':
    print(num1 - num2)
elif op == '/':
    print(num1 / num2)
elif op == '*':
    print(num1 * num2)
else:
    print('Introduce un operador válido')
```

## Iteraciones en Python

- While
- For

## Funciones en Python

Las funciones en Python se crean mediante la instrucción `def` más el nombre de la función.
Para invocar la función escribimos el nombre de la función más paréntesis y los parámetros de la función si los tiene.
No todas las funciones tienen que tener parámetros.

```py
def myfunc(x, y, z):
    result = x + y + z
    return result

print(myfunc(2, 4, 3)) # Output: 9
```

## Funciones lambda

Las funciones anonimas en Python se definen con `lambda`.

```py
result2 = lambda x, y, z: x + y + z

print(result2(2, 4, 3)) # Output: 9
```
