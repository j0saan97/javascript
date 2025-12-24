/*
! CONVERTIR BINARIO A DECIMAL  !

PASO 1. COMPRUEBIO QUE EL NUMERO SEA BINARIO: SOLO PUEDE TENER 1 O 0
PASO 2. INVIERTO EL NUMERO PARA PODER RECORRERLO DESDE EL MENOS SIGNIFICATIVO
PASO 3. RECORRO CADA DIGITO DEL NUMERO BINARIO
PASO 4. SI EL DIGITO ES 1, SUMO 2 ELEVADO A LA POSICION DEL DIGITO
PASO 5. RETORNO LA SUMA TOTAL   
*/

function binarioADecimal(numBinario) {
  // Validar tipo
  if (typeof numBinario !== "string") {
    throw new Error("Entrada inválida: el valor debe ser una cadena.");
  }

  // PASO 1: validar binario
  if (!/^[01]+$/.test(numBinario)) {
    throw new Error(
      "Entrada inválida: el número debe contener solo 0 y 1."
    );
  }

  let decimal = 0;

  // PASO 2
  const numBinarioInvertido = numBinario.split("").reverse();

  // PASO 3 y 4
  for (let i = 0; i < numBinarioInvertido.length; i++) {
    if (numBinarioInvertido[i] === "1") {
      decimal += Math.pow(2, i);
    }
  }

  // PASO 5
  return decimal;
}

// Función auxiliar con manejo de errores
function probarBinarioADecimal(valor) {
  try {
    const resultado = binarioADecimal(valor);
    console.log(`Binario: ${valor} → Decimal: ${resultado}`);
  } catch (error) {
    console.error(`Error con "${valor}": ${error.message}`);
  }
}

// Pruebas
probarBinarioADecimal("1101");   // 13
probarBinarioADecimal("10010"); // 18
probarBinarioADecimal("2A01");  // Error
probarBinarioADecimal(10101);   // Error
probarBinarioADecimal("");      // Error
