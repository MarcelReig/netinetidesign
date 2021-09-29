---
layout: post
title: Condiciones múltiples en Python
description: Condiciones múltiples en Python
comments: true
tags: python
category: programacion
image: python.png
---

{:.lead.my-5}
### Una simple declaración if determina si una condición es verdadera o falsa pero además de eso, Python nos ofrece herramientas para evaluar situaciones más complejas.

## Evaluar múltiples condiciones en Python

Decidir si un pasajero debe subir a un avión o no utilizando el operador `and`:

```py
dni = '276768765G'
air_tickets = True
hand_luggage = 1
drugs_weapons_explosives = True
license_to_kill = True


if (drugs_weapons_explosives is False or license_to_kill is True) \
        and dni == '276768765G' and air_tickets and hand_luggage <= 1:
    print('Puede pasar')
else:
    print('No puede pasar')

# Output: Puede pasar
```

<div class="alert alert-info" role="alert">
 <p><i class="fas fa-sticky-note"></i> Nota:</p>
<p>La barra invertida <code>\</code> en la sentencia if es simplemente para evitar que la línea de código sea demasiado larga.</p>
</div>

Evaluar si un número se encuentra entre el 1 y el 100 ambos incluidos haciendo uso del operador `and`.

```py
def evaluar_numero(number):
    if number >= 1 and number <= 100:
        print("Success!")
    else:
        print("Failure...")


evaluar_numero(68)

# Output: Succes!
```

Decidir si comprar un producto o sevicio haciendo uso de los operadores `and` y `and not`.

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

# Output: Toma mi dinero!
```