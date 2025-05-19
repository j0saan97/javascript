// ej 1: Evitar conflictos de propiedades con Symbols
const COLOR = Symbol("color");

const obj1 = {
  [COLOR]: "rojo",
  nombre: "obj1"
};

const obj2 = {
  [COLOR]: "azul",
  nombre: "obj2"
};

// Aunque tienen la misma descripción, los Symbols son únicos
console.log(obj1[COLOR]); // rojo
console.log(obj2[COLOR]); // azul

// ej 2: Usar Symbols para implementar interfaces o protocolos personalizados

// Definimos un Symbol para una "función especial" en objetos
const iterable = Symbol("iterable");

// Objeto que implementa la "interfaz" iterable personalizada
const miIterable = {
  [iterable]() {
    let count = 0;
    return {
      next() {
        if (count < 3) {
          return { value: count++, done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

// Ejecutamos la función asociada al Symbol
const iter = miIterable[iterable]();

console.log(iter.next()); // { value: 0, done: false }
console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { done: true }
