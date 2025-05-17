/*
hay ocho tipos de datos en JavaScript. Siete de ellos se denominan “primitivos”, porque sus valores contienen solo un dato (sea un string, un número o lo que sea).

Podemos crear un objeto usando las llaves {…} con una lista opcional de propiedades. Una propiedad es un 
par “key:value”, donde keyes un string (también llamado “nombre clave”), y value puede ser cualquier cosa. 

Se puede crear un objeto vacío (“gabinete vacío”) utilizando una de estas dos sintaxis:

let user = new Object(); // sintaxis de "constructor de objetos"
let user = {};  // sintaxis de "objeto literal"

Normalmente se utilizan las llaves {...}. Esa declaración se llama objeto literal.
*/

// Literales y propiedades: Podemos poner inmediatamente algunas propiedades dentro de {...} como pares “clave:valor”:

let user = {     // un objeto
  name: "John",  // En la clave "name" se almacena el valor "John"
  age: 30        // En la clave "age" se almacena el valor 30
};

/* Una propiedad tiene una clave (también conocida como “nombre” o “identificador”) antes de los dos puntos ":" y un valor a la derecha.

En el objeto user hay dos propiedades:

La primera propiedad tiene la clave "name" y el valor "John".
La segunda tienen la clave "age" y el valor 30. */

// accediendo a propiedades con el operador .

alert( user.name ); // John
alert(user.age); // 30

// El valor puede ser de cualquier tipo. Agreguemos uno booleano:
user.isAdmin = true;

// eliminar una propiedad --> delete:

delete user.age;


// También podemos nombrar propiedades con más de una palabra. Pero, de ser así, debemos colocar la clave entre comillas "...":

let user = {
  name: "John",
  age: 30,
  "likes birds": true  // Las claves con más de una palabra deben ir entre comillas
};

/* Corchetes
La notación de punto no funciona para acceder a propiedades con claves de más de una palabra:*/

// asignando
user["likes dogs"] = true;

// obteniendo
alert(user["likes dogs"]); // true

// Nota que el string dentro de los corchetes está adecuadamente entre comillas (cualquier tipo de comillas servirían).


/*
El uso de variables para la creación de propiedades es tán común que existe un atajo para valores de propiedad especial para hacerla más corta.
En lugar de name:name, simplemente podemos escribir name, tal cual:
*/

let user = {
  name,  // igual que name:name
  age: 30
};