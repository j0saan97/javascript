/*En JavaScript, el protocolo del iterador es un mecanismo que permite a los objetos
 definir y personalizar la forma en que se recorren y acceden a sus elementos

El protocolo del iterador se basa en dos conceptos principales:

Objeto Iterable: Un objeto iterable es aquel que define un método Symbol.iterator, que devuelve un iterador. 
Este método es una función que se utiliza para generar un iterador para el objeto iterable. Un iterador es un
 objeto con un método next(), que devuelve un objeto con dos propiedades: value, que representa el siguiente
  valor del iterador, y done, que indica si se han recorrido todos los elementos del iterable.

Objeto Iterador: Un objeto iterador es aquel que implementa el método next(), que devuelve los elementos del 
iterable en secuencia. Este método debe devolver un objeto con la estructura { value: any, done: boolean }, 
donde value es el siguiente elemento del iterable y done es un booleano que indica si se han recorrido todos 
los elementos. */

// ej 1:
const listaNumeros = {
  numeros: [1, 2, 3, 4, 5],
  [Symbol.iterator]() {
    let indice = 0;
    return {
      next: () => {
        if (indice < this.numeros.length) {
          return { value: this.numeros[indice++], done: false };
        } else {
          return { done: true };
        }
      }
    };
  }
};

// Iterando sobre la lista de números utilizando un bucle for...of
for (const numero of listaNumeros) {
  console.log(numero);
}

//ej 2:

// Definimos un objeto Iterable llamado ListaNombres
const ListaNombres = {
  nombres: ['Juan', 'María', 'Pedro', 'Laura'],
  // Definimos el método Symbol.iterator para que el objeto sea iterable
  [Symbol.iterator]() {
    // Inicializamos el índice en 0
    let indice = 0;
    // Definimos el método next() del iterador
    return {
      // next() devuelve el siguiente nombre en la lista o indica cuando se han recorrido todos
      next: () => {
        // Si el índice es menor que la longitud de la lista
        if (indice < this.nombres.length) {
          // Devolvemos el nombre en la posición actual y avanzamos el índice
          return { value: this.nombres[indice++], done: false };
        } else {
          // Si ya hemos recorrido toda la lista, indicamos que hemos terminado
          return { done: true };
        }
      }
    };
  }
};

// Iteramos sobre ListaNombres utilizando un bucle for...of
for (const nombre of ListaNombres) {
  console.log(nombre);
}


// ej 3:

// Definimos un objeto Iterable llamado NumerosPares
const NumerosPares = {
  // Definimos el valor inicial y el límite de la secuencia de números pares
  inicio: 2,
  limite: 10,
  // Definimos el método Symbol.iterator para que el objeto sea iterable
  [Symbol.iterator]() {
    // Inicializamos el número actual en el valor inicial
    let numeroActual = this.inicio;
    // Definimos el método next() del iterador
    return {
      // next() devuelve el siguiente número par en la secuencia o indica cuando se ha alcanzado el límite
      next: () => {
        // Si el número actual es menor o igual al límite
        if (numeroActual <= this.limite) {
          // Devolvemos el número actual y luego incrementamos en 2 para obtener el siguiente número par
          const resultado = { value: numeroActual, done: false };
          numeroActual += 2;
          return resultado;
        } else {
          // Si ya hemos alcanzado el límite, indicamos que hemos terminado
          return { done: true };
        }
      }
    };
  }
};

// Iteramos sobre NumerosPares utilizando un bucle for...of
for (const numero of NumerosPares) {
  console.log(numero);
}
