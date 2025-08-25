function* simpleGenerator() {
  yield 10; // Pausa y devuelve 10
  yield 20; // Pausa y devuelve 20
  return 30; // Finaliza la función y devuelve 30
}

const gen = simpleGenerator();

console.log(gen.next()); // { value: 10, done: false }
console.log(gen.next()); // { value: 20, done: false }
console.log(gen.next()); // { value: 30, done: true }
console.log(gen.next()); // { value: undefined, done: true }