/* El objeto Math en JavaScript proporciona una serie de métodos y propiedades
 matemáticas predefinidas que son útiles para realizar cálculos matemáticos en tu programa. */

// Math.random()
 const numeroAleatorio = Math.random(); // Número aleatorio entre 0 y 1

// Math.floor(): redondea hacia abajo
//Math.ceil(): hacia arriba
// Math.round(): al numero entero mas cercano

const numero = 3.7;
const redondeoAbajo = Math.floor(numero); // 3
const redondeoArriba = Math.ceil(numero);   // 4
const redondeoCercano = Math.round(numero); // 4


// Math.min() y Math.max(): Estos métodos se utilizan para encontrar el valor mínimo y máximo de un conjunto de números.

const numeros = [5, 2, 9, 1, 7];
const minimo = Math.min(...numeros); // 1
const maximo = Math.max(...numeros); // 9


//Math.pow(): Calcula una potencia de un número, tomando dos argumentos: la base y el exponente.
const base = 2;
const exponente = 3;
const resultado = Math.pow(base, exponente); // 8 (2^3)

// Math.sqrt(): Calcula la raíz cuadrada de un número.

const numeroo = 16;
const raizCuadrada = Math.sqrt(numeroo); // 4

// Math.abs(): Devuelve el valor absoluto de un número, es decir, su valor positivo sin importar si el número es negativo
const numerooo = -5;
const valorAbsoluto = Math.abs(numerooo); // 5

// Math.PI y Math.E: Propiedades que almacenan los valores de π (pi) y e (constante de Euler), respectivamente.
const valorPi = Math.PI;
const valorE = Math.E;

