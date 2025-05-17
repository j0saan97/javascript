// El método finally se ejecuta después de que la promesa se haya cumplido o rechazado, sin importar el resultado. Es útil para realizar tareas de limpieza.

// ejemplo 1
const promise = new Promise((resolve, reject) => {
    resolve("Promesa cumplida");
  });
  
  promise
    .then(value => {
      console.log(value); // "Promesa cumplida"
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      console.log("La promesa ha sido procesada"); // "La promesa ha sido procesada"
    });
  

    /* ejemplo 2:utilizamos finally para realizar una acción de limpieza después de que la promesa se haya cumplido o rechazado.
   Simulamos una operación que puede fallar o tener éxito, y usamos finally para limpiar un recurso independientemente del resultado. */

   const performTask = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5; // Simula éxito o fallo al azar
    setTimeout(() => {
      if (success) {
        resolve('Tarea completada con éxito');
      } else {
        reject('Error al completar la tarea');
      }
    }, 1000);
  });
  
  performTask
    .then(result => {
      console.log(result); // "Tarea completada con éxito"
    })
    .catch(error => {
      console.error(error); // "Error al completar la tarea"
    })
    .finally(() => {
      console.log('Limpieza de recursos'); // "Limpieza de recursos" (siempre se ejecuta)
    });


    /* ejemplo 3 indicador de carga: simulamos una operación asíncrona y utilizamos finally 
    para ocultar un indicador de carga después de que la operación haya terminado, sin importar si tuvo éxito o falló.
    */
  
    // Función para simular la operación de una API
const fetchData = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5; // Simula éxito o fallo al azar
    setTimeout(() => {
      if (success) {
        resolve('Datos recibidos');
      } else {
        reject('Fallo al recibir datos');
      }
    }, 2000);
  });
  
  // Simulación de mostrar y ocultar un indicador de carga
  console.log('Mostrando indicador de carga...'); // Simula mostrar un indicador de carga
  
  fetchData
    .then(data => {
      console.log(data); // "Datos recibidos"
    })
    .catch(error => {
      console.error(error); // "Fallo al recibir datos"
    })
    .finally(() => {
      console.log('Ocultando indicador de carga...'); // "Ocultando indicador de carga" (siempre se ejecuta)
    });
  
