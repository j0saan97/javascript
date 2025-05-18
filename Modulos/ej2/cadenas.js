// cadenas.js

function capitalizar(texto) {
  return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
}

function contarPalabras(texto) {
  return texto.trim().split(/\s+/).length;
}

function invertirTexto(texto) {
  return texto.split('').reverse().join('');
}

// Exportamos todo en un solo objeto
const utils = {
  capitalizar,
  contarPalabras,
  invertirTexto
};

export default utils;
