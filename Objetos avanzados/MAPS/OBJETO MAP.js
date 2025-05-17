/* OBJETO MAP: Un Map es una estructura de datos en JavaScript que almacena pares clave-valor y permite el uso de claves de cualquier tipo
 de dato, incluyendo objetos, como clave para acceder a los valores correspondientes. A diferencia de los objetos,un Map conserva el orden
  de inserción de los elementos.*/
  
  // Crear un nuevo Map
const miMapa = new Map();

// Agregar elementos al Map
miMapa.set("nombre", "Juan");
miMapa.set("edad", 30);
miMapa.set("ciudad", "Nueva York");

// Acceder a elementos del Map
console.log(miMapa.get("nombre")); // "Juan"
console.log(miMapa.get("edad"));   // 30
console.log(miMapa.get("ciudad")); // "Nueva York"

// Tamaño del Map
console.log(miMapa.size); // 3

// Comprobar si una clave existe en el Map
console.log(miMapa.has("nombre")); // true
console.log(miMapa.has("email"));  // false

// Eliminar un elemento del Map
miMapa.delete("ciudad");

// Iterar a través de las claves y valores del Map
miMapa.forEach((valor, clave) => {
  console.log(`${clave}: ${valor}`);
});

// mostrar todas las claves y valores de un mapa utilizando un bucle for...of

for (let [clave, valor] of miMapa) {
  console.log(`${clave}: ${valor}`);
}
