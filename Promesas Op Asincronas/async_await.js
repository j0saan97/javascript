// Ej 1: Simulación de una Llamada a una API. Vamos a crear una función async que simula la obtención de datos de una API después de un retraso de 1 segundo.

// Función que simula una llamada a una API
async function getData() {
    // Simula una operación asíncrona utilizando setTimeout
    const data = await new Promise((resolve) => {
      setTimeout(() => {
        resolve('Datos recibidos de la API');
      }, 1000);
    });
  
    // Una vez resuelta la promesa, imprime los datos
    return data;
  }
  
  // Función para llamar a getData y manejar el resultado
  async function fetchData() {
    try {
      const result = await getData();
      console.log(result); // "Datos recibidos de la API"
    } catch (error) {
      console.error('Error al obtener los datos:', error);
    }
  }
  
  // Llamada a la función fetchData para iniciar el proceso
  fetchData();
  

  /*
  
  Definición de la función getData:

! La función getData es declarada como async.
! Dentro de getData, se crea una promesa usando new Promise. La promesa simula una llamada a una API utilizando setTimeout que resuelve con el valor 'Datos recibidos de la API' después de 1 segundo.
! La palabra clave await se utiliza para esperar a que la promesa se resuelva. El resultado de la promesa ('Datos recibidos de la API') se almacena en la variable data.
La función getData retorna el valor de data.
Definición de la función fetchData:

! La función fetchData es declarada como async.
! Dentro de fetchData, se utiliza try...catch para manejar posibles errores.
! La palabra clave await se utiliza para esperar a que la función getData se resuelva. El resultado se almacena en la variable result.
Si la llamada a getData tiene éxito, el resultado se imprime en la consola.
Si ocurre un error, se captura en el bloque catch y se imprime un mensaje de error.
Llamada a fetchData:

Finalmente, se llama a la función fetchData para iniciar el proceso de obtención de datos y manejo del resultado
  
  */