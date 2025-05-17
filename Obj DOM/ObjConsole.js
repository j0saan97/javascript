// 1. console.log()
// Muestra un mensaje general en la consola. Es el método más utilizado para mostrar información.
console.log("Mensaje informativo");
console.log("Valor de la variable:", 42);

// 2. console.error()
// Muestra un mensaje de error. Es útil para indicar errores o excepciones en el código.
console.error("Ha ocurrido un error");

// 3. console.warn()
// Muestra un mensaje de advertencia. Se utiliza para señalar posibles problemas.
console.warn("Este es un mensaje de advertencia");

// 4. console.info()
// Muestra un mensaje informativo. Similar a console.log(), pero generalmente para información más estructurada.
console.info("Información adicional");

// 5. console.table()
// Muestra datos en formato tabular. Es útil para visualizar matrices u objetos de manera clara.
const usuarios = [
  { nombre: "Alice", edad: 25 },
  { nombre: "Bob", edad: 30 }
];
console.table(usuarios);

// 6. console.debug()
// Muestra un mensaje de depuración. Similar a console.log(), pero enfocado en la depuración.
console.debug("Mensaje de depuración");

// 7. console.group() y console.groupEnd()
// Agrupa mensajes en una sección expandible en la consola. console.group() inicia el grupo y console.groupEnd() lo cierra.
console.group("Grupo de mensajes");
console.log("Mensaje dentro del grupo");
console.groupEnd();

// 8. console.groupCollapsed()
// Similar a console.group(), pero el grupo aparece colapsado por defecto en la consola.
console.groupCollapsed("Grupo colapsado");
console.log("Mensaje dentro del grupo colapsado");
console.groupEnd();

// 9. console.time() y console.timeEnd()
// Mide el tiempo transcurrido entre las llamadas a console.time() y console.timeEnd(). Útil para medir el rendimiento de bloques de código.
console.time("Temporizador");
// Simulación de código cuyo tiempo de ejecución queremos medir
for (let i = 0; i < 1000000; i++) {}
console.timeEnd("Temporizador"); // Muestra el tiempo transcurrido en milisegundos

// 10. console.assert()
// Muestra un mensaje de error si la expresión es falsa. No muestra nada si la expresión es verdadera.
console.assert(1 === 2, "Esto no debería pasar"); // Se mostrará el mensaje de error

// 11. console.clear()
// Limpia la consola, eliminando todos los mensajes anteriores.
console.clear();
