function sumarTodos() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sumarTodos(1, 2, 3, 4, 5)); // Output: 15


/* la función sumarTodos puede recibir un número variable de argumentos. Utiliza la variable 
especial arguments que se comporta como un array para acceder a todos los argumentos pasados a la función */