function interescompuesto(cantidad, porcentaje, veces) {
    // multiplica el 1er num que introduzcamos por el 2o numero la cantidad de veces que especifiquemos en el 3er parametro
    // expresar el parametro % en 1.% que corresponda
  let resultado = cantidad;

  for (let i = 0; i < veces; i++) {
    resultado *= porcentaje;
  }

  return resultado;
}

const resultadoFinal = interescompuesto(100, 1.07, 4);
console.log(resultadoFinal); // resultado =

const rsdo2 = interescompuesto(100, 1.05, 10);
console.log(rsdo2)
