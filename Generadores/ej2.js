function* countToFive() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

// El bucle for...of consume la secuencia de 'yield'
for (const val of countToFive()) {
  console.log(val); // Imprime 1, 2, 3, 4, 5
}