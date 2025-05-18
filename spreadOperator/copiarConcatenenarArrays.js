const numeros1 = [1, 2, 3];
const numeros2 = [4, 5, 6];

// ─ Copia un array completo
const copiaNumeros = [...numeros1];
console.log(copiaNumeros);       // [1, 2, 3]

// ─ Concatena varios arrays
const todos = [...numeros1, ...numeros2];
console.log(todos);              // [1, 2, 3, 4, 5, 6]

// ─ Insertar elementos en medio
const intercalado = [0, ...numeros1, 99, ...numeros2];
console.log(intercalado);        // [0, 1, 2, 3, 99, 4, 5, 6]
