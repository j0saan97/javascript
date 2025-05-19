
// ej 1: empieza por caracter a: (/^a/i) --> para minus y mayusculas
const regex = /^a/;

console.log(regex.test("ana"));     // true
console.log(regex.test("banana"));  // false
console.log(regex.test("amarillo")); // true


// ej 2 termina por: /a$/
const regexx = /a$/;

console.log(regexx.test("casa"));     // true
console.log(regexx.test("casita"));   // true
console.log(regexx.test("carro"));    // false

// ej 3 Contiene la letra e: /e/

const contieneE = /e/;
const contieneJ = /j/;

console.log(contieneE.test("mesa"));      // true
console.log(contieneE.test("casa"));      // false

console.log(contieneJ.test("jamón"));     // true
console.log(contieneJ.test("queso"));     // false



