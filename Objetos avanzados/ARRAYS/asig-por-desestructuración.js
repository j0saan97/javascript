/* La asignación por desestructuración (también conocida como "destructuring" en inglés) es una característica de JavaScript que permite
 descomponer un objeto o un array en partes más pequeñas y asignar esas partes a variables individuales de una manera más concisa. Esto es
  especialmente útil cuando deseas acceder a propiedades de objetos o elementos de arrays de una manera más eficiente y legible.

La asignación por desestructuración se realiza utilizando patrones de asignación que coinciden con la estructura del objeto o array 
que deseas descomponer. Los patrones se definen dentro de corchetes {} para objetos y corchetes [] para arrays. */

// Desestructuración de Objetos:

const persona = { nombre: "Juan", edad: 30 };

// Desestructurar el objeto 'persona'
 const { nombre, edad } = persona;

console.log(nombre); // "Juan"
console.log(edad);   // 30


// Desestructuracion de arrays: 

const frutas = ["manzana", "plátano", "naranja"];

const [fruta1, fruta2, fruta3] = frutas;

console.log(fruta1); // "manzana"
console.log(fruta2); // "plátano"
console.log(fruta3); // "naranja"

/* La asignación por desestructuración también se puede utilizar 
para asignar propiedades de objetos anidados o acceder a elementos de arrays anidados. */


// Desestructuración de Objetos Anidados:
const personita = { nombres: "Juan", edades: 30, direccion: { ciudad: "Nueva York", codigoPostal: "10001" } };

// Desestructurar el objeto 'personita' y su propiedad 'direccion'
const { nombres, edades, direccion: { ciudad, codigoPostal } } = personita;

console.log(ciudad);       // "Nueva York"
console.log(codigoPostal); // "10001"

// Desestructuración de Arrays Anidados:
const datos = [1, [2, 3], 4];

// Desestructurar el array 'datos' y el array anidado
const [valor1, [valor2, valor3], valor4] = datos;

console.log(valor2); // 2
console.log(valor3); // 3
