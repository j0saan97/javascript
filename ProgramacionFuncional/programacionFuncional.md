¿Qué es la Programación Funcional?
La programación funcional es un paradigma de programación que se basa en el uso de funciones matemáticas puras para construir software. Este enfoque busca crear programas mediante la composición y aplicación de funciones, evitando los estados mutables y los efectos secundarios.

A diferencia de la programación imperativa, donde se manipula el estado y se ejecutan secuencialmente instrucciones para cambiar dicho estado, en la programación funcional el foco está en qué se quiere calcular, no en cómo hacerlo paso a paso.

Conceptos Fundamentales de la Programación Funcional
1. Funciones puras
Una función pura es aquella que:

Para los mismos argumentos, siempre devuelve el mismo resultado.

No tiene efectos secundarios (no modifica variables externas, no cambia archivos, ni muestra cosas por pantalla, etc.).

Por ejemplo:

function suma(a, b) {
  return a + b;
}

sum(a,b) es pura porque siempre que le pases 2 y 3 te devolverá 5 y no modificará nada fuera de sí misma.

Las funciones puras hacen el código más predecible, fácil de testear y depurar.

2. Inmutabilidad
La inmutabilidad significa que los datos no se modifican una vez creados. En programación funcional, se prefiere crear nuevas estructuras de datos en lugar de cambiar las existentes.

Por ejemplo, en vez de modificar un array original para agregar un elemento, se crea uno nuevo con el elemento añadido.

Esto ayuda a evitar errores relacionados con el estado compartido y facilita la concurrencia y el paralelismo.

3. Funciones de orden superior
Son funciones que:

Reciben otras funciones como argumentos, o

Devuelven funciones como resultado.

Esto permite la composición y reutilización de código de manera flexible.

function aplicarOperacion(a, b, operacion) {
  return operacion(a, b);
}

const multiplicar = (x, y) => x * y;

aplicarOperacion(2, 3, multiplicar); // 6

4. Composición de funciones
La composición es combinar funciones para construir nuevas funciones más complejas. Es decir, aplicar una función sobre el resultado de otra.

Matemáticamente, si tienes f y g, la composición f(g(x)) aplica g sobre x y luego f sobre el resultado.

5. Evitar efectos secundarios
Los efectos secundarios son cualquier interacción con el “mundo exterior” que no sea simplemente devolver un valor, como:

Modificar una variable global o externa

Cambiar el estado de un objeto

Leer o escribir en una base de datos o archivo

Mostrar algo en pantalla

En programación funcional, se busca minimizar o controlar los efectos secundarios para mantener las funciones puras y el código predecible.

6. Recursión
En vez de usar bucles (for, while), la programación funcional usa recursión para repetir operaciones. La recursión es cuando una función se llama a sí misma con un caso base para detenerse.

7. Declaratividad
La programación funcional es un estilo declarativo, es decir, describes qué quieres hacer en lugar de cómo hacerlo paso a paso. Esto mejora la legibilidad y mantenibilidad.

Beneficios de la Programación Funcional
Código más predecible: Funciones puras producen resultados confiables.

Facilita el testing: Al no depender de estados externos.

Mayor reutilización: Gracias a funciones de orden superior y composición.

Paralelismo más seguro: Por la inmutabilidad.

Menos bugs relacionados con estado: Al evitar mutaciones.

Lenguajes Funcionales vs Funcional en Otros Lenguajes
Existen lenguajes diseñados para la programación funcional pura, como Haskell, Erlang o Clojure.

Pero la mayoría de lenguajes modernos como JavaScript, Python o Java soportan programación funcional con ciertas limitaciones, permitiendo mezclar paradigmas.

Resumen de las reglas básicas para programar funcionalmente
Escribir funciones puras.

No modificar datos, trabajar con copias inmutables.

Usar funciones de orden superior y composición.

Evitar efectos secundarios.

Usar recursión para iterar.

Pensar de forma declarativa.

