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

{:.lead.my-5}
### Así como Rubi cuenta con los framaworks Rails y Sinatra, en Python tienes  [django](https://www.djangoproject.com/){:target="\_blank"} y [Flask](https://flask.palletsprojects.com/en/2.0.x/){:target="\_blank"} para crear aplicaciones web.

## Empezar a programar en Python

### Sin instalación

La manera más fácil de probar el lenguaje es utilizar [replit](https://replit.com/){:target="\_blank"} o [anyfidle](https://www.anyfiddle.com/), son herramientas tipo codepen pero que te permiten programar en Python.

<div class="browser my-5">
<img src="{{ site.baseurl }}/assets/images/blog/replit.jpeg" width="800" class="img-fluid text-center m-xl-auto" alt="replit">
</div>

### Con instalación

Las herraminetas mencionadas anteriormente están bién para probar el lenguaje, pero si quieres hacer algo serio, tarde o temprano tendrás que instalar Python en tu computadora.

Para instalar Python ves a [python.org](https://www.python.org/){:target="\_blank"} y descarga la versión de Python para tu sistema operativo.

<div class="alert alert-info" role="alert">
<p><i class="fas fa-sticky-note"></i> Nota:</p>
<p>Para instalar Python en Mac te recomiendo seguir el <a href="https://www.freecodecamp.org/news/python-version-on-mac-update/" target="_blank">tutorial de Quincy Larson</a> en freeCodeCamp.</p>
</div>

Una vez instalado Python en tu computadora ya puedes abrir la terminal y escribir `python3`, esto te abrirá un interprete de Python en el que ya puedes empezar a ejecutar funciones de Python.

<img src="{{ site.baseurl }}/assets/images/blog/python-term.png" width="800" class="img-fluid text-center m-xl-auto" alt="python">

<div class="alert alert-info" role="alert">
 <p><i class="fas fa-sticky-note"></i> Nota:</p>
<p>Una vez instalado Python 3 ya puedes escribir comandos de Python detrás de los tres símbolos <code>>>></code><br>Si quieres código coloreado y que te avise de errores instala un editor de código.</p>
</div>

## Entorno de programación en Python

No necesitas un IDE especializado para empezar a programar en Python, cualquier editor de código actual te irá bien.

En la fase en la que me encuentro, de aprender y experimentar con el lenguaje, [PyCharm](https://www.jetbrains.com/es-es/pycharm/download/){:target="\_blank"} me resulta muy cómodo, la versión **Community** es gratuita y para empezar es más que suficiente.

En algún momento probaré la [extensión para Python](https://marketplace.visualstudio.com/items?itemName=ms-python.python){:target="\_blank"} de  [Visual Studio Code](https://code.visualstudio.com/){:target="\_blank"} que es el editor que utilizo para escribir estas líneas.

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

## Variables en Python

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

__Mutables__ Se pueden modificar tras su creación.
- Listas
- Dicionarios
- Sets

__Inmutables__ No se pueden modificar tras su creación.
- Booleanos
- Números
- Cadenas
- Tuplas

## Números en Python

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

Los condicionales en programación se utilizan para elegir entre diferentes opciones dependiendo del valor de las variables.


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

__Operadores condicionales en Python:__

En esta breve introducción a los condicionales solamente hemos utilizado el operador `==` de igualdad pero el resto de operadores condicionales te serán de gran utilidad enseguida.

<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Operador </th>
      <th scope="col">Descripción </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">==</th>
      <td>Igualdad</td>
    </tr>
    <tr>
      <th scope="row">!=</th>
      <td>Desigualdad</td>
    </tr>
    <tr>
      <th scope="row">></th>
      <td>Mayor que</td>
    </tr>
        <tr>
      <th scope="row">>=</th>
      <td>Mayor o igual a</td>
    </tr>
    <tr>
      <th scope="row"><</th>
      <td>Menor o igual a</td>
    </tr>
  </tbody>
</table>

Este condicional chequea que el usuario sea mayor de 21 años, si la condición no se cumple imprime un mensaje por pantalla.

```py
age = 18

if age < 21:
  print(f"Lo siento debes ser mayor de 21 años.")

# Output: Lo siento debes ser mayor de 21 años.
```

## Iteraciones o loops en Python

Se utilizan para automatizar tareas repetitivas.

Bucle `while` que imprime una cuenta atrás por pantalla.

```py
n = 5
while n > 0:
    print(n)
    n = n -1
print('Lets go!')

# Output: 
'''
5
4
3
2
1
Lets go!
'''
```

Bucle `for` que recorre una lista e imprime cada uno de sus ítems por pantalla: 

```py
plants = ['Poto', 'Cintas', 'Lirio', 'Ficus']

for plant in plants:
    print(plant)

# Output: 
'''
Poto
Cintas
Lirio
Ficus
'''
```
### Funciones en Python

Las funciones en Python se crean mediante la instrucción `def` más el nombre de la función.
Para invocar la función escribimos el nombre de la función más paréntesis y los parámetros de la función si los tiene.
No todas las funciones tienen que tener parámetros.

```py
def myfunc(x, y, z):
    result = x + y + z
    return result

print(myfunc(2, 4, 3)) # Output: 9
```

### Funciones lambda

Las funciones anonimas en Python se definen con `lambda`.

```py
result2 = lambda x, y, z: x + y + z

print(result2(2, 4, 3)) # Output: 9
```

