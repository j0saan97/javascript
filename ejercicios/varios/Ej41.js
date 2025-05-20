// Función para invertir los dígitos de un número entero
function invertirNumero(numero) {
    // Convertimos el número a string, lo dividimos en un array de caracteres, 
    // lo invertimos y lo volvemos a unir.
    const invertido = Math.abs(numero).toString().split('').reverse().join('');

    // Convertimos el resultado de vuelta a número y preservamos el signo original
    return numero < 0 ? -parseInt(invertido) : parseInt(invertido);
}

// Ejemplo de uso
console.log(invertirNumero(12745)); // Salida: 54321
console.log(invertirNumero(-98765)); // Salida: -56789