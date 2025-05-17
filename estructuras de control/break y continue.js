/* break, continue y labels:

- break: interrumpe el bucle y sale de él: usar lo mínimo posible, 
si el código está bien estructurado no debería de haber estas estructuras

- continue: si se da una condición que especifiquemos el bucle salta esa iteración

- labels: Los labels en JavaScript son una característica que permite asignar un identificador
 a una sentencia específica en un bucle o en una estructura de control. Estos identificadores
  se utilizan para controlar el flujo de ejecución dentro de la estructura y se pueden referenciar
   con las sentencias break y continue. Un label se define colocando un identificador seguido de dos puntos () 
   antes de la sentencia que se desea etiquetar.
*/

// continue :
const listaBoleto = [1, 2, 4, 56, 43, 67, 82, 921];

for (let i = 0; i < listaBoleto.length; i++){
    if (listaBoleto[i] === 4) {
        continue;
    }
    console.log(listaBoleto[i]);
}

// para conocer el elemento en un índice concreto lo pasamos por consola con el indice entre corchetes
console.log(listaBoleto[3]);

// break : al meterse en un caso con un break terminará el bucle saliendo de él y volviendo al flujo normal del programa

let notaExamen = 3;

switch (notaExamen) {
    case 1:
        console.log("has sacao un 1");
        break;
    case 2:
        console.log("has sacao un 2");
        break;
    case 3:
        console.log("has sacao un 3");
        break;
    case 4:
        console.log("has sacao un 4");
        break;
    default:
        console.log("tu notas es superior a 5, muy bien");
}

//labels: 
miBuclePersonal: for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 2) {
      break miBuclePersonal;
    }
    console.log(i, j);
  }
}

/* Esto tiene sentido cuando tenemos varios bucles anidados uno dentro
 de otro y queremos ser concisos determinando de que bucle quiero salir*/

 //Ej
  bucleExterior: for (let i = 1; i <= 5; i++) {
  console.log("Iteración exterior: " + i);

  bucleInterior: for (let j = 1; j <= 5; j++) {
    console.log("Iteración interior: " + j);

    if (j === 3) {
      break bucleExterior; // Sale del bucle etiquetado como miLabel
    }
  }
}