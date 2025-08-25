/*Pasar Valores de Entrada (.next(value))
Los generadores pueden recibir valores inyectados por el método .next(), reanudando la ejecución con ese nuevo valor. */

function* receiverGenerator() {
  const input1 = yield 'Dame el primer numero:'; // El valor de yield es el *prompt*
  console.log(`Recibi: ${input1}`); // 'input1' obtiene el valor pasado por el siguiente .next()

  const input2 = yield 'Dame el segundo numero:';
  console.log(`Recibi: ${input2}`);

  return input1 + input2;
}

const genReceiver = receiverGenerator();

// 1. Inicia y obtiene el primer 'yield'
console.log(genReceiver.next().value); // Dame el primer numero:

// 2. Inyecta 5. La función se reanuda y 5 se asigna a 'input1'
console.log(genReceiver.next(5).value); // Dame el segundo numero:

// 3. Inyecta 10. La función se reanuda y 10 se asigna a 'input2'
console.log(genReceiver.next(10)); // Recibi: 10 // { value: 15, done: true }