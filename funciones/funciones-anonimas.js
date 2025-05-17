/*Las funciones anónimas en JavaScript son funciones que no tienen un nombre asociado. Se definen sin un identificador y se suelen utilizar en situaciones
 donde se necesita una función temporal o como argumento a otras funciones (por ejemplo, funciones de orden superior como map, filter, forEach).
  Las funciones anónimas son útiles cuando no necesitas reutilizar una función y prefieres definirla de forma inline. */




// Definición de una función anónima y asignación a una variable
const suma = function(a, b) {
    return a + b;
  };
  
  // Llamada a la función anónima a través de la variable
  console.log(suma(2, 3)); // Salida: 5
  
  // Uso de una función anónima como callback
  const numeros = [1, 2, 3, 4, 5];
  
  // Método forEach con una función anónima como argumento
  numeros.forEach(function(numero) {
    console.log(numero * 2); // Salida: 2, 4, 6, 8, 10
  });
  
  // Uso de una función anónima para devolver otra función
  function crearMultiplicador(multiplicador) {
    return function(numero) {
      return numero * multiplicador;
    };
  }
  
  const multiplicarPorTres = crearMultiplicador(3);
  console.log(multiplicarPorTres(5)); // Salida: 15
  
  // Funciones anónimas como expresiones IIFE (Immediately Invoked Function Expression)
  // Se ejecutan inmediatamente después de ser definidas
  (function() {
    console.log("Esto es una IIFE"); // Salida: Esto es una IIFE
  })();


  /*Beneficios de las Funciones Anónimas
Temporalidad: Perfectas para uso temporal donde no se necesita una referencia de nombre.
Encapsulamiento: Ideal para encapsular código y evitar la contaminación del espacio de nombres global.
Concisión: Proporcionan una forma concisa de pasar funciones como argumentos sin tener que definir funciones separadas con nombres. */
  