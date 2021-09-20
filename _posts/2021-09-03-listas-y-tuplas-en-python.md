---
layout: post
title: Listas y Tuplas en Python
description: Listas y Tuplas en Python
comments: true
tags: python
category: programacion
image: listas-tuplas-python.jpg
---

{:.lead.my-5}
### Las listas son una secuencia ordenada de elementos, a diferencia de la tuplas las listas son mutables, podemos añadir, eliminar, mover y cambiar items de lista a nuestro antojo.

Las listas se crean añadiendo elementos separados por comas entre `[ ]` corchetes:

```py
helados = ['chocolate', 'limón', 'mango']
print(helados)
# Output: ['chocolate', 'limón', 'mango']
```

A los elementos de una lista se accede por su índice, de igual modo que accedemos a los carácteres de una cadena:

```py
helados = ['chocolate', 'limón', 'mango']
print(helados[2])
# Output: mango
```

Si no te gusta el mango, siempre puedes cambiarlo por fresas silvestres, asignándole el nuevo valor a través de su índice: 

```py
helados = ['chocolate', 'limón', 'mango']
helados[2] = 'fresas silvestres'
print(helados)
# Output: ['chocolate', 'limón', 'fresas silvestres']
```

Otra opción sería utilizar la palabra clave `del` para eliminar mango de la lista: 

```py
helados = ['chocolate', 'limón', 'mango']
del helados[2]
print(helados) # Output: ['chocolate', 'limón']
```

Python nos permite crear listas anidadas.

```py
nested_list = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

print(nested_list[0][1])  # Output: 2

print(nested_list[1][-1])  # Output: 6
```

Para acceder al último elemento de una lista utilizamos el índice negativo  `[-1]`.

```py
helados = ['chocolate', 'limón', 'mango']
print(helados[-1])  # Output: mango
```

Para saber cuantos elementos tiene una lista utilizamos la función predefinida `len`.

```py
helados = ['chocolate', 'limón', 'mango']
print(len(helados))  # Output: 3
```

## Slice en Python

Nos permite obtener un rango de elementos de una lista. Los valores del rango se especifican entre corchetes, separados por dos puntos. `[inicio:fin]` El primer valor indica el inicio del rango y el segundo el fín.

<div class="alert alert-info" role="alert">
<p><i class="fas fa-sticky-note"></i> Nota:</p>
 <p>Recuerda que las listas igual que las cadenas van en índice <code>0</code>.</p>
</div>

El primer valor es (inclusivo) el segundo es (exclusivo), `[1:3]` retorna el segundo y el tercer elemento de una lista.

```py
chocolates = [
    'chocolate belga',
    'chocolate blanco',
    'chocolate & chili',
    'selva negra']

print(chocolates[1:3])

# Output: ['chocolate blanco', 'chocolate & chili']
```

Si el rango que quieres obtener empieza desde el principio de la lista, no es necesario que especifíques el primer valor `[:2]`.

```py
chocolates = [
    'chocolate belga',
    'chocolate blanco',
    'chocolate & chili',
    'selva negra']

print(chocolates[:2])
# Output: ['chocolate belga', 'chocolate blanco']
```

Del mismo modo, si el rango que quieres obtener llega hasta el final de la lista no es necesario que especifíques el segundo valor `[2:]`.

```py
chocolates = [
    'chocolate belga',
    'chocolate blanco',
    'chocolate & chili',
    'selva negra']

print(chocolates[2:])
# Output: ['chocolate & chili', 'selva negra']
```

También puedes utilizar índices negativos. Con `[-3:]` obtienes los últimos 3 elementos de la lista.

```py
chocolates = [
    'chocolate belga',
    'chocolate blanco',
    'chocolate & chili',
    'selva negra']

print(chocolates[-3:])
# Output:
"""
['chocolate blanco',
'chocolate & chili',
'selva negra']
"""
```

__Slice__ acepta un tercer parámetro `[star:stop:step]`.
Si se omite, el valor por defecto de `step` es 1.

```py
chocolates = [
    'chocolate',
    'tiramisú',
    'pistacho',
    'vainilla']

print(chocolates[0:4:2])

# Output: ['chocolate', 'pistacho']
```

## Iiterar una lista con for in en Python

```py
chocolates = [
    'chocolate belga',
    'chocolate blanco',
    'chocolate & chili',
    'selva negra']

for chocolate in chocolates:
    print(chocolate)

# Output:
"""
chocolate belga
chocolate blanco
chocolate & chili
selva negra
"""
```

## Añadir un nuevo elemento a una lista en Python

El método `append()` añade un elemento al final de la lista.

```py
helados = ['chocolate', 'limón', 'mango']
print(helados)
# Output: ['chocolate', 'limón', 'mango']

helados.append('pistacho')

print(helados)
# Output:
# ['chocolate', 'limón', 'mango', 'pistacho']
```

