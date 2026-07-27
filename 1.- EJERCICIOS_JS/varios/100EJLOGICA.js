// 1.- Crear funcion que verifique que la contra sea igual a tokeen455! o apuesticoo90/
function contraValida(contraseña) {
    if (contraseña == "tokeen455!" || contraseña == "apuesticoo90/") {
        console.log("La contraseña es correcta");
    } else {
        console.log("La contraseña es incorrecta");
    }    
}

let prueba1 = contraValida("tokeen455!");
let prueba2 = contraValida("tokeen4364");
let prueba3 = contraValida("tokeedg");


console.log(prueba1);
console.log(prueba2);
console.log(prueba3);


// 2: función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos.
//Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40 %.De lo contrario retornar 0.

function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        return ingresos * 0.4;
    } else {
        return 0;
    }
}

let prueb10 = calcularImpuestos(18, 2000);
let prueb11 = calcularImpuestos(20, 10000);
let prueb12 = calcularImpuestos(16, 3500);

console.log(prueb10);
console.log(prueb11);
console.log(prueb12);


// 3: El BMI se calcula con la siguiente formula: peso / altura^2
//Escribir una función llamada bmi que reciba dos argumentos: peso y altura, y retorne un string con las siguientes posibilidades:

/*
"Bajo de peso" si el BMI < 18.5       "Normal" si está entre 18.5 y 24.9   "Sobrepeso" si está entre 25 y 29.9       "Obeso" si es igual o mayor a 30 */

function calcularIMC(peso, altura) {
    function IndiceMasaCorporal(peso, altura) {
        let ibm = peso / (altura * altura);
        let ibmAjustao = ibm * 10000;
        let ibmRedondeao = ibmAjustao.toFixed(1);
        return ibmRedondeao;
    }

    function FiltrooIbm(ibmRedondeao) {
        if (ibmRedondeao < 18.5) {
            return "Bajo de peso";
        } else if (ibmRedondeao >= 18.5 && ibmRedondeao <= 24.9) {
            return "Normal";
        } else if (ibmRedondeao >= 25 && ibmRedondeao <= 29.9) {
            return "Sobrepeso";
        } else if (ibmRedondeao >= 30) {
            return "Obeso";
        }
    }

    let ibmRedondeao = IndiceMasaCorporal(peso, altura);
    let resultado = FiltrooIbm(ibmRedondeao);
    console.log(resultado);
}

calcularIMC(70, 160);
calcularIMC(80, 195);
calcularIMC(60, 165);
calcularIMC(120, 180);


// 4.- Escribir una función llamada imprimirArreglo que reciba un arreglo e imprima cada elemento en una línea a parte:

