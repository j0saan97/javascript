// Ejemplo 1: Suma de número + string → conversión a string
let resultado = 5 + "10";  
// El número 5 se convierte a string "5" para concatenar
console.log(resultado); // "510"
console.log(typeof resultado); // "string"


// Ejemplo 2: Resta entre strings que contienen números → conversión a número
let resultadoo = "20" - "5"; 
// Los strings se convierten a números automáticamente para restar
console.log(resultadoo); // 15
console.log(typeof resultadoo); // "number"


// Ejemplo 3: Comparación no estricta (==) con diferentes tipos
console.log(5 == "5");  
// El string "5" se convierte a número 5 antes de comparar
// Resultado: true

console.log(false == 0); 
// false se convierte a 0, 0 == 0 => true


// Ejemplo 4: Valor booleano en contexto numérico
console.log(true + 2); 
// true se convierte a 1 en contexto numérico
// Resultado: 3


// Ejemplo 5: Valor booleano en contexto string

console.log("Valor: " + false);
// false se convierte a "false" en contexto string
// Resultado: "Valor: false"


// Ejemplo 6: Uso de objetos en operaciones aritméticas
const obj = {
  valueOf() {
    return 10;
  }
};

console.log(obj + 5);
// Al usar +, JS llama a obj.valueOf(), obtiene 10 y suma 5 = 15


// Ejemplo 7: null y undefined en operaciones aritméticas

console.log(null + 5);     // null se convierte a 0 → 5
console.log(undefined + 5);// undefined se convierte a NaN → NaN
