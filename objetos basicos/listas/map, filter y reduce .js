// Método map(): El método map() se utiliza para crear un nuevo array con los resultados de aplicar una función a cada elemento de un array:
const numeros = [1, 2, 3, 4, 5];
const multiplicados = numeros.map(numero => numero * 2);
console.log(multiplicados);

// Método filter(): El método filter() se utiliza para crear un nuevo array con todos los elementos que cumplan una
// condición especificada en una función.

const numeroos = [1, 2, 3, 4, 5];
const pares = numeroos.filter(numeroo => numeroo % 2 === 0);
console.log(pares); // Salida: [2, 4]

// Método reduce(): El método reduce() se utiliza para reducir los elementos de un array a un único valor, aplicando una función acumuladora:

const numeross = [1, 2, 3, 4, 5];
const suma = numeross.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(suma); // Salida: 15