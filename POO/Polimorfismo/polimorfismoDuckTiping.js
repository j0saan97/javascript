class ImpresoraPDF {
  imprimir() {
    console.log("Imprimiendo documento como PDF...");
  }
}

class ImpresoraLaser {
  imprimir() {
    console.log("Imprimiendo con impresora láser...");
  }
}

// Función que no necesita saber el tipo exacto del objeto
function procesarImpresion(impresora) {
  impresora.imprimir(); // Mientras tenga un método "imprimir", funcionará
}

procesarImpresion(new ImpresoraPDF());
procesarImpresion(new ImpresoraLaser());