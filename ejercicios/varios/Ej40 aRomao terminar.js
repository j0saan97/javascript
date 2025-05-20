function romanoAEntero(romano) {
    // Crear objeto con números romanos y sus correspondientes valores numéricos
    const tablaRomanos = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    // Crear variable para almacenar el resultado
    let resultado = 0;
    let i = 0;

    // Recorrer el número romano letra a letra
    while (i < romano.length) {
        // Verificar si el símbolo actual y el siguiente forman un número compuesto
        if (i + 1 < romano.length && tablaRomanos[romano.substring(i, i + 2)]) {
            resultado += tablaRomanos[romano.substring(i, i + 2)];
            i += 2; // Saltar el siguiente símbolo
        } else {
            // Sumar el valor del símbolo actual
            resultado += tablaRomanos[romano[i]];
            i++; // Pasar al siguiente símbolo
        }
    }

    // Devolver el resultado
    return resultado;
}

// tiene fallos corregir 
// Ejemplos de uso
console.log(romanoAEntero("XVIII")); // 18
console.log(romanoAEntero("IV"));   // 120
console.log(romanoAEntero("MDX"));   // 14
console.log(romanoAEntero("MMMCMXCIV")); // 1994
