---
layout: post
title: Python loops
description: Python loops
comments: true
tags: python
category: programacion
image: python-loops.jpg
---

{:.lead.mt-5}
### En Python utilizan los iteradores constantemente, lo loops te permiten recorrer estructuras de datos sin saber lo largas que son.

{:.lead.mb-5}
### Para aprender a utilizar los loops primero neceitamos una lista de datos sobre la que iterar, la lista de tags que me aparece en Youtube servirá para el ejemplo.

## For Loop

Para recorrer una lista todo lo que necesitas es la palabra clave `for`, la palabra clave `in`, el nombre de una variable en este caso `tag` que tendrá el valor de cada uno de los ítems según se vaya ejecutando el loop y el nombre de la variable que hace referencia a la lista que queremos recorrer, en el ejemplo `tags`.

El nombre de la variable `tag` podría ser cualquier cosa `x` o `tofu` funcionaría igual, pero es una convención nombrar esta variable en singular y el nombre de la lista en plural.


```py
tags = ['Live', 'Japanese Music', 'Lo-fi Music', 'New to you']
for tag in tags:
    print(tag)

# Output:
'''
Live
Japanese Music
Lo-fi Music
New to you
'''
```

## Recorrer una cadena con un for loop

Si ejecutas un for loop en una cadena obtendrás un carácter de la cadena por cada paso del loop.

```py
for x in "Paraguay":
    print(x)

# Output: 
'''
P
a
r
a
g
u
a
y
'''
```

## Recorrer un diccionario con un for loop

```py
teachers = {
    'Theresa Morrison': 'theresa.morrison@myschool.com',
    'Caroline Turner': 'jhondoe@myschool.com',
    'Ryan North': 'ryan.north@myschool.com',
    'Sarah Davidson': 'sarah.davidson@myschool.com'
}

for teacher, email in teachers.items():
    print('Profesor', teacher)
    print('Correo eléctronico', email)

# Output: 
'''
Profesor: Theresa Morrison
Correo eléctronico: theresa.morrison@myschool.com
Profesor: Caroline Turner
Correo eléctronico: jhondoe@myschool.com
Profesor: Ryan North
Correo eléctronico: ryan.north@myschool.com
Profesor: Sarah Davidson
Correo eléctronico: sarah.davidson@myschool.com
'''
```