El método `extend()` también sirve para añadir un nuevo elemento a la lista.
Si añadimos una lista de un elemento como parámetro, vamos a obtener el mismo resultado que con append: 

```py
helados = ['chocolate', 'limón', 'mango']

helados.extend(['nata'])
print(helados)

# Output:
# ['chocolate', 'limón', 'mango', 'nata']
```

Si añadimos una cadena como parámetro, el resultado es muy diferente: 

```py
helados = ['chocolate', 'limón', 'mango']

helados.extend('nata')
print(helados)

# Output: ['chocolate', 'limón', 'mango', 'n', 'a', 't', 'a']
```

<div class="alert alert-info" role="alert">
<p><i class="fas fa-sticky-note"></i> Nota:</p>
 <p>La diferencia entre <code>append()</code> y <code>extend()</code> es que append añade un objeto (número, cadena u otra lista) al final de la lista, mientras que extend extiende la lista añadiendo elementos a la lista.</p>
</div>

Veamos la diferencia en un ejemplo:

Utilizando el método `append()`:
```py
helados = ['chocolate', 'limón', 'mango']

helados.append(['vainilla', 'pistacho', 'melón'])

print(helados)

# Output: ['chocolate', 'limón', 'mango', ['vainilla', 'pistacho', 'melón']]
```

Utilizando el método `extend()`: 
```py
helados = ['chocolate', 'limón', 'mango']

helados.extend(['vainilla', 'pistacho', 'melón'])

print(helados)

# Output: ['chocolate', 'limón', 'mango', 'vainilla', 'pistacho', 'melón']
```

El método `insert()` inserta un elemento de lista en el índice especificado.

```py
helados = ['chocolate', 'limón', 'mango']
print(helados)
# Output: ['chocolate', 'limón', 'mango']

helados.insert(1, 'vainilla')

print(helados)
# Output: ['chocolate', 'vainilla', 'limón', 'mango']
```

Añadir un nuevo elemento a una lista y guardar la lista en una variable __sin modificar la lista original__: 

```py
helados = ['chocolate', 'limón', 'mango']

# New List
new_helados = helados + (['nata'])
print(new_helados)

#  Output: ['chocolate', 'limón', 'mango', 'nata']
```

## Métodos de las listas en Python

`append()` Añade un elemento al final de la lista.

`clear()` Elimina todos los elementos de la lista. El método clear() no retorna ningún valor, solo una lista vacía.

`extend()` Para añadir un nuevo elemento a la lista.

`count()` Cuenta el número de veces que aparece un ítem en una lista.

```py
ice_cream_stock = [
    "Vainilla",
    "Chocolate",
    "Vainilla",
    "Limón"
]

flavour_counter = ice_cream_stock.count("Vainilla")

print(f'Quedan {flavour_counter} helados de Vinilla!')

#  Output: Quedan 2 helados de Vinilla!
```

`index()` Utilizamos este método para saber en que índice se encuentra un elemento en una lista.

```py
helados = ['chocolate', 'limón', 'mango']
print(helados.index('limón'))  # Output: 1
```

`insert()` Inserta un elemento de lista en el índice especificado.

`pop()` Elimina el último elemento de la lista, pero no se limita a eso, también lo retorna por lo que podemos guardarlo en una variable.

```py
helados = ['chocolate', 'limón', 'mango']
ultimo_helado = helados.pop()
print(ultimo_helado) # Output: mango
print(helados) # Output: ['chocolate', 'limón']
```

`remove()` Si no te gusta el mango puedes utilizar este método para eliminarlo de la lista.

```py
helados = ['chocolate', 'limón', 'mango']
helados.remove('mango')
print(helados) # Output: ['chocolate', 'limón']
```

`sort()` Ordena los ítems de lista alfabéticamente.

```py
helados = ['café', 'straciatella', 'avellana']
helados.sort()
print(helados)
# Output:  ['avellana', 'café', 'straciatella']
```

`reverse()` Invierte los elementos de la lista original.

Combinando los métodos `sort()` y `reverse()` podemos ordenar una lista de Z a A.

```py
helados = ['café', 'straciatella', 'avellana']

helados.sort(reverse=True)

print(helados)
# Output:  ['straciatella', 'café', 'avellana']
```

## Tuplas

Las tuplas son una secuencia de items ordenada, igual que las listas, la diferencia es que las tuplas son inmutables.

Las tuplas una vez creadas no se pueden modificar.

Las tuplas se definen con parentesis `()` mientras que las listas se definen con corchetes `[]`. 

```py
inmutable_list = (36, 'bizcocho', 4+7)

print(inmutable_list)

# Output: (36, 'bizcocho', 11)
```