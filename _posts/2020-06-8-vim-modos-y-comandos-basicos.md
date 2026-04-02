---
layout: post
title: Vim modos y comandos básicos
description: Vim modos y comandos básicos
comments: true
tags: vim
category: programacion
image: coding-2.webp
---

{:.lead.my-5}
### Vim tiene un concepto que lo diferencia de cualquier otro editor: los modos. Entender los modos es entender Vim.

## Los modos

Vim es un editor modal — en cada momento estás en un modo distinto y las teclas hacen cosas diferentes según el modo en el que estés.

| Modo | Cómo entrar | Para qué sirve |
|------|-------------|----------------|
| Normal | `esc` | Navegar y ejecutar comandos |
| Inserción | `i` | Escribir texto |
| Visual | `v` | Seleccionar texto |
| Comando | `:` | Guardar, salir, buscar... |

## Modo normal

Es el modo por defecto al abrir Vim. Desde aquí navegas y ejecutas la mayoría de comandos. Pulsa `esc` en cualquier momento para volver a él.

### Navegación básica

Las teclas `hjkl` mueven el cursor (izquierda, abajo, arriba, derecha). También funcionan las teclas de dirección.

```
h ←   j ↓   k ↑   l →
```

Moverse más rápido:

| Comando | Acción |
|---------|--------|
| `w` | Avanzar al inicio de la siguiente palabra |
| `b` | Retroceder al inicio de la palabra anterior |
| `e` | Avanzar al final de la palabra actual |
| `0` | Ir al principio de la línea |
| `$` | Ir al final de la línea |
| `gg` | Ir al principio del archivo |
| `G` | Ir al final del archivo |
| `Ctrl + d` | Bajar media página |
| `Ctrl + u` | Subir media página |

### Edición en modo normal

| Comando | Acción |
|---------|--------|
| `dd` | Borrar (cortar) la línea actual |
| `yy` | Copiar la línea actual |
| `p` | Pegar después del cursor |
| `P` | Pegar antes del cursor |
| `u` | Deshacer |
| `Ctrl + r` | Rehacer |
| `x` | Borrar el carácter bajo el cursor |
| `r` | Reemplazar el carácter bajo el cursor |
| `.` | Repetir el último comando |

## Modo inserción

Para escribir texto. Hay varias formas de entrar:

| Comando | Acción |
|---------|--------|
| `i` | Insertar antes del cursor |
| `a` | Insertar después del cursor |
| `I` | Insertar al principio de la línea |
| `A` | Insertar al final de la línea |
| `o` | Insertar nueva línea debajo |
| `O` | Insertar nueva línea encima |

Pulsa `esc` para volver al modo normal.

## Modo visual

Para seleccionar texto. Pulsa `v` para entrar.

Una vez seleccionado el texto:

| Comando | Acción |
|---------|--------|
| `y` | Copiar la selección |
| `d` | Borrar la selección |
| `>` | Indentar la selección |
| `<` | Quitar indentación |

`V` (mayúscula) selecciona líneas completas. `Ctrl + v` activa el modo visual en bloque (selección rectangular).

## Modo comando

Se accede con `:`. Aquí van los comandos para guardar, salir, buscar y reemplazar.

### Guardar y salir

| Comando | Acción |
|---------|--------|
| `:w` | Guardar |
| `:q` | Salir (si no hay cambios sin guardar) |
| `:wq` | Guardar y salir |
| `:q!` | Salir descartando los cambios |
| `:x` | Guardar y salir (solo escribe si hay cambios) |

### Buscar

Pulsa `/` seguido del término a buscar y `enter`:

```
/función
```

| Comando | Acción |
|---------|--------|
| `n` | Siguiente coincidencia |
| `N` | Coincidencia anterior |

### Buscar y reemplazar

Reemplazar en la línea actual:

```
:s/viejo/nuevo
```

Reemplazar en todo el archivo:

```
:%s/viejo/nuevo/g
```

Con confirmación antes de cada reemplazo:

```
:%s/viejo/nuevo/gc
```

## El comando más importante

Si no recuerdas nada más, recuerda esto: si Vim se comporta de forma inesperada, pulsa `esc` varias veces para volver al modo normal y retomar el control.
