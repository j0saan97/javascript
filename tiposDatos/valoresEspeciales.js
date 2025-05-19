//  1 undefined : Indica que una variable o parámetro no tiene valor asignado.
let x;
console.log(x); // undefined

function saludar(nombre) {
  console.log(nombre);
}
saludar(); // undefined porque no pasaron argumento

// 2. null : Representa la ausencia intencional de un valor (un "valor vacío").

let y = null;
console.log(y); // null


// 3. NaN (Not a Number) : Resultado de una operación matemática inválida.

console.log(0 / 0);        // NaN
console.log(parseInt("abc")); // NaN

// 4. Infinity y -Infinity: Valores numéricos especiales que representan infinito positivo y negativo.

console.log(1 / 0);   // Infinity
console.log(-1 / 0);  // -Infinity


// 5. Symbol: Tipo de dato único e inmutable, usado para identificadores únicos.

    // ej 1
    const sym1 = Symbol("id");
    const sym2 = Symbol("id");
    console.log(sym1 === sym2); // false, son únicos
    
    // ej 2

    const COLOR = Symbol("color");

    const obj1 = {
    [COLOR]: "rojo",
    nombre: "obj1"
    };

    const obj2 = {
    [COLOR]: "azul",
    nombre: "obj2"
    };

    // Aunque tienen la misma descripción, los Symbols son únicos
    console.log(obj1[COLOR]); // rojo
    console.log(obj2[COLOR]); // azul


// 6. BigInt: Para manejar números enteros muy grandes fuera del rango Number.

const big = 9007199254740991n; // Nota la 'n' al final
console.log(big + 1n); // 9007199254740992n
