/*
En JavaScript, las etiquetas (labels) son una característica que permite etiquetar un bucle for, while o do-while,
 y luego referenciar esa etiqueta para controlar la ejecución del bucle desde otro lugar del código utilizando
break o continue. Aunque son útiles en algunas situaciones, su uso es poco común y generalmente se considera
una práctica de programación poco clara. 

*/ 

// Etiqueta para el bucle externo
externoLoop:
for (let i = 0; i < 3; i++) {
  console.log("Iteración externa:", i);
  
  // Etiqueta para el bucle interno
  internoLoop:
  for (let j = 0; j < 3; j++) {
    console.log("Iteración interna:", j);

    // Si j es igual a 1, salta a la siguiente iteración del bucle interno
    if (j === 1) {
      continue internoLoop;
    }

    // Si i es igual a 2, salta a la siguiente iteración del bucle externo
    if (i === 2) {
      continue externoLoop;
    }
  }
}
