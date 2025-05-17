function division(a, b) {
    try {
        if (b === 0) {
            throw new Error('División por cero no permitida');
        }
        return a / b;
    } catch (error) {
        // Captura cualquier error que ocurra dentro del bloque try
        console.error('Error:', error.message);
        return error.message; // Retorna el mensaje de error en lugar de null
    } finally {
        // Este bloque se ejecuta siempre, independientemente de si hay un error o no
        console.log('Bloque finally ejecutado');
    }
}

console.log(division(10, 2)); // Salida esperada: 5
console.log(division(10, 0)); // Salida esperada: Error: División por cero no permitida, Bloque finally ejecutado


function calcularRaizCuadrada(numero) {
    try {
        if (numero < 0) {
            throw new Error('No se puede calcular la raíz cuadrada de un número negativo');
        }
        return Math.sqrt(numero);
    } catch (error) {
        // Captura cualquier error que ocurra dentro del bloque try
        console.error('Error:', error.message);
        return error.message; // Retorna null en caso de error
    } finally {
        // Este bloque se ejecuta siempre, independientemente de si hay un error o no
        console.log('Operación de cálculo de raíz cuadrada completada');
    }
}

console.log(calcularRaizCuadrada(16)); // Salida esperada: 4
console.log(calcularRaizCuadrada(-5)); // Salida esperada: Error: No se puede calcular la raíz cuadrada de un número negativo, Operación de cálculo de raíz cuadrada completada