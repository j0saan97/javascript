/* Ej 28
crea una función que me diga si un número es armstrong o no.
 
Un número es armstrong si la suma de los cubos de sus dígitos es igual al número. 
Por ejemplo, el número 371 es armstrong porque 3^3 + 7^3 + 1^3 = 371.
 
Si la cifra es de 4 digitos, se eleva a 4, y si es de 5 a 5.*/


function esArnstrong(numero){
    // convertir numeroa cadena de texto
    numero = numero.toString();

    // CALCULAMOS LONGITUD DE LA CADENA
    let tamanio = numero.length;

    // crar variable para acumular la cifra de calcular la elevación al tamaño
    let suma = 0;

    // recorrer cada variable del texto y vamos a actualizar variable acumuladora
    for (let i = 0; i < tamanio; i++){
        suma += Math.pow(parseInt(numero[i]), tamanio);
    }

    // devolver rsdo
    return parseInt(numero) === suma;
}

console.log(esArnstrong(371));
console.log(esArnstrong(1634));
console.log(esArnstrong(769));
