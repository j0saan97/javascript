// for in : para iterar sobre las propiedades enumerables de un objeto

// ej 1
let persona = {
  nombre: "Juan",
  edad: 30,
  profesion: "Ingeniero"
};

// Iterar sobre las propiedades de un objeto usando for...in
for (let clave in persona) {
  console.log(clave + ": " + persona[clave]);
}

// ej 2:

let calificaciones = {
  matematicas: 90,
  ciencias: 85,
  historia: 95,
  ingles: 88
};

// Iterar sobre las propiedades de un objeto usando for...in
for (let asignatura in calificaciones) {
  console.log("Calificación en " + asignatura + ": " + calificaciones[asignatura]);
}



// for of: para iterar sobre los elementos de un objeto iterable como arrays, sets, maps, strings, entre otros.

// ej 1:
let miArray = [1, 2, 3, 4, 5];

// Iterar sobre los elementos de un array usando for...of
for (let elemento of miArray) {
  console.log(elemento);
}

// ej 2:

let ciudadesVisitadas = ["Barcelona", "París", "Londres", "Roma", "Nueva York"];

// Iterar sobre los elementos de un array usando for...of
for (let ciudad of ciudadesVisitadas) {
  console.log("He visitado " + ciudad);
}
