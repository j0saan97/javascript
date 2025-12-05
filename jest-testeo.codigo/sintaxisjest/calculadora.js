// calculadora.js

/**
 * Multiplica dos números.
 * @param {number} a - Primer número.
 * @param {number} b - Segundo número.
 * @returns {number} El resultado de la multiplicación.
 */
function multiplicar(a, b) {
    return a * b;
}

/**
 * Divide dos números y maneja el caso de división por cero.
 * Devuelve un objeto con cociente y resto.
 * @param {number} a - Numerador.
 * @param {number} b - Denominador.
 * @returns {object} Un objeto con propiedades 'cociente' y 'resto'.
 * @throws {Error} Si el denominador es cero.
 */
function dividir(a, b) {
    // 1. Manejo de error: Lanza el error para que el test .toThrow() pase.
    if (b === 0) {
        throw new Error('No se puede dividir por cero');
    }

    // 2. Ejecuta la lógica de la división normal.
    // Esto asegura que el test expect(dividir(10, 2)).toBe(5) pase.
    return a / b;
}

function dividirConCocienteResto(a, b) {
    if (b === 0) {
        throw new Error('No se puede dividir por cero');
    }

    const cociente = Math.floor(a / b);
    const resto = a % b;

    return { cociente, resto };
}


// Es crucial exportar las funciones para que puedan ser importadas
// en el archivo de tests usando 'require()'.
module.exports = {
    multiplicar,
    dividir,
    dividirConCocienteResto,
};