// Crear el objeto coche

/* En este ejemplo, creamos un objeto coche, clonamos ese objeto usando Object.assign() para crear coche2, 
luego cambiamos la propiedad año en coche2. Al mostrar las propiedades de ambos objetos, puedes comprobar
 que la propiedad del objeto inicial (coche) no se ha modificado, ya que coche y coche2 son objetos independientes. */

const coche = {
  marca: "Toyota",
  modelo: "Camry",
  año: 2021,
};

// Clonar el objeto coche para crear coche2
const coche2 = Object.assign({}, coche);

// Cambiar una propiedad en coche2
coche2.año = 2022;

// Mostrar las propiedades de ambos objetos

console.log(`Año: ${coche.año}`);

console.log(`Año: ${coche2.año}`);


// metodo Object.assign():
const objetivo = {};

const fuente1 = { a: 1, b: 2 };
const fuente2 = { b: 3, c: 4 };

Object.assign(objetivo, fuente1, fuente2);

console.log(objetivo); // { a: 1, b: 3, c: 4 }

/* En este ejemplo, hemos creado un objeto destino vacío (objetivo) y hemos copiado las propiedades de fuente1 y fuente2
en el objeto destino. La propiedad b se sobrescribe con el valor de fuente2, ya que es el último objeto fuente en la lista. */

