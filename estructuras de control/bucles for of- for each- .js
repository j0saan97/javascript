/*BUCLES 
    - for
    - for of
    - for in
    - forEach
     - while
    */

//BUCLE FOR

for (i = 0; i < 10; i++) {
    console.log(i)
}


// Podemos usar un bucle for para recorrer los elementos de una lista, objeto, diccionario...

let lista = [1, 4, 6, 75, 9, 12, "siuuh",];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

// for of: se usa para recorrer elementos de estructuras de datos iterables, como arrays, cadenas (strings), mapas y conjuntos,

//Ej 1:
for (let valor of lista) {
    console.log(valor)
}


// Ej 2:
const frutas = ["manzana", "plátano", "naranja", "fresa"];

for (const coche of frutas) {
    console.log(coche); // muestra la lista
}

// for in: se usa para recorrer las propiedades enumerables de un objeto.
const persona = {
    nombre: "juan",
    edad: 25,
    ciudad: "madrid",
};

for (let valor in persona) {
    console.log(valor); //imprime las propiedades
}

console.log(persona); // imprime cada propiedad con su valor

// forEach :
lista.forEach(i => {
    console.log(i);
}
)

// Ej 2:
let estudiantes = ["juan", "maria", "alex", "sergio", "maxwel"]

estudiantes.forEach(i => {
    console.log(i); // imprime la lista
}
)

// DA IGUAL EL VALOR QUE PONGAMOS EN i , siempre y cuando en el console.log pongamos el mismo valor
    







