// app.js

import utils from './cadenas.js';

const texto = "hola mundo desde javascript";

console.log("Capitalizado:", utils.capitalizar(texto));     // "Hola mundo desde javascript"
console.log("Palabras:", utils.contarPalabras(texto));      // 4
console.log("Invertido:", utils.invertirTexto(texto));      // "tpircsavaj edsed odnum aloh"
