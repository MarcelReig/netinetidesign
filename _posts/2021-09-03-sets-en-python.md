---
layout: post
title: Sets en Python
description: Sets en Python
comments: true
tags: python
category: programacion
image: python-4.jpg
---

{:.lead.my-5}
### En posts anteriores he escrito sobre las Listas, las Tuplas y los Diccionarios, los Sets son el cuarto tipo de estructura de datos en Python.

### Carácterísticas de los Sets: 

- Los sets en Python son una colección de elementos  entre llaves `{}` separados por comas.
- Pueden contener números o cadenas pero __no elementos mutables__ como listas, sets o diccionarios.
- __No pueden contener elementos repetidos__, si los hay, no dará error, pero los elementos repetidos aparecerán solo una vez en el resultado.
- Son una __estructura de datos desordenada__, cada vez que utilizas un Set sus ítems se reordenan de forma aleatoria.
- __No son indexables__, no es posible acceder ni asignar elementos a un Set por su índice.

### Ejemplo de un Set: 

Como puedes ver en el set plants hay 3 Potos pero al ejecutar el print solo aparece 1, eso es porque los sets no permiten elementos repetidos.

```py
plants = {'Poto', 'Poto', 'Poto', 'Cintas', 'Lirio', 'Ficus'}

print(plants)

# Output: {'Lirio', 'Poto', 'Cintas', 'Ficus'}
```

### Resumen Estructuras de Datos en Python: 

- __Listas__ Colección ordenada y mutable, permite ítems duplicados.
- __Tuplas__ Colección ordenada e inmutable, permite ítems duplicados.
- __Set__ Colección desordenada y no indexable. No permite ítems duplicados.
- __Diccionario__ Colección ordenada y mutable de pares clave valor, no permite ítems duplicados.

## Links

[Sets - Programming with Mosh](https://www.youtube.com/watch?v=t9j8lCUGZXo){:target="_blank"}

[Programiz - Sets](https://www.programiz.com/python-programming/set){:target="_blank"}

[Sets - Socratica](https://www.youtube.com/watch?v=sBvaPopWOmQ){:target="_blank"}

