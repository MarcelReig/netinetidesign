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

<div class="alert alert-primary" role="alert">
<p><i class="fas fa-sticky-note"></i> Nota:</p>
 <p>Los loops también son llamados Iteradores o bucles.</p>
</div>

## For Loop

Para aprender a utilizar los loops primero neceitamos una lista de datos sobre la que iterar. La lista de tags que me aparece en Youtube servirá para el primer ejemplo.

Para recorrer una lista todo lo que necesitas es la palabra clave `for`, la palabra clave `in`, el nombre de una variable en este caso `tag`, que tendrá el valor de cada uno de los ítems de la lista según se vaya ejecutando el loop, primero será `Live` después `Japanese Music` etc.. y por último necesitamos el nombre de la variable que hace referencia a la lista que queremos recorrer, en el ejemplo `tags`.

El nombre de la variable `tag` podría ser cualquiera `x` o `tofu` funcionaría igual, pero es una convención nombrar esta variable en singular y el nombre de la lista en plural.

El nombre de la segunda variable en el bucle `for` tiene que ser el mismo que el nombre de la lista o no funcionará, en este caso la lista es `tags`.


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

El método `items()` del diccionario regresa una tupla por cada par `key:value` de un diccionario. En el siguiente ejemplo la primera variable (`teacher`), corresponde a la clave, la segunda variable (`email`) corresponde al valor de las tuplas.

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

## Incrementar por uno cada número de una lista

Vamos a utilizar un bucle for para incrementar por 1 a cada elemento en una serie de números, guardar el resultado en una nueva lista e imprimir la nueva lista por pantalla.

```py
def loop_over_list():
    numbers = [1, 2, 3, 4, 5, 6]
    result = [number+1 for number in numbers]
    print(result)


loop_over_list()

#Output: [2, 3, 4, 5, 6, 7]
```
## Loops con rango utilizando la función range() de Python

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

La sentencia `continue` se utiliza para continuar con el resto del bucle después de un if.

Cuando el bucle se encuentra con Harley Quinn, le deniega el acceso y sigue con el resto de heroinas de la lista. 

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

La sentencia `break` se utiliza para detener un bucle después de un if.

En este caso, cuando el bucle encuentra a Harley Quinn, se detiene el bucle aunque haya más elementos por recorrer en la lista.

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

## While Loops en Python

Cuenta atrás utilizando un while loop: 

```py
nums = list(range(1, 10))

while len(nums) > 0:
    print(nums.pop())

# Output: 
'''
9
8
7
6
5
4
3
2
1
'''
```

En el siguiente ejemplo tenemos una función que hace una pregunta al usuario y mientras el usuario no acierte continuará ejecutandose.

La función pregunta cuantos años tengo? Si el usuario responde 42 el Loop while se detiene, de lo contrario sigue ejecutandose.

```py
def adivina_mi_edad():
    while True:
        print('Cantos años tengo?')
        adivina = input()

        if adivina == '42':
            print('Correcto adivinaste mi edad!')
            return False
        else:
            print(f'No, no tengo {adivina} años, prueba otra vez\n')


adivina_mi_edad()

```

While loop que recorre una lista y pinta cada elemento de la lista por pantalla: 

```py
def while_loop():
    perritos = ['Pocket', 'Tengo', 'Canela', 'Tana']
    counter = 0
    while counter < len(perritos):
        print(perritos[counter])
        counter += 1

while_loop()

#Output: 
'''
Pocket
Tengo
Canela
Tana
'''
```