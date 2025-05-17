// funcion pura
function suma(a, b) {
  return a + b;
}

console.log(suma(2, 3)); // 5
console.log(suma(2, 3)); // 5 (siempre igual)

// Funciones de orden superior: Funciones que reciben otras funciones o devuelven funciones.

// Función que recibe otra función como argumento
function aplicarOperacion(a, b, operacion) {
  return operacion(a, b);
}

// Definimos una función que multiplica
const multiplicar = (x, y) => x * y;

console.log(aplicarOperacion(5, 3, multiplicar)); // 15

//  Inmutabilidad con arrays : Evitar modificar el array original, crear una copia con los cambios

const numeros = [1, 2, 3];

// Agregar un número sin modificar el array original
const nuevosNumeros = [...numeros, 4];

console.log(numeros);       // [1, 2, 3]
console.log(nuevosNumeros); // [1, 2, 3, 4]

// Uso de map, filter y reduce Estas son funciones muy usadas en programación funcional para transformar, filtrar o acumular datos.

const numeroos = [1, 2, 3, 4, 5];

// map: transforma cada elemento
const cuadrados = numeros.map(x => x * x);
console.log(cuadrados); // [1, 4, 9, 16, 25]

// filter: filtra elementos que cumplen condición
const pares = numeroos.filter(x => x % 2 === 0);
console.log(pares); // [2, 4]

// reduce: reduce a un solo valor (acumula)
const sumaTotal = numeroos.reduce((acum, curr) => acum + curr, 0);
console.log(sumaTotal); // 15

// Composición de funciones Combinar funciones pequeñas para crear una función más compleja.

const doblar = x => x * 2;
const incrementar = x => x + 1;

// Componer funciones (incrementar y luego doblar)
const incrementarYDoblar = x => doblar(incrementar(x));

console.log(incrementarYDoblar(3)); // (3 + 1) * 2 = 8

// 6. Recursión en vez de bucles: Calcular factorial usando recursión.

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// 7. Funciones anónimas y flecha : Usar funciones inline y expresiones flecha para escribir código funcional compacto.

const numers = [1, 2, 3, 4, 5];

// Filtrar pares usando función flecha inline
const pars = numers.filter(num => num % 2 === 0);

console.log(pars); // [2, 4]
