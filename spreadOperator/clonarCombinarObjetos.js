const base = { a: 1, b: 2 };
const extras = { b: 20, c: 3 };

// ─ Clonar un objeto
const copiaBase = { ...base };
console.log(copiaBase);          // { a: 1, b: 2 }

// ─ Combinar objetos (propiedades de `extras` sobrescriben `base`)
const combinado = { ...base, ...extras };
console.log(combinado);          // { a: 1, b: 20, c: 3 }

// ─ Añadir nuevas propiedades
const extendido = { id: 123, ...base, activo: true };
console.log(extendido);          // { id: 123, a: 1, b: 2, activo: true }
