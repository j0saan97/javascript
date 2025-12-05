/**
 * 🧮 Ejemplo de Composición: Calculadora Científica
 */

// 1. Funciones Fábrica/Mixins: Capacidades Aritméticas Básicas

/**
 * Mixin para añadir la capacidad de sumar y restar.
 * @param {object} obj - El objeto base para inyectar los métodos.
 */
const puedeHacerOperacionesBasicas = (obj) => ({
    sumar: (a, b) => {
        const resultado = a + b;
        console.log(`[Básica] ${a} + ${b} = ${resultado}`);
        return resultado;
    },
    restar: (a, b) => {
        const resultado = a - b;
        console.log(`[Básica] ${a} - ${b} = ${resultado}`);
        return resultado;
    }
});

// 2. Funciones Fábrica/Mixins: Capacidades Científicas (Avanzadas)

/**
 * Mixin para añadir capacidades científicas como potencias.
 * @param {object} obj - El objeto base para inyectar los métodos.
 */
const puedeHacerOperacionesCientificas = (obj) => ({
    // Utilizamos Math.pow para una operación más avanzada
    potencia: (base, exponente) => {
        const resultado = Math.pow(base, exponente);
        console.log(`[Científica] ${base}^${exponente} = ${resultado}`);
        // El método compuesto puede llamar a métodos de otros mixins si es necesario,
        // pero en este caso mantenemos la responsabilidad única de 'potencia'.
        return resultado;
    }
});

// 3. Función Fábrica Principal para crear la Calculadora Compuesta

/**
 * Función fábrica que crea una Calculadora Científica componiendo las capacidades.
 * Es la 'clase' final que combina todas las funcionalidades.
 */
const crearCalculadoraCientifica = () => {
    // Definimos un estado inicial (opcional, pero puede ser útil para almacenar la memoria)
    const estado = {
        memoria: 0
    };

    // La composición se realiza aquí, combinando el estado con todas las capacidades (mixins)
    return Object.assign(
        {}, // Objeto vacío para el resultado final
        estado,
        puedeHacerOperacionesBasicas(estado),
        puedeHacerOperacionesCientificas(estado)
    );
};

// 4. Uso del Objeto Compuesto

const calc = crearCalculadoraCientifica();

console.log('--- Probando Calculadora Científica Compuesta ---');

// Funcionalidad Básica (proviene de 'puedeHacerOperacionesBasicas')
calc.sumar(10, 5);
calc.restar(20, 8);

// Funcionalidad Científica (proviene de 'puedeHacerOperacionesCientificas')
calc.potencia(2, 3); // 2^3 = 8

// El objeto final tiene todos los métodos:
// console.log(calc);