/*
Tipos de Operador:
- type of
- operador condicional o ternario
- Operadores sobre objetos:
    - el punto
    - corchetes
    - new
    - delete
    - in
    - instance of
*/

// Operador typeof
let numero6 = 6;
console.log(typeof (numero6));

// operador condicional o ternario

let edad = 19;
let mayoriaEdad = (edad >= 18) ? "es mayor de edad" : "es menor de edad";
console.log(mayoriaEdad); //muestra "es mayor de edad"

let nota = 6;
let examenAprobado = (nota >= 5) ? "estas aprobado" : "has suspendido";
console.log(examenAprobado); // muestra "estas aprobado"

// operadores sobre objetos:

// Operador pto: se usa para acceder a los metodos y las propiedades de los objetos
let coche = {
    marca: "ford",
    motor: {
        combustible: "gasolina",
        cilindrada: "120",
        potencia: "60",
    },
    color: "gris",
    modelo: "focus",
}
console.log(coche.marca); // muestra ford
console.log(coche.color); //muestra gris
// podemos acceder a la propiedad de un objeto que se haya dentro de otro haciendo uso del operador pto 2 veces
console.log(coche.motor.potencia); //muestra 60
console.log(typeof (coche));

// corchetes: se usan pa acceder al valor de una propiedad o un metodo que le precede
console.log(coche[color]);

// operador new
let nuevocoche = new Object();
nuevocoche.puertas = 4;
nuevocoche.radio = true;

console.log(typeof (nuevocoche));

// delete : se usa para borrar una propiedad de una instancia
delete coche.marca;
console.log(coche);

// in : nos dice su una propiedad existe en el objeto

console.log(color in coche);

// instance of : nos dice si la instancia proviene del objeto que indiquemos

console.log(nuevocoche instanceof coche);