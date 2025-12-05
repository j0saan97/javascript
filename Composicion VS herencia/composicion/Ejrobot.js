/**
 * 🤖 Ejemplo de Composición de Objetos en JavaScript
 */

// 1. Funciones Fábrica/Mixins que añaden capacidades

/**
 * Mixin que añade la capacidad de movimiento (función 'mover') al objeto.
 * @param {object} obj - El objeto base al que se le añade la capacidad.
 */
const puedeMoverse = (obj) => ({
    mover: (distancia) => {
        console.log(`${obj.nombre} se ha movido ${distancia} metros.`);
    }
});

/**
 * Mixin que añade la capacidad de limpieza (función 'limpiar') al objeto.
 * @param {object} obj - El objeto base al que se le añade la capacidad.
 */
const puedeLimpiar = (obj) => ({
    limpiar: (area) => {
        console.log(`${obj.nombre} está limpiando un área de ${area} metros cuadrados.`);
    }
});

// 2. Función Fábrica Principal para crear el objeto compuesto

/**
 * Función fábrica para crear un Robot de Limpieza.
 * El objeto final se compone de un estado base (nombre)
 * y las capacidades de 'puedeMoverse' y 'puedeLimpiar'.
 * @param {string} nombre - El nombre del robot.
 */
const crearRobotDeLimpieza = (nombre) => {
    // Estado base para el objeto
    const estado = {
        nombre
    };

    // Usamos 'Object.assign' o el spread operator para combinar
    // el estado base con las capacidades que devuelven los mixins.
    // Esto es el corazón de la composición.
    return {
        ...estado,
        ...puedeMoverse(estado),
        ...puedeLimpiar(estado)
    };
};

// 3. Uso del Objeto Compuesto

const miRobot = crearRobotDeLimpieza("R2-Scrubber");

console.log(`Creando robot: ${miRobot.nombre}`);

// El robot ahora tiene ambas funcionalidades compuestas
miRobot.mover(5);
miRobot.limpiar(20);

// Muestra las propiedades finales del objeto (métodos y nombre)
console.log(miRobot);