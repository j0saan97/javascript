// Ejemplo de spread con distintas estructuras iterables

// 1️⃣ Usando un Set (iterable)
const conjunto = new Set([10, 20, 30]);
// Spread expande el Set en los elementos individuales del array
const arrayDesdeSet = [...conjunto];
console.log("Array desde Set:", arrayDesdeSet);
// → Imprime: Array desde Set: [10, 20, 30]

// 2️⃣ Usando una cadena de texto (string es iterable)
const saludo = "Hola";
// Spread convierte la string en un array de caracteres
const letras = [...saludo];
console.log("Array de caracteres:", letras);
// → Imprime: Array de caracteres: ['H', 'o', 'l', 'a']

// 3️⃣ Spread en llamada a función con iterable
function mostrar4(a, b, c, d) {
  console.log("Argumentos recibidos:", a, b, c, d);
}
// Pasamos cada carácter de la string 'Hola' como argumento
mostrar4(...saludo);
// → Imprime: Argumentos recibidos: H o l a

// 4️⃣ Merge de Sets (uniendo dos iterables sin duplicados)
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
// Creamos un nuevo Set combinando ambos (gracias al spread)
const union = new Set([...setA, ...setB]);
console.log("Unión de Sets:", [...union]);
// → Imprime: Unión de Sets: [1, 2, 3, 4, 5]
