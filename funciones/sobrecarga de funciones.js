// Carga y Sobrecarga de funciones

function suma(a, b) {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return parseInt(a) + parseInt(b);
  } else if (Array.isArray(a) && Array.isArray(b)) {
    return a.concat(b);
  } else {
    return "Argumentos inválidos";
  }
}

console.log(suma(2, 3)); // Salida: 5
console.log(suma('2', '3')); // Salida: 5 (sumando como cadenas)
console.log(suma([1, 2], [3, 4])); // Salida: [1, 2, 3, 4]
console.log(suma('2', 3)); // Salida: "Argumentos inválidos"

/*
Aunque JavaScript no tiene una sobrecarga de funciones como en otros lenguajes, puedes lograr un comportamiento 
similar mediante el uso de lógica condicional para determinar cómo manejar diferentes combinaciones de argumentos.

*/
