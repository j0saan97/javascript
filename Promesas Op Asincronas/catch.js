
//El método catch se utiliza para manejar el rechazo de una promesa. Es una forma más clara de manejar errores que pasar una segunda función al método then

const promise = new Promise((resolve, reject) => {
    reject("Promesa rechazada");
  });
  
  promise
    .then(value => {
      console.log(value); // Esta función no se ejecutará en este caso
    })
    .catch(error => {
      console.log(error); // "Promesa rechazada"
    });
  
    /* Ejemplo 2:
    Simulamos una operación de red (como una solicitud HTTP) que puede fallar y utilizamos catch para manejar el error. 
    */

    const fetchData = new Promise((resolve, reject) => {
        const success = Math.random() > 0.5; // Simula éxito o fallo al azar, como es una comparación solo puede dar true o false, de modo que la const success es de tipo bool
      
        setTimeout(() => {
          if (success) {
            resolve('Datos recibidos exitosamente');
          } else {
            reject('Error al recibir los datos');
          }
        }, 1000);
      });
      
      fetchData
        .then(data => {
          console.log(data); // "Datos recibidos exitosamente"
        })
        .catch(error => {
          console.error('Ocurrió un error:', error); // "Ocurrió un error: Error al recibir los datos"
        });
      

        /* Ejemplo 3: En este ejemplo, una promesa se rechaza si ocurre un error durante el procesamiento de datos. 
        Utilizamos catch para manejar el error y proporcionar retroalimentación adecuada*/

        const processData = new Promise((resolve, reject) => {
            const data = 'datos brutos';
            const success = Math.random() > 0.5; // Simula éxito o fallo al azar
          
            setTimeout(() => {
              if (success) {
                resolve(`Datos procesados: ${data}`);
              } else {
                reject('Error al procesar los datos');
              }
            }, 1500);
          });
          
          processData
            .then(result => {
              console.log(result); // "Datos procesados: datos brutos"
            })
            .catch(error => {
              console.error('Ocurrió un error durante el procesamiento:', error); // "Ocurrió un error durante el procesamiento: Error al procesar los datos"
            });
          