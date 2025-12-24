/*
! convertir un numero a binario por pasos:
  ! 1: si el numero es 0, retornar "0"
    ! 2: crear una variable vacia llamada "binario"
    ! 3: mientras el numero sea mayor que 0:
      ! 4: obtener el residuo de dividir el numero entre 2
      ! 5: agregar el residuo al inicio de la variable "binario"
      ! 6: dividir el numero entre 2 y redondear hacia abajo
    ! 7: retornar la variable "binario"

*/ 

function convertirABinario(numero) {
  if (numero === 0) {
    return "0";
  }

  if (numero < 0) {
    throw new Error("Número inválido: no se permiten valores negativos.");
  }

  if (!Number.isInteger(numero)) {
    throw new Error("Número inválido: debe ser un entero.");
  }

  let binario = "";

  while (numero > 0) {
    const residuo = numero % 2;
    binario = residuo + binario;
    numero = Math.floor(numero / 2);
  }

  return binario;
}

// Función auxiliar para ejecutar pruebas con manejo de errores
function probarConversion(valor) {
  try {
    const resultado = convertirABinario(valor);
    console.log(`Decimal: ${valor} → Binario: ${resultado}`);
  } catch (error) {
    console.error(`Error con el valor "${valor}": ${error.message}`);
  }
}

// Pruebas
probarConversion(10);
probarConversion(0);
probarConversion(255);
probarConversion(-5);
probarConversion(4.5);
probarConversion("10");
probarConversion(18);