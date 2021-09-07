---
layout: post
title: Cadenas en Python
description: Cadenas en Python
comments: true
tags: python
category: programacion
image: strings-python.jpg
---

## Cadenas

Las cadenas (`string`) se crean escribiendo una una secuencia de carácteres, letras, números o símbolos entre comillas simples `''` o dobles `""`.

Puedes guardar un `string` en una variable del siguiente modo:

```py
my_str = 'Fixie pug hoodie'
print(my_str) # Output: Fixie pug hoodie
```

Puedes concatenar variables que contienen cadenas utilizando el operador `+` de suma:

```py
my_str1 = 'Roof'
my_str2 = 'party'
my_str3 = 'wolf'
my_str4 = 'iPhone'

print(my_str1 + my_str2 + my_str3 + my_str4)

# Output: RoofpartywolfiPhone
```

Si quieres espacios en blanco entre las cadenas tienes que añadirlos `" "`: 

```py
my_str1 = 'Roof'
my_str2 = 'party'
my_str3 = 'wolf'
my_str4 = 'iPhone'

print(my_str1 + " " + my_str2 + " " + my_str3 + " " + my_str4)

# Output: Roof party wolf iPhone
```

__f-strings__

Por suerte Python 3 cuenta con el método string interpolation que facilita mucho el formateo de strings. 

Escribe una cadena precedida de la letra `f` te permite añadir variables dentro de una cadena.

Las variables se escriben entre llaves `{}`.

```py
my_str1 = 'Roof'
my_str2 = 'party'
my_str3 = 'wolf'
my_str4 = 'iPhone'

print(f'{my_str1} {my_str2} {my_str3} {my_str4}')

# Output: Roof party wolf iPhone
```

<div class="alert alert-info" role="alert">
<p><i class="fas fa-sticky-note"></i> Nota:</p>
 <p>Si como yo estás aprendiendo Python pero ya sabes algo de JavaScript, las <code>f-string</code> vendrían a ser a algo así como los template literals en ES6.</p>
</div>

__Ejemplo de template literal en ES6__

<p>En JavaScript en vez de preceder la cadena con la letra <code>f</code> utilizamos acentos graves <code>``</code> en lugar de comillas simples <code>''</code> para envolver la cadena. También se requiere del simbolo dolar <code>$</code> delante de las llaves, por lo demás es bastante similar.</p>

```js
let my_str1 = 'Roof';
let my_str2 = 'party';
let my_str3 = 'wolf';
let my_str4 = 'iPhone';

console.log(`${my_str1} ${my_str2} ${my_str3} ${my_str4}`)

// "Roof party wolf iPhone"
```

__strings multilínea__

```py
multiline_str = '''Los strings multilínea
son igual que
los comentarios multilínea...'''

print(multiline_str)

'''
Los strings multilínea
son igual que
los comentarios multilínea...
'''
```

También podemos utilizar el carácter de escape `\n` para crear saltos de línea.

```py
multiline_str = "Los strings multilínea\nson igual que\nlos comentarios multilínea..."

print(multiline_str)

'''
Los strings multilínea
son igual que
los comentarios multilínea...
'''
```

__Indexar strings en Python__

Del mismo modo que los ítems de lista los carácteres de un string son indexables en un índice que empiza en 0.

<table class="table table-bordered table-responsive-sm table-responsive-md">
  <tbody>
    <tr>
      <td>E</td>
      <td>T</td>
      <td> </td>
      <td>m</td>
      <td>i</td>
      <td> </td>
      <td>c</td>
      <td>a</td>
      <td>s</td>
      <td>a</td>
      <td> </td>
      <td>T</td>
      <td>e</td>
      <td>l</td>
      <td>é</td>
      <td>f</td>
      <td>o</td>
      <td>n</td>
      <td>o</td>
    </tr>
      <tr>
      <td>0</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <td>7</td>
      <td>8</td>
      <td>9</td>
      <td>10</td>
      <td>11</td>
      <td>12</td>
      <td>13</td>
      <td>14</td>
      <td>15</td>
      <td>16</td>
      <td>17</td>
      <td>18</td>
    </tr>

  </tbody>
</table>

Podemos acceder a un carácter escribiendo su índice entre corchetes `[]`.

```py
et_says = "ET mi casa teléfono"

print(et_says[6])

# Output: c
```

Podemos acceder al último carácter de la cadena con `[-1]`.

```py
et_says = "ET mi casa teléfono"

print(et_says[-1])

# Output: o
```

__Funciones de las cadenas__

Para saber la longitud de una cadena utilizamos la función `len`.

```py
et_says = "ET mi casa teléfono"

print(len(et_says))

# Output: 19
```

__Métodos de las cadenas__

`upper()` convierte el texto en mayúsculas.

```py
et_says = "ET mi casa teléfono"

print(et_says.upper())

# Output: Output: ET MI CASA TELÉFONO
```
`lower()` convierte el texto en minúsculas.
```py
et_says = "ET mi casa teléfono"

print(et_says.lower())

# Output: et mi casa teléfono
```

`capitalize()`

`title()`

`count()`

`find()`

`rfind()`

`isdigit()`

`isalnum()`

`isalpha()`

`islower()`

`isupper()`

`istitle()`

`isspace()`

`startswith()`

`endswith()`

`split()`

`join()`

`strip()`