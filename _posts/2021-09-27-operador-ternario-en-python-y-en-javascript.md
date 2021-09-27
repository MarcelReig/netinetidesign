---
layout: post
title: Operador ternario en Python y en Javascript
description: Operador ternario en Python y en Javascript
comments: true
tags: python javascript
category: programacion
image: python.png
---

{:.lead.mt-5}
### El operador ternario es un operador condicional, la sintaxis en Python y en JavaScript es diferente pero su uso es el mismo.

{:.lead.mb-5}
### El operador ternario se utiliza para simplificar declaraciones if... else.

## Opeador ternario en Python

El operador ternario en Python toma tres parámetros: una expresión si es verdadero, la expresión a evaluar y una expresión si es falso.

```py
language = 'python'

language_check = True if language == 'python' else False

print(language_check)

#Output: True
```

## Operador ternario en JavaScript

El operador ternario en javascript toma tres parámetros: una condición seguida del signo interrogante  `?`, una expresión que se ejecutará si la condición es verdadera y seguida por dos puntos `:` la expresión que se ejecutará si la condición es falsa.

```js
var language = 'javascript'

var check_language = (language == 'javascript') ? true : false;

console.log(check_language);

// Output: true
```