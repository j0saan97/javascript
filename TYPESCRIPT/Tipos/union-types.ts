/* 
En TypeScript, los Union Types (tipos de unión) permiten que una variable o función pueda aceptar múltiples tipos de datos.
 Esto se logra utilizando el operador |, lo que permite una mayor flexibilidad en el manejo de tipos, mientras se mantiene 
 la seguridad del tipado estático. A continuación, te presento cinco ejemplos de cómo utilizar Union Types en TypeScript */

 // Ejemplo 1: Función con Union Types en Parámetros:

    function imprimirId(id: string | number): void {
        console.log(`El ID es: ${id}`);
    }

    imprimirId(123); // "El ID es: 123"
    imprimirId("ABC123"); // "El ID es: ABC123"


// Ejemplo 2: Variable con Union Types:

    let estado: boolean | string;

    estado = true;
    console.log(estado); // true

    estado = "activo";
    console.log(estado); // "activo"


    // Ejemplo 3: Union Types en Propiedades de Objetos:

    type Respuesta = {
        exito: boolean;
        mensaje: string | null;
        datos: string | number | null;
    };
    
    const respuesta1: Respuesta = {
        exito: true,
        mensaje: "Operación exitosa",
        datos: 12345,
    };
    
    const respuesta2: Respuesta = {
        exito: false,
        mensaje: "Error en la operación",
        datos: null,
    };
    
    console.log(respuesta1); // { exito: true, mensaje: 'Operación exitosa', datos: 12345 }
    console.log(respuesta2); // { exito: false, mensaje: 'Error en la operación', datos: null }

    // Ejemplo 4: Union Types en Funciones que Retornan Diferentes Tipos:

    function obtenerValor(modo: "texto" | "numero"): string | number {
        if (modo === "texto") {
            return "Hola Mundo";
        } else {
            return 42;
        }
    }
    
    const valor1 = obtenerValor("texto"); // "Hola Mundo"
    const valor2 = obtenerValor("numero"); // 42
    
    console.log(valor1);
    console.log(valor2);

    // Ejemplo 5: Union Types en Arrays:

    let listaDeElementos: (number | string)[];

    listaDeElementos = [1, "dos", 3, "cuatro"];

    listaDeElementos.forEach((elemento) => {
        console.log(elemento);
        // TypeScript sabe que 'elemento' puede ser un 'number' o un 'string'
    });
