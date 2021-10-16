---
layout: post
title: Comprensión de listas en Python
description: Comprensión de listas en Python
comments: true
tags: python
category: programacion
image: python.png
---

{:.lead.my-5}
### Las listas por comprensión del inglés `List Comrehension` son una manera elegante de de definir y crear listas en una sola línea.

La comprensión de listas en Python a menudo se utiliza para trabajar sobre listas ya creadas y utilizar una sintaxis de código más reducida de lo que que podríamos conseguir con un un bucle for.

Veamos como crearíamos una lista con los cuadrados de los números del 1 al 10 con un bucle for: 

```py
squares = []
for i in range(1, 11):
    squares.append(i**2)
    
print(squares)

#Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

Ahora veamos como crearíamos la misma lista de una forma más elegante y en una sola línea utilizando la sintaxis de comprensión de listas: 

```py
squares = [i**2 for i in range(1, 11)]

print(squares)
#Output: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
```

Supongamos que tenemos una lista de países en minúscula y queremos capitalizar el primer carácter de cada país, así es como podríamos hacerlo con un bucle for: 

```py
paises = ["japon", "laos", "colombia", "madagascar"]

cap_paises = []
for pais in paises:
    cap_paises.append(pais.capitalize())

print(cap_paises)

#Output: ['Japon', 'Laos', 'Colombia', 'Madagascar']
```

Resolvamos el mismo problema con la sintaxis `List Comrehension` de Python.

```py
paises = ["japon", "laos", "colombia", "madagascar"]
cap_paises = [pais.capitalize() for pais in paises]

print(cap_paises)
#Output: ['Japon', 'Laos', 'Colombia', 'Madagascar']
```