function imprimirArreglo(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

let array1 = [4, 62, true, 20, false]; // Crear un arreglo con los elementos deseados
imprimirArreglo(array1); // Llamar a la función imprimirArreglo con el arreglo como argumento


/* 5. - Escribe una función llamada likes que reciba un número y retorne un string utilizando el formato de K para miles y M para millones.
Ej:
    1400 se convierte en 1K
    34,567 se convierte en 34K
    7’456,345 se convierte en 7M.
    Si el número es menor a 1000 se debe devolver el mismo número como un string.
*/

function likes(numero) {
    if (numero < 1000) {
        return "El num es " + numero.toString();
    } else if (numero < 1000000) {
        return (numero / 1000).toFixed(0) + "K";
    } else {
        return (numero / 1000000).toFixed(0) + "M";
    }
}

// Ejemplos de uso
console.log(likes(1400));      // Salida esperada: 1K
console.log(likes(34567));     // Salida esperada: 35K
console.log(likes(7456345));   // Salida esperada: 7M
console.log(likes(999));       // Salida esperada: 999

/* 6.- 
Escribir una función llamada fizzBuzz que reciba un número y retorne un string de acuerdo a:
    "fizz" si el número es múltiplo de 3.
    "buzz" si el número es múltiplo de 5.
    "fizzbuzz" si el número es múltiplo tanto de 3 como de 5.
    Si no cumple ninguna de las condiciones anteriores debe retornar el mismo número. */

function fizzBuzz(num) {
    if (num % 3 == 0 && num % 5 == 0) {
    console.log("fizzbuzz");
    } else if (num % 3 == 0) {
        console.log("fizz");
    } else if (num % 5 == 0) {
        console.log("buzz");
    } else {
        console.log(num);
    }

}

let proba12 = fizzBuzz(30);  
let proba13 = fizzBuzz(10);
let proba14 = fizzBuzz(4);   
    
// 7-.- Escribir una función llamada contarRango que reciba dos números y retorne cuántos números que hay entre ellos (excluyéndolos):
// console.log(contarRango(1, 9)) // 7

function contarRango(num1, num2) {
    //num 2 debe ser mayor a num 1
    if (num2 > num1) {
        rsdo = (num2 - num1) - 1;
        console.log(rsdo);
    } else {
        console.log("el 1er numero debe ser menor al 2o");
    }
}

let proba34 = contarRango(10, 20);
let proba35 = contarRango(100, 60);
let proba36 = contarRango(100, 600);

// 8.-Escribir una función llamada numeroDeAes que reciba un string y retorne el número de veces que aparece la letra "a":

function numeroDeAes(cadenaa) {
    let contador = 0;
    for (let i = 0; i < cadenaa.length; i++) {
        if (cadenaa[i] === "a") {
            contador++;
        }
    }
    console.log(contador);
}

numeroDeAes("calabazafantastica");
numeroDeAes("atodapastillacamiprima");

// 9.- Escribir una función llamada multiplicarArreglo que reciba un arreglo de números y retorne la multiplicación de todos los elementos.

function multiplicarArreglo() {
    let rsdo = 1;
    // Convierte los argumentos pasados a la función en un array
    let array = Array.from(arguments);
    for (let i = 0; i < array.length; i++) {
        rsdo *= array[i];
    }
    return rsdo;
}

// Ejemplo de uso
console.log(multiplicarArreglo(6, 4, 2, 10)); // Output esperado: 480
console.log(multiplicarArreglo(6, 4, 5));

// 10 .- Escribir una función llamada removerCeros que reciba un arreglo de números y retorne un nuevo arreglo excluyendo los ceros (0).

// opcion 1:
function removerCeros() {
    let numZeros = Array.from(arguments);
    for (let i = 0; i < numZeros.length; i++) {
        if (numZeros[i] === 0) {
            numZeros.splice(i, 1); // Elimina el elemento en la posición i
            i--; // Decrementa i para compensar el cambio en la longitud del array
        }
    }
    return numZeros;
}

console.log(removerCeros(3, 1, 0, 7, 0, 2, 0, 1, 3, 0)); //

/*Cuando eliminas un elemento de un array utilizando splice(), los índices de los elementos restantes cambian. Por lo tanto,
 si no decrementas i, en la próxima iteración, i avanzará al siguiente elemento sin revisar el elemento que ahora ocupa la 
 posición i, ya que esa posición se ha desplazado hacia atrás debido a la eliminación del elemento anterior. */


//opcion2:

function removerCeros() {
    let numZeros = Array.from(arguments);
    let sinCeros = [];
    for (let i = 0; i < numZeros.length; i++) {
        if (numZeros[i] !== 0) {
            sinCeros.push(numZeros[i]);
        }
    }
    return sinCeros;
}

// Ejemplo de uso:
let arregloConCeros = [0, 1, 0, 2, 0, 3, 0];
let nuevoArreglo = removerCeros(...arregloConCeros);
console.log(nuevoArreglo); // Esto imprimirá: [1, 2, 3]


// 11: Inversión de cadena: Crea una función que invierta una cadena de texto.

/*LOGICA: Creamos un bucle for que comience su iteración por el final de la cadena
y en cada iteracción añade cada índice de la cadena a un nuevo array llamado cadenaInvertida

- se recorre la cadena de texto desde el final (cadena.length - 1) 
- Después, se utiliza el método join() para unir todos los elementos del array en una cadena y se devuelve esa cadena invertida. */

function invertirCadena(cadena) {
    let cadenaInvertida = [];
    for (let i = cadena.length - 1; i >= 0; i--) {
        cadenaInvertida.push(cadena[i]);
    }
    return cadenaInvertida.join(''); // Convertir el array en una cadena y devolverla
}

// Ejemplo de uso:
let texto = "Hola mundo!";
let textoInvertido = invertirCadena(texto);
console.log(textoInvertido); // Esto imprimirá "!odnum aloH"


//12 : Mayor de tres números: Escribe una función que determine cuál de tres números es el mayor.

function mayorDe3(a, b, c) {
    if (a > b && a > c) {
        return a;
    }
    else if (b > a && b > c) {
        return b;
        }
    else if (c > a && c > b) {
         return c;
        }
}
    
let mayorX = mayorDe3(6, 7, 10)
console.log(mayorX);

//12 : Generador de serie Fibonacci: Escribe una función que genere los primeros n términos de la serie Fibonacci.

function fibonacci(n) {
    let fibonacciSeries = [0, 1]; // Inicializamos la serie con los dos primeros términos

    if (n <= 0) {
        return "El número de términos debe ser mayor que 0.";
    } else if (n === 1) {
        return [0]; // Si solo se solicita un término, devolvemos solo el primer término
    } else if (n === 2) {
        return fibonacciSeries; // Si se solicitan dos términos, devolvemos la serie completa hasta el momento
    }

    // Generamos los términos adicionales de la serie de Fibonacci
    for (let i = 2; i < n; i++) {
        let nextTerm = fibonacciSeries[i - 1] + fibonacciSeries[i - 2];
        fibonacciSeries.push(nextTerm);
    }

    return fibonacciSeries;
}

// Ejemplo de uso:
console.log(fibonacci(10));

// 13: Filtro de números primos: Escribe una función que tome un array
//de números y devuelva un nuevo array solo con los números primos

function devuelvePrimo() {
    let arrayAEvaluar = arguments;
    let arrayPrimos = [];
    
    // Función para verificar si un número es primo
    function esPrimo(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    }

    for (let i = 0; i < arrayAEvaluar.length; i++) {
        if (esPrimo(arrayAEvaluar[i])) {
            arrayPrimos.push(arrayAEvaluar[i]);
        }
    }
    
    return arrayPrimos;
}

// Ejemplo de uso
let arrayOriginal = [6, 10, 8, 20, 40, 7, 13, 17];
let arrayFiltrado = devuelvePrimo(...arrayOriginal);
console.log(arrayFiltrado); // Output: [7, 13, 17]


    
