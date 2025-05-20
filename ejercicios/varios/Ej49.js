function retornarMenor(array) {
    let masPequeño = array[0]; // Inicia con el primer elemento
    for (let element of array) {
        if (element < masPequeño) {
            masPequeño = element; // Actualiza si encuentra un valor menor
        }
    }
    return masPequeño;
}

console.log(retornarMenor([6, 2, 3, 5])); // Llama a la función con paréntesis
