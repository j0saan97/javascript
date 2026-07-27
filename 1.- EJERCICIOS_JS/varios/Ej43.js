// Función para eliminar los números duplicados de un array
function eliminarDuplicados(array) {
    // Usamos un Set para almacenar solo valores únicos, ya que un Set no permite duplicados
    const unicos = new Set(array);
    // Convertimos el Set de nuevo a un array para devolver el resultado
    return Array.from(unicos);
}

// Ejemplo de uso
const numeros = [1, 1, 2, 2, 3, 4, 5, 5, 5, 6,7, 7];
console.log(eliminarDuplicados(numeros)); // Salida: [1, 2, 3, 4, 5, 6]
