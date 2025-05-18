// Usamos spread para recolectar argumentos variables
function sumar(...numeros) {
  return numeros.reduce((acc, n) => acc + n, 0);
}
// acc (de accumulator) → es el valor acumulado hasta la iteración previa
console.log(sumar(1, 2, 3));     // 6
console.log(sumar(4, 5));        // 9
console.log(sumar());            // 0
