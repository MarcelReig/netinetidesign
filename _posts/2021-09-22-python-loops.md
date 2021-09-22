---
layout: post
title: Python loops
description: Python loops
comments: true
tags: python
category: programacion
image: python-loops.jpg
---

{:.lead.my-5}
### En Python se utilizan los iteradores constantemente, los loops te permiten recorrer estructuras de datos sin saber lo largas que son.

{:.lead.mb-5}
### Para aprender a utilizar los loops primero neceitamos una lista de datos sobre la que iterar. La lista de tags que me aparece en Youtube servirá para el primer ejemplo.

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

## Loops con rango utilizando la función `range()` de Python

Pintar por pantalla los números del 1 al 9 con la función `range()`, ten en cuenta que si quieres pintar hasta el 10 tienes que poner 11 como segundo parámetro pues el loop se para en llegar al último valor.

```py
for num in range(1, 10):
    print(num)

# Output: 
'''
1
2
3
4
5
6
7
8
9
'''
```

## Operador lógico Continue en Loops de Python

```py
usernames = [
    'Natasha Romanoff',
    'Wanda Maximoff',
    'Jessica Jones',
    'Harley Quinn',
    'Ororo Monroe',
    'Yelena Belova'
]

for username in usernames:
    if username == 'Harley Quinn':
        print(f'Lo siento, {username}, no se le permite el acceso')
        continue
    else:
        print(f'{username}, acceso permitido')

# Output: 
'''
Natasha Romanoff, acceso permitido
Wanda Maximoff, acceso permitido
Jessica Jones, acceso permitido
Lo siento, Harley Quinn, no se le permite el acceso
Ororo Monroe, acceso permitido
Yelena Belova, acceso permitido
'''
```

## Operador lógico Break en Loops de Python


```py
usernames = [
    'Natasha Romanoff',
    'Wanda Maximoff',
    'Jessica Jones',
    'Harley Quinn',
    'Ororo Monroe',
    'Yelena Belova'
]

for username in usernames:
    if username == 'Harley Quinn':
        print(f'{username}, ha sido encontrada en el indice {usernames.index(username)}')
        break
    print(username)

 # Output: 
'''
Natasha Romanoff
Wanda Maximoff
Jessica Jones
Harley Quinn, ha sido encontrada en el indice 3
'''
```