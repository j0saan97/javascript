// 1. Convertir string a número con Number()

let str = "123";
let num = Number(str); // convierte string a número

console.log(num);            // 123
console.log(typeof num);     // "number"


// 2. Convertir número a string con String()

let edad = 30;
let texto = String(edad); // convierte número a string

console.log(texto);           // "30"
console.log(typeof texto);    // "string"

// 3. Convertir a booleano con Boolean()
let vacio = "";
let lleno = "Hola";

console.log(Boolean(vacio)); // false
console.log(Boolean(lleno)); // true


//  4. Convertir string a número con parseInt() y parseFloat()

let precio = "99.99";

let entero = parseInt(precio);   // toma solo la parte entera
let decimal = parseFloat(precio); // conserva los decimales

console.log(entero);  // 99
console.log(decimal); // 99.99
