---
layout: post
title: Pasar funciones como parámetro
description: Pasar funciones como parámetro en Python y en JavaScript
comments: true
tags: python javascript
category: programacion
image: programacion-funcional.jpg
---

<h2 class="lead">En la programación funcional pasamos funciones como parámetro.</h2>

__Función como parámetro en Python:__

```py
def apply(num, f):
    return f(num)

def double(num):
    return num * 2

print(apply(5, lambda num: 2 * num)) # 10
```

__Función como parámetro en JavaScript:__

```js
function apply(num, f) {
  return f(num);
}

function double(num) {
  return 2 * num;
}
console.log(apply(5, double)); // 10
```

[<small><i class="fas fa-external-link-alt"></i> Play with it in JS Bin!</small>](https://jsbin.com/weyokir/edit?js,console){:target="\_blank"}



