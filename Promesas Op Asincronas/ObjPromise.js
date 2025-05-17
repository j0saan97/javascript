
// PROMESA RESUELTA
    const resolvedPromise = new Promise((resolve, reject) => {
        // Simula una operación que se completa exitosamente
        setTimeout(() => {
        resolve('Promesa resuelta exitosamente');
        }, 1000);
    });
    
    resolvedPromise
        .then(result => {
        console.log(result); // "Promesa resuelta exitosamente"
        })
        .catch(error => {
        console.error('Error:', error);
        });
  
    // PROMESA RECHAZADA CON UN ERROR

    const rejectedPromise = new Promise((resolve, reject) => {
        // Simula una operación que falla
        setTimeout(() => {
          reject('Algo salió mal con la promesa');
        }, 1000);
      });
      
      rejectedPromise
        .then(result => {
          console.log(result);
        })
        .catch(error => {
          console.error('Error:', error); // "Error: Algo salió mal con la promesa"
        });
      