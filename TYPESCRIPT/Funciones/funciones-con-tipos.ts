// Ejemplo 1: Función con Tipos de Parámetros y Valor de Retorno

function sumar(a: number, b: number): number {
    return a + b;
}

const resultado = sumar(5, 3); // resultado será de tipo number y su valor será 8

// Ejemplo 2: Función con Parámetros Opcionales

function saludar(nombre: string, saludo?: string): string {
    if (saludo) {
        return `${saludo}, ${nombre}!`;
    } else {
        return `Hola, ${nombre}!`;
    }
}

const mensaje1 = saludar("Carlos"); // "Hola, Carlos!"
const mensaje2 = saludar("Carlos", "Buenos días"); // "Buenos días, Carlos!"

// Ejemplo 3: Función con Tipos Complejos (Objetos como Parámetros)

type Producto = {
    nombre: string;
    precio: number;
};

function mostrarProducto(producto: Producto): string {
    return `El producto ${producto.nombre} cuesta $${producto.precio}`;
}

const producto1: Producto = {
    nombre: "Smartphone",
    precio: 600,
};

const descripcion = mostrarProducto(producto1); // "El producto Smartphone cuesta $600"

// Ejemplo 4: Función con Tipo Unión en Parámetros

function formatearId(id: string | number): string {
    return `ID: ${id}`;
}

const idFormateado1 = formatearId("abc123"); // "ID: abc123"
const idFormateado2 = formatearId(789); // "ID: 789"

