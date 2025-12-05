const suma = require('./suma');

test('Debe sumar 1 + 2 y obtener 3', () => {
    expect(suma(1, 2)).toBe(3);
});

test('Debe sumar números negativos', () => {
    expect(suma(-1, -4)).toBe(-5);
});