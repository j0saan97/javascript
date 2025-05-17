// exampleFunctions.test.js
const { add, fetchData, greet, throwError } = require('./exampleFunctions');

describe('Pruebas de exampleFunctions', () => {
    // Prueba para una función pura
    describe('add', () => {
        test('debería sumar dos números', () => {
            expect(add(1, 2)).toBe(3);
            expect(add(-1, 1)).toBe(0);
            expect(add(0, 0)).toBe(0);
        });
    });

    // Prueba para una función asíncrona
    describe('fetchData', () => {
        test('debería devolver datos después de un retraso', async () => {
            const data = await fetchData();
            expect(data).toBe('data');
        });
    });

    // Prueba para una función que retorna un saludo
    describe('greet', () => {
        test('debería devolver un saludo correcto', () => {
            expect(greet('Alice')).toBe('Hello, Alice!');
            expect(greet('Bob')).toBe('Hello, Bob!');
        });
    });

    // Prueba para una función que lanza un error
    describe('throwError', () => {
        test('debería lanzar un error', () => {
            expect(() => throwError()).toThrow('This is an error');
        });
    });
});


/*PARA EJECUTAR LAS PRUEBAS:
npm install --save-dev jest
npm test */