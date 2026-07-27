/*
Enunciado Ejercicio 26:
Optimizar el gasto en mi gasolinera favorita.
 
Tiene dos opciones:
 
- Gasolina individual: Cuesta 10 euros por cada llenado.
- Tarjeta de socio: Cuesta 90 euros anuales pero cada vez que llenas 
te cuesta 8.2 euros el tanque pagas sólo el 78% del precio del llenado.
 
Cada vez que llenas el tanque, se paga el 78% del precio 
del llenado que pagaste la última vez hasta llegar a un descuento maximo
del 50%. Acumula el descuento (0.78 ** 3).
 
Hacer una función que, al pasarle las veces que voy a llenar el tanque, 
me diga si vale la pena comprar la tarjeta de socio o no.
 
Ejemplos:
deboSerSocio(15);
 
Devuelve: 
Como usuario casual te sale a: 150  
*/



function deboSerSocio(veces) {
    // Calcular llenado individual
    let llenadoIndividual = 10 * veces;

    // Calcular llenados como socio
    let llenadoSocio = 90; // Costo de la tarjeta de socio

    // Calcular precio total llenados como socio
    for (let i = 1; i <= veces; i++) {
        // Calcular descuento acumulado
        let descuento = Math.pow(0.78, i);

        // Bloquear descuento a un máximo del 50%
        if (descuento < 0.50) {
            descuento = 0.50;
        }

        // Actualizar variable llenadoSocio y sumarle valores
        llenadoSocio += 8.2 * descuento;
    }

    // Montar string resultado
    let resultado = `Como usuario casual te sale a: ${llenadoIndividual} euros `;
    resultado += `Como socio te sale a: ${parseFloat(llenadoSocio.toFixed(2))} euros `;

    if (llenadoSocio < llenadoIndividual) {
        resultado += "Es más rentable ser socio";
    } else {
        resultado += "No te sale rentable ser socio";
    }

    return resultado;
}

console.log(deboSerSocio(20));