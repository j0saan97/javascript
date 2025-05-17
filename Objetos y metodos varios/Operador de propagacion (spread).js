/* El operador de propagación, también conocido como "spread operator", se representa con tres puntos consecutivos (...). 
En JavaScript, se utiliza para descomponer arrays y objetos en elementos individuales y para combinar arrays o copiar objetos
 de una manera más conveniente. */

// Descomponer un array:
const frutas = ["manzana", "plátano", "naranja"];
const [...frutasCopia] = frutas; // Copia el array 'frutas' en 'frutasCopia'

console.log(frutasCopia); // ["manzana", "plátano", "naranja"]

// Combinar arrays:

const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];
const numerosCombinados = [...numeros1, ...numeros2];

console.log(numerosCombinados); // [1, 2, 3, 4, 5, 6]

//  Clonar objetos:
const person = { nombre: "Juan", edad: 30 };
const personCopia = { ...person }; // Clona el objeto 'persona' en 'personaCopia'

console.log(personaCopia); // { nombre: "Juan", edad: 30 }

// Agregar propiedades a un objeto clonado:

const persona = { nombre: "Juan", edad: 30 };
const personaModificada = { ...persona, ciudad: "Nueva York" };

console.log(personaModificada); // { nombre: "Juan", edad: 30, ciudad: "Nueva York" }

// Combinar objetos:

const datos1 = { a: 1, b: 2 };
const datos2 = { b: 3, c: 4 };
const datosCombinados = { ...datos1, ...datos2 };

console.log(datosCombinados); // { a: 1, b: 3, c: 4 }
// nota: b se sobrescribe y guarda el ultimo valor asignado.

