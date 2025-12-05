// datos.test.js
const { obtenerUsuario, obtenerListaVacia, obtenerBooleano } = require('./datos');

describe('Pruebas de Tipos de Datos y Valores', () => {

    // 1. Matchers para valores Null, Undefined y Falsy

    test('obtenerUsuario(0) debe ser null', () => {
        // .toBeNull() verifica si el valor es exactamente null.
        expect(obtenerUsuario(0)).toBeNull();
    });

    test('obtenerUsuario(-1) debe ser undefined', () => {
        // .toBeUndefined() verifica si el valor es exactamente undefined.
        expect(obtenerUsuario(-1)).toBeUndefined();
    });

    test('obtenerUsuario(1) no debe ser null', () => {
        // .not.toBeNull() invierte la comprobación.
        expect(obtenerUsuario(1)).not.toBeNull();
    });

    // .toBeTruthy() y .toBeFalsy() comprueban la verdad/falsedad de un valor en JS (coerción de tipo).
    test('El usuario activo debe ser True', () => {
        expect(obtenerUsuario(1).activo).toBeTruthy();
    });

    // 2. Matchers para Estructura y Tipo

    test('obtenerUsuario(1) debe devolver un objeto y tener la propiedad edad', () => {
        const usuario = obtenerUsuario(1);
        
        // .toBeInstanceOf(Clase) comprueba el tipo de instancia (útil para clases o Date).
        expect(usuario).toBeInstanceOf(Object);

        // .toHaveProperty(key) verifica que el objeto contiene la clave especificada.
        expect(usuario).toHaveProperty('edad');
    });

    test('La lista debe ser un array vacío', () => {
        const lista = obtenerListaVacia();
        
        // .toBeInstanceOf(Array) comprueba si es una instancia de Array.
        expect(lista).toBeInstanceOf(Array);
        
        // .toHaveLength(number) comprueba la longitud del array.
        expect(lista).toHaveLength(0);
    });

    // 3. Test que Forzará un Fallo

    test('obtenerBooleano debe devolver un valor booleano', () => {
        // Este test fallará porque la función devuelve 1 (número), no un booleano.
        // El matcher .toBe(true) verifica el valor exacto, no el tipo.
        // Si quisiéramos verificar el tipo: typeof obtenerBooleano() === 'boolean' (se hace manualmente).
        expect(obtenerBooleano()).toBe(false); 
    });
});