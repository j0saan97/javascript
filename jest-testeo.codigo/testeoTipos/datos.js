// datos.js
// Funciones que devuelven varios tipos de datos.

const obtenerUsuario = (id) => {
    if (id === 0) {
        return null; // Simula un usuario no encontrado
    }
    if (id < 0) {
        return undefined; // Simula un error de entrada
    }
    // Devuelve un objeto estándar
    return {
        nombre: 'Carlos',
        edad: 30,
        activo: true
    };
};

const obtenerListaVacia = () => {
    return [];
};

const obtenerBooleano = () => {
    return 0; // Debería ser 'true' o 'false', lo hacemos incorrecto para forzar un fallo.
};

module.exports = {
    obtenerUsuario,
    obtenerListaVacia,
    obtenerBooleano
};