// Funciones asíncronas: Cuando creamos una promesa, pasamos una función al constructor Promise,
// que a su vez tiene dos parámetros: resolve y reject

function miAsinc() {
    //hace una llamada a una base de datos externa
    // puede darnos algun error
}

const miPromesa = new Promise((resolve, reject) => {
    const i = Math.floor(Math.random() * 2)
    // si está todo correcto
    if (i !== 0) {
        resolve()
    } else {
        reject()
    }


    miPromesa
        .then(() => console.log("se ha ejecutado de forma correcta"))
        .catch(() => console.log("ERROR"))
        .finally(() => console.log("Yo me ejecuto siempre"))
})

 /* Se genera un número aleatorio utilizando Math.floor(Math.random() * 2). Esto generará un número entero aleatorio entre 0 y 1.

Luego, se realiza una comprobación condicional para determinar si el número generado es diferente de 0. Si es así, se llama a la 
función resolve() para resolver la promesa. De lo contrario, se llama a la función reject() para rechazarla.

Después de la declaración de la promesa, se encadenan los métodos .then(), .catch() y .finally() a la variable miPromesa.
 Estos métodos se ejecutarán en función del estado en el que se encuentre la promesa: 
 
 - Si la promesa se resuelve: --> se ejecutará el callback dentor de then()
 - Si la promesa es rechazada: --> se ejecutará .catch()
 - finally se ejecuta siempre.
 */

// Ejemplos:
 
// Generar un número aleatorio y resolver la promesa si es mayor que 5, de lo contrario, rechazarla:
const miPromesa1 = new Promise((resolve, reject) => {
  const numero = Math.floor(Math.random() * 10) + 1;
  if (numero > 5) {
    resolve(numero);
  } else {
    reject(new Error("El número es menor o igual que 5"));
  }
});

miPromesa1
    .then((numero) => console.log("El número es mayor que 5:", numero))
    .catch((error) => console.log("Error:", error.message));
  

// Ejemplo 2: Sumar dos números y resolver la promesa con el resultado:

const miPromesa2 = new Promise((resolve, reject) => {
  const numero1 = 5;
  const numero2 = 3;
  const suma = numero1 + numero2;
  resolve(suma);
});

miPromesa2
  .then((resultado) => console.log("La suma es:", resultado))
  .catch((error) => console.log("Error:", error.message));





  















// async await