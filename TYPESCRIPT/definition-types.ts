//definicion de tipos:

//ej1:

type User = {
    id: number;
    name: string;
    isAdmin: boolean;
};

const user: User = {
    id: 1,
    name: "John Doe",
    isAdmin: true,
};


//ej2: Tipo Alias para un Objeto

type Persona = {
    nombre: string;
    edad: number;
    casado: boolean;
};

const persona1: Persona = {
    nombre: "Juan",
    edad: 30,
    casado: true,
};


//ej 3: Tipo Alias para un Unión de Tipos

type ID = string | number;

const userId1: ID = "abc123";
const userId2: ID = 456;


// ej 4: Ejemplo 3: Interface para la Descripción de un Objeto Complejo:

interface Producto {
    nombre: string;
    precio: number;
    disponible: boolean;
    tags?: string[]; // Propiedad opcional
}

const producto1: Producto = {
    nombre: "Laptop",
    precio: 1500,
    disponible: true,
};

const producto2: Producto = {
    nombre: "Mouse",
    precio: 25,
    disponible: false,
    tags: ["accesorios", "periféricos"],
};


