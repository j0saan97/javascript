/* Supongamos que tenemos un conjunto de datos grande que no cabe en la memoria, y queremos
 procesar los elementos uno por uno sin cargar todos los datos de una vez: 
 esta function permite procesar grandes conjuntos de datos de manera eficiente, devolviendo los datos uno a
  uno a medida que son necesarios, en lugar de cargarlos todos en memoria al mismo tiempo. 
 */

 // Se define una función llamada procesarDatosGrandes precedida por el asterisco (function*).
// Esta es la sintaxis para declarar una función generadora en JavaScript.
 
function* procesarDatosGrandes(datos) {
  for (let i = 0; i < datos.length; i++) {
    yield datos[i];
  }
}

const datosGrandes = [1, 2, 3, 4, 5, 6, /* ... muchos más datos ... */];

const generador = procesarDatosGrandes(datosGrandes);

// Ahora podemos iterar sobre los datos de manera perezosa
for (let valor of generador) {
  console.log("Procesando valor:", valor);
}

/* hemos creado una función generadora llamada procesarDatosGrandes que toma un array datos y lo recorre 
utilizando un bucle for, utilizando yield para producir cada elemento del  array uno por uno.Luego, hemos
 creado una instancia del generador y hemos utilizado un bucle for...of para iterar sobre los datos
  de manera perezosa.

Este enfoque es útil cuando necesitas procesar grandes conjuntos de datos sin cargar todos los datos en memoria 
de una vez, lo que puede ahorrar memoria y permitirte trabajar con conjuntos de datos que de otro modo serían
 demasiado grandes para manejar en la memoria disponible. */

// Ej 2:

function* contadorInfinito() {
  let contador = 1;
  while (true) {
    yield contador;
    contador++;
  }
}

// Crear una instancia del contador infinito
const generadorr = contadorInfinito();

// Obtener y mostrar los primeros 5 números generados
for (let i = 0; i < 5; i++) {
  console.log(generadorr.next().value);
}

/*
En este ejemplo, hemos definido una función generadora llamada contadorInfinito que utiliza un bucle while (true) para generar 
números secuenciales infinitamente. Utilizamos yield para emitir cada número y luego aumentamos el contador en 1 en cada iteración.
Luego, hemos creado una instancia del generador y hemos utilizado un bucle for para obtener y mostrar los primeros 5 números generados.
La ventaja de usar una función generadora en este caso es que puedes generar números infinitamente sin ocupar una gran cantidad de
memoria, ya que se generan bajo demanda.
*/



