
// 1.- obten el factorial de un  num dado como parametro
function obtenerFactorial(n) {
    if (n === 0) {
        // Si n es 0, el factorial es 1
        console.log(1);
    } else {
        // Inicializar la variable factorial con el valor de n
        let factorial = n;

        // Calcular el factorial
        for (let i = n - 1; i > 0; i--) {
            factorial *= i;
        }

        // Imprimir el resultado
        console.log(factorial);
    }
}

// Ejemplo de uso
obtenerFactorial(5);


//2.- obten la suma de los numeros pares de un array dado como argumento de una funcion:

function sumaNumerosPares(n) {
    // Verificamos que n sea un número positivo
    if (typeof n !== 'number' || n < 0) {
        return "Por favor, proporciona un número entero positivo.";
    }

    // Creamos un array para almacenar los números pares
    let numerosPares = [];

    // Iteramos desde 1 hasta n
    for (let i = 1; i <= n; i++) {
        // Si i es par, lo añadimos al array
        if (i % 2 === 0) {
            numerosPares.push(i);
        }
    }

    // Utilizamos el método reduce para sumar los números del array
    const suma = numerosPares.reduce((acumulador, numero) => acumulador + numero, 0);

    return suma;
}

// Ejemplo de uso
const resultado = sumaNumerosPares(10);
console.log(resultado);  // Salida: 30

// 3.- invertir cadena:

function invertirCadena(cadena) {
    // Verificamos que se haya proporcionado una cadena
    if (typeof cadena !== 'string') {
        return "Por favor, proporciona una cadena de texto.";
    }

    // Creamos un array para almacenar los caracteres invertidos
    let cadenaInvertida = [];

    // Iteramos desde el final hasta el principio de la cadena
    for (let i = cadena.length - 1; i >= 0; i--) {
        // Añadimos cada carácter al array
        cadenaInvertida.push(cadena[i]);
    }

    // Convertimos el array a cadena uniendo sus elementos
    const resultado = cadenaInvertida.join('');

    return resultado;
}

// Ejemplo de uso
const cadenaOriginal = "Hola, mundo!";
const resultadoInversion = invertirCadena(cadenaOriginal);
console.log(resultadoInversion);  // Salida: "!odnum ,aloH"

const cadena2 = "volvemos a invertir";
const rsdoInversion2 = invertirCadena(cadena2);
console.log(rsdoInversion2);










