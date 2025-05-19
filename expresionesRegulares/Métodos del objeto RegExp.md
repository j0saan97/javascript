 Métodos del objeto RegExp

1. test(str)
   → Devuelve true o false dependiendo de si la expresión regular encuentra coincidencia en la cadena.
   Ej: /a/.test("casa") → true

2. exec(str)
   → Devuelve un array con los detalles de la primera coincidencia encontrada o null si no hay coincidencia.
   Ej: /a/.exec("casa") → ["a"]

3. compile() [❌ Obsoleto]
   → Se usaba para recompilar una expresión regular, pero ya no se utiliza en JavaScript moderno.

4. toString()
   → Devuelve la expresión regular como una cadena.
   Ej: /abc/.toString() → "/abc/"

5. source
   → Propiedad que devuelve solo el patrón como string, sin los delimitadores `/ /`.
   Ej: (/hola/i).source → "hola"

6. flags
   → Devuelve los modificadores usados (como "g", "i", "m", etc.).
   Ej: (/hola/gi).flags → "gi"

7. lastIndex
   → Propiedad usada con expresiones regulares con la bandera `g` o `y`, indica el índice donde comenzar la próxima búsqueda.

======================
 Principales modificadores (flags)
======================

- g → global: busca todas las coincidencias, no solo la primera
- i → ignoreCase: ignora mayúsculas/minúsculas
- m → multiline: trata ^ y $ como inicio/fin de línea en lugar de inicio/fin de todo el texto
- s → dotAll: permite que el `.` coincida con caracteres de nueva línea
- u → unicode: trata el patrón como una secuencia Unicode
- y → sticky: coincide desde la posición exacta indicada por lastIndex