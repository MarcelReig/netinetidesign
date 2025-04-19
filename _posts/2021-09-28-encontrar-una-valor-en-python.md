---
layout: post
title: Encontrar un valor en Python
description: Encontrar un valor en Python
comments: true
tags: python
category: programacion
image: python-3.jpg
---

{:.lead.my-5}
### Encontrar un valor en un string o en una lista de Python es sencillo gracias al operador in, que devuelbe un booleano.

## Encontrar una palabra en un string en Python

```py
sentence = 'Todos esos momentos se perderán en el tiempo, "\
    "como lágrimas en la lluvia.'
word = 'tiempo'

if word in sentence:
    print('The word is in the sentence')
else:
    print('The word is not in the sentence')

# Output: The word is in the sentence
```

## Encontrar un número en una lista en Python

```py
nums = [34, 12, 89, 345, 92, 7]

if 12 in nums:
    print('The number was found')
else:
    print('The number was not found')

# Output: The number was found
```