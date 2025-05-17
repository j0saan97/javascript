const array = [1, 5, 6, 8, 10, 28, 92];

const array2 = array.map(function(valor){
    return valor * 2;
})

console.log(array2);

// es una buena forma de usar los maps, pero estaría mejor usas funciones flecha de esta manera:

//FUNCIONES FLECHA:
const array3 = array.map((valor) => valor * 3);
console.log(array3);

// Aconsejable guardar las funciones flecha en una constante

const dobleDelValor = valor => {
    return valor * 2;
}

console.log(dobleDelValor(5)); // mostraria 10

// Solo se puede acceder a las funciones flecha dsps d haber sido declaradas; declararlas todas al principio del codigo


// Ejemplos y mas ejemplos:

//  funcion flecha suma
const sumar = (a, b) => a + b;

console.log(sumar(3, 4));

// funcion flecha con condicion:

const esMayorDeEdad = (edad) => {
  if (edad >= 18) {
    return true;
  } else {
    return false;
  }
}

console.log(esMayorDeEdad(20));


// FF con array como parámetro:

const obtenerPromedio = (notas) => {
  let suma = 0;
  for (let i = 0; i < notas.length; i++) {
    suma += notas[i];
  }
  const promedio = suma / notas.length;
  return promedio;
}

const calificaciones = [8, 9, 7, 10, 8];
console.log(obtenerPromedio(calificaciones));

// con parámetro map:

const numeros = [1, 2, 3, 4, 5];

const cuadrados = numeros.map((numero) => {
  return numero * numero;
});

console.log(cuadrados);

//El método map en JavaScript se utiliza en arrays para crear un nuevo array con los resultados de aplicar una función a cada elemento del array original.

console.log(cuadrados(8));


// ej func flecha

const dividePor2 = numeros.map((numero) => {
  return numero / 2;
});

console.log(dividePor2);


// ej 2
const saludar = () => {
  console.log("¡Hola!");
};

saludar(); // Salida: ¡Hola!


// funcion flecha con argumento
const doble = (numero) => {
  return numero * 2;
};

console.log(doble(5)); // Salida: 10


// VERSION 2 EN UNA LINEA USANDO EL RETORNO IMPLICITO:

const triple = numero => numero * 3;
console.log(triple(9)); // devuelve 27

// Función flecha de una sola línea con retorno implícito:

const esPar = numero => numero % 2 === 0;

console.log(esPar(4)); // Salida: true


/*
 ACLARACIONES FUNCIONES FLECHA:
El retorno implícito es una característica de las funciones flecha en JavaScript que permite omitir la palabra 
clave return cuando la función tiene una sola expresión en su cuerpo. En lugar de escribir explícitamente return,
 JavaScript infiere automáticamente que la expresión a la que se evalúa es el valor de retorno de la función.

ACLARACIONES FUNCIONES ANONIMAS:
las funciones anónimas no tienen nombres y se utilizan en diferentes contextos dentro de JavaScript.
 Pueden ser útiles cuando se necesita una función temporal o cuando se pasa una función como argumento
  a otra función sin necesidad de definirla por separado.

 */