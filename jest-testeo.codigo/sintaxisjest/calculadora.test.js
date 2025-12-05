// Nombre del archivo: calculadora.test.js

// 1. Importa el código que quieres testear (si está en otro archivo).
// AÑADIMOS la nueva función 'dividirConCocienteResto' a la desestructuración.
const { multiplicar, dividir, dividirConCocienteResto } = require('./calculadora');

// --- I. TESTS BÁSICOS (Sin Agrupación) ---

// La función 'test' (o 'it', son sinónimos) define un caso de prueba individual.
// Argumento 1: Una cadena descriptiva de lo que la prueba debe hacer.
// Argumento 2: Una función (callback) que contiene la lógica de la prueba.
test('Debe multiplicar dos números positivos correctamente', () => {
    // La función 'expect' envuelve el valor que se está probando (el resultado real).
    // El 'matcher' (.toBe, .toEqual, etc.) compara el resultado real con el valor esperado.
    expect(multiplicar(2, 4)).toBe(8);
});

test('Debe devolver cero al multiplicar por cero', () => {
    // Usamos .toBe(0) para asegurar que el resultado es exactamente cero.
    expect(multiplicar(50, 0)).toBe(0);
});

// --- II. TESTS COMPUESTOS O AGRUPADOS (Usando describe) ---

// La función 'describe' agrupa tests relacionados bajo un bloque temático.
// Esto mejora la organización y la salida de los reportes de Jest.

describe('Pruebas de la función dividir', () => {

    // Test 1 dentro del grupo 'dividir'
    test('Debe dividir un número por 2', () => {
        expect(dividir(10, 2)).toBe(5);
    });

    // Test 2: Comprobando el manejo de errores (un matcher avanzado)
    test('Debe lanzar un error al dividir por cero', () => {
        // Para probar que una función lanza un error, la llamada a la función
        // debe estar envuelta en otra función (callback).
        expect(() => dividir(10, 0)).toThrow('No se puede dividir por cero');
    });

    // NOTA: Se eliminó el test original que esperaba un objeto aquí, ya que 'dividir'
    // ahora devuelve solo el número simple (para que pasara el test anterior).
});

// --- NUEVO GRUPO DE TESTS PARA LA DIVISIÓN COMPLEJA ---
describe('Pruebas de la función dividirConCocienteResto', () => {
    
    // Test 1: Comprueba el resultado estándar usando .toEqual
    test('Debe devolver el objeto correcto con cociente 2 y resto 1 para 7/3', () => {
        const resultado = dividirConCocienteResto(7, 3);
        // Usamos .toEqual para comparar la estructura y los valores de objetos.
        expect(resultado).toEqual({ cociente: 2, resto: 1 });
    });

    // Test 2: Comprueba que maneja la división exacta
    test('Debe devolver cociente 5 y resto 0 para 10/2', () => {
        expect(dividirConCocienteResto(10, 2)).toEqual({ cociente: 5, resto: 0 });
    });

    // Test 3: Comprobando el manejo de errores
    test('Debe lanzar un error al dividir por cero', () => {
        expect(() => dividirConCocienteResto(10, 0)).toThrow('No se puede dividir por cero');
    });
});
// -----------------------------------------------------------------

// --- III. HOOKS (Funciones de Preparación y Limpieza) ---

// Los Hooks se usan dentro de un bloque 'describe' para ejecutar código antes
// o después de cada test o de todos los tests en ese grupo.

describe('Pruebas con estado inicial (Hooks)', () => {
    let valorInicial;

    // beforeAll: Se ejecuta una vez, antes de todos los tests en este 'describe'.
    beforeAll(() => {
        valorInicial = 100;
        console.log('Setup: El valor inicial se estableció a 100.');
    });

    // beforeEach: Se ejecuta antes de CADA test individual.
    beforeEach(() => {
        // Limpiamos o reinicializamos variables aquí si es necesario.
        console.log('Ejecutando antes de un test...');
    });

    test('El valor inicial debe ser 100', () => {
        expect(valorInicial).toBe(100);
    });

    test('El valor inicial sigue siendo 100 después del primer test', () => {
        // Si el valor no fue modificado, sigue siendo 100.
        expect(valorInicial).toBe(100);
    });

    // afterEach: Se ejecuta después de CADA test individual.
    afterEach(() => {
        console.log('Ejecutando después de un test...');
    });

    // afterAll: Se ejecuta una vez, después de que todos los tests hayan terminado.
    afterAll(() => {
        valorInicial = undefined;
        console.log('Teardown: El valor inicial se limpió.');
    });
});