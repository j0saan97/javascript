// FACTORIAL DE UN NUMERO:

function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Output: 120

/*
 La función se llama a sí misma con un argumento reducido en cada llamada hasta que 
 n alcanza el valor de 0, momento en el que se devuelve 1.
*/



// FIBONNACCI:

function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(6)); // Output: 8
console.log(fibonacci(10));

/*
calcula el término n de la secuencia de Fibonacci. Cada término de la secuencia es la suma de los dos términos
 anteriores. La función se llama a sí misma con valores decrementados de n hasta que n sea menor o igual a 1
*/



