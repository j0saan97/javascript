/*
new Promise (Constructor):
El constructor new Promise se utiliza para crear una nueva promesa. Recibe una función que toma dos argumentos,
resolve y reject, que se utilizan para cumplir o rechazar la promesa respectivamente.

*/

const myPromise = new Promise((resolve, reject) => {
    const success = true; // Cambia esto a false para ver cómo funciona el rechazo
  
    if (success) {
      resolve("¡La operación fue exitosa!");
    } else {
      reject("Ocurrió un error.");
    }
  });
  
  myPromise
    .then(result => {
      console.log(result); // "¡La operación fue exitosa!"
    })
    .catch(error => {
      console.log(error); // "Ocurrió un error."
    });
  
