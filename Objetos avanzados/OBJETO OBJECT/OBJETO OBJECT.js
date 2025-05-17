/* El objeto Object en JavaScript es un objeto global que sirve como prototipo para todos los objetos en JavaScript. 
Proporciona una serie de métodos y propiedades que son fundamentales para trabajar con objetos en JavaScript. */

// Object.create(): : Crea un nuevo objeto con el prototipo especificado
const persona = {
  nombre: "Juan",
  edad: 30
};

const otraPersona = Object.create(persona);
otraPersona.nombre = "María";
otraPersona.edad = 25;

// Object.keys(obj): Devuelve un array de las claves (propiedades) de un objeto.

const personaa = {
  nombre: "Juan",
  edad: 30
};

const keys = Object.keys(personaa); // ["nombre", "edad"]

// Object.values(obj): Devuelve un array de los valores de las propiedades de un objeto.
const personas = {
  nombre: "Juan",
  edad: 30
};

const values = Object.values(personas); // ["Juan", 30]

// Object.entries(obj): Devuelve un array de arrays, donde cada subarray contiene una pareja clave-valor de las propiedades de un objeto.

const people = {
  nombre: "Juan",
  edad: 30
};

const entries = Object.entries(people); // [["nombre", "Juan"], ["edad", 30]]

// Object.assign(destino, origen1, origen2): Copia las propiedades de uno o más objetos de origen (sources) en un objeto destino (target).
// Puede utilizarse para clonar objetos o combinarlos.

const destino = {};
const origen1 = { a: 1 };
const origen2 = { b: 2 };

Object.assign(destino, origen1, origen2);
// destino ahora contiene { a: 1, b: 2 }

/* Object.freeze(obj): Hace que un objeto sea inmutable, 
lo que significa que no se pueden agregar, eliminar o modificar sus propiedades una vez congelado.*/

const adulto = {
  nombre: "Juan",
  edad: 30
};

Object.freeze(adulto);
adulto.nombre = "María"; // Esto no tiene efecto

/* Object.seal(obj): Sella un objeto, lo que significa que no se pueden agregar ni eliminar propiedades,
 pero aún se pueden modificar las propiedades existentes*/




