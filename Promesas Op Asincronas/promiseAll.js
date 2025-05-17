// El método Promise.all toma un iterable de promesas y devuelve una sola promesa que se cumple
// cuando todas las promesas en el iterable se han cumplido o se rechaza cuando alguna promesa se rechaza.

// ejemplo 1:
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then(values => {
  console.log(values); // [3, 42, "foo"]
}).catch(error => {
  console.log(error);
});


// Ejemplo 2:

const promise4 = new Promise((resolve) => {
  setTimeout(() => resolve('Promesa 4 cumplida después de 1 segundo'), 1000);
});

const promise5 = new Promise((resolve) => {
  setTimeout(() => resolve('Promesa 5 cumplida después de 2 segundos'), 2000);
});

const promise6 = new Promise((resolve) => {
  setTimeout(() => resolve('Promesa 6 cumplida después de 3 segundos'), 3000);
});

Promise.all([promise4, promise5, promise6])
  .then((values) => {
    console.log('Todas las promesas han sido cumplidas:', values);
    // Output:
    // Todas las promesas han sido cumplidas: ["Promesa 1 cumplida después de 1 segundo", "Promesa 2 cumplida después de 2 segundos", "Promesa 3 cumplida después de 3 segundos"]
  })
  .catch((error) => {
    console.error('Una de las promesas falló:', error);
  });

/* 

ejemplo 3 :

Simula la recolección de datos de tres API diferentes:

API de usuarios que tarda 1 segundo en responder.
API de posts que tarda 2 segundos en responder.
API de comentarios que tarda 1.5 segundos en responder.
El objetivo es esperar a que todas las promesas se resuelvan y luego procesar los datos juntos.

*/

// Simulando la API de usuarios
const fetchUsers = new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Usuario1', 'Usuario2', 'Usuario3']);
    }, 1000);
  });
  
  // Simulando la API de posts
  const fetchPosts = new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Post1', 'Post2', 'Post3']);
    }, 2000);
  });
  
  // Simulando la API de comentarios
  const fetchComments = new Promise((resolve) => {
    setTimeout(() => {
      resolve(['Comentario1', 'Comentario2', 'Comentario3']);
    }, 1500);
  });
  
  // Utilizando Promise.all para esperar a que todas las promesas se resuelvan
  Promise.all([fetchUsers, fetchPosts, fetchComments])
    .then((results) => {
      const [users, posts, comments] = results;
      console.log('Datos de Usuarios:', users);
      console.log('Datos de Posts:', posts);
      console.log('Datos de Comentarios:', comments);
  
      // Procesar los datos juntos
      const combinedData = users.map((user, index) => ({
        user,
        post: posts[index],
        comment: comments[index]
      }));
  
      console.log('Datos combinados:', combinedData);
      // Output:
      // Datos de Usuarios: ["Usuario1", "Usuario2", "Usuario3"]
      // Datos de Posts: ["Post1", "Post2", "Post3"]
      // Datos de Comentarios: ["Comentario1", "Comentario2", "Comentario3"]
      // Datos combinados: [{ user: 'Usuario1', post: 'Post1', comment: 'Comentario1' }, ...]
    })
    .catch((error) => {
      console.error('Ocurrió un error al recolectar los datos:', error);
    });
  
    /*
    
### Explicación

! 1. **Simulación de las APIs:** Se crean tres promesas (`fetchUsers`, `fetchPosts`, `fetchComments`) que simulan la recolección de datos de diferentes APIs usando `setTimeout` para diferir la resolución de la promesa.

! 2. **Uso de `Promise.all`:** Utilizamos `Promise.all` para esperar a que todas las promesas se resuelvan. `Promise.all` devuelve una nueva promesa que se resuelve con un array de resultados cuando todas las promesas pasadas a `Promise.all` se resuelven.

3. **Procesamiento de datos:** Una vez que todas las promesas se resuelven, los datos se imprimen en la consola y luego se combinan en un nuevo array de objetos que agrupa datos de usuarios, posts y comentarios.

! 4. **Manejo de errores:** Si alguna de las promesas se rechaza, el método `catch` se ejecutará y manejará el error.

Este ejercicio demuestra cómo manejar múltiples promesas simultáneamente y cómo procesar los datos una vez que todas las promesas se han resuelto.
    
    */