/*
En TypeScript, las interfaces se utilizan para definir la estructura de un objeto, es decir, qué propiedades y métodos debe tener y cuáles son sus tipos.
 Esto permite a TypeScript verificar que los objetos que implementan una interfaz cumplen con su estructura. A continuación, te muestro varios ejemplos de
  cómo se utilizan las interfaces en TypeScript.
*/

// Ejemplo 1: Interfaz Básica para un Objeto:

interface Usuario {
    nombre: string;
    edad: number;
    correo: string;
}

const usuario1: Usuario = {
    nombre: "María",
    edad: 28,
    correo: "maria@example.com",
};


// Ejemplo 2: Propiedades Opcionales:

interface Vehiculo {
    marca: string;
    modelo: string;
    anio?: number; // Propiedad opcional
}

const vehiculo1: Vehiculo = {
    marca: "Toyota",
    modelo: "Corolla",
};

const vehiculo2: Vehiculo = {
    marca: "Honda",
    modelo: "Civic",
    anio: 2020,
};

// Ejemplo 3: Interfaces con Métodos

interface Calculadora {
    sumar(a: number, b: number): number;
    restar(a: number, b: number): number;
}

const calculadora: Calculadora = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
};

console.log(calculadora.sumar(5, 3)); // 8
console.log(calculadora.restar(5, 3)); // 2

// ejemplo 4 : Herencia con interfaces:

interface Persona {
    nombre: string;
    edad: number;
}

interface Empleado extends Persona {
    salario: number;
    puesto: string;
}

const empleado1: Empleado = {
    nombre: "Luis",
    edad: 35,
    salario: 50000,
    puesto: "Ingeniero de Software",
};

// Ejemplo 5: Interfaces con Index Signatures

interface Diccionario {
    [key: string]: string;
}

const traducciones: Diccionario = {
    hola: "hello",
    mundo: "world",
    adios: "goodbye",
};

console.log(traducciones["hola"]); // "hello"

//Ejemplo 6: Interfaces para Funciones:

interface Operacion {
    (a: number, b: number): number;
}

const multiplicar: Operacion = (a, b) => a * b;
const dividir: Operacion = (a, b) => a / b;

console.log(multiplicar(10, 5)); // 50
console.log(dividir(10, 5)); // 2
