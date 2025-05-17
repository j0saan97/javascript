/*
El método then se utiliza para manejar la resolución de una promesa. 
Toma dos argumentos: una función que se ejecuta cuando la promesa se cumple y una función que se ejecuta cuando la promesa es rechazada
*/

// Ej 1:
const promise = new Promise((resolve, reject) => {
    resolve("Promesa cumplida");
  });
  
  promise.then(
    value => {
      console.log(value); // "Promesa cumplida"
    },
    error => {
      console.log(error); // Esta función no se ejecutará en este caso
    }
  );

  // Ejemplo 2:creamos una promesa que realiza una operación matemática y luego usamos then para encadenar más operaciones sobre el resultado.
  
  const multiplyByTwo = new Promise((resolve, reject) => {
    const number = 5;
    resolve(number);
  });
  
  multiplyByTwo
    .then(number => {
      const result = number * 2;
      console.log(`El resultado de multiplicar por 2 es: ${result}`);
      return result;
    })
    .then(result => {
      const squaredResult = result * result;
      console.log(`El resultado al cuadrado es: ${squaredResult}`);
      return squaredResult;
    })
    .then(squaredResult => {
      const finalResult = squaredResult / 2;
      console.log(`El resultado final al dividir por 2 es: ${finalResult}`);
    })
    .catch(error => {
      console.error('Ocurrió un error:', error);
    });
  
  // Ejemplo 3: Encadenamiento de Promesas para Operaciones Asíncronas:  simulamos operaciones asíncronas (como llamadas a una API) y usamos then para manejar los resultados.
  
  const fetchUser = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: 'John Doe' });
    }, 1000);
  });
  
  fetchUser
    .then(user => {
      console.log('Usuario recibido:', user);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          user.posts = ['Post 1', 'Post 2'];
          resolve(user);
        }, 1000);
      });
    })
    .then(userWithPosts => {
      console.log('Usuario con posts:', userWithPosts);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          userWithPosts.comments = ['Comentario 1', 'Comentario 2'];
          resolve(userWithPosts);
        }, 1000);
      });
    })
    .then(userWithPostsAndComments => {
      console.log('Usuario completo:', userWithPostsAndComments);
    })
    .catch(error => {
      console.error('Ocurrió un error:', error);
    });
  