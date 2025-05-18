const capitales = new Map();

// Agregar elementos
capitales.set("España", "Madrid");
capitales.set("Francia", "París");
capitales.set("Italia", "Roma");

// Acceder a un valor
console.log(capitales.get("Francia")); // París

// Verificar existencia
console.log(capitales.has("Italia")); // true

// Tamaño del Map
console.log(capitales.size); // 3



const colores = new Map([
  ['rojo', '#FF0000'],
  ['verde', '#00FF00'],
  ['azul', '#0000FF']
]);

// Iterar claves y valores
for (const [clave, valor] of colores) {
  console.log(`${clave} → ${valor}`);
}



// Objeto → Map
const obj = { a: 1, b: 2 };
const mapa = new Map(Object.entries(obj));
console.log(mapa); // Map(2) {"a" => 1, "b" => 2}

// Map → Objeto
const objDesdeMap = Object.fromEntries(mapa);
console.log(objDesdeMap); // { a: 1, b: 2 }



// Eliminar elementos y limpiar 
const frutas = new Map([
  ['manzana', 5],
  ['banana', 3],
]);


frutas.delete('banana');
console.log(frutas.has('banana')); // false

frutas.clear();
console.log(frutas.size); // 0
