/* Operador de interpolación: 
El operador de interpolación en JavaScript se refiere a la utilización de plantillas de cadenas (template literals) para insertar valores de variables
 y expresiones dentro de una cadena de texto. Este operador se implementa utilizando las comillas invertidas (backticks) ` y las expresiones a interpolar 
 se colocan dentro de ${}. Este enfoque es más legible y fácil de manejar que la concatenación tradicional de cadenas. */


    const nombre = "Juan";
    const edad = 30;
    const mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;

    console.log(mensaje); // "Hola, mi nombre es Juan y tengo 30 años."

    // Interpolación de Expresiones: Permite insertar variables y expresiones directamente en la cadena.

    const a = 5;
    const b = 10;
    console.log(`La suma de ${a} y ${b} es ${a + b}.`); // "La suma de 5 y 10 es 15."

    // Multilínea: Permite crear cadenas de texto multilínea de forma más sencilla.

    const poema = `Rosas son rojas,
Violetas son azules,
El azúcar es dulce,
Y tú también lo eres.`;

console.log(poema);
// Salida:
// Rosas son rojas,
// Violetas son azules,
// El azúcar es dulce,
// Y tú también lo eres.


    // Incorporación de Expresiones Complejas: Se pueden incorporar expresiones complejas y funciones dentro de la interpolación.

    function saludo(nombree) {
        return `Hola, ${nombree}!`;
    }
    
    const nombree = "Marta";
    console.log(`${saludo(nombree)} ¿Cómo estás hoy?`); // "Hola, Marta! ¿Cómo estás hoy?"
    

    // EJ:

        const producto = "laptop";
        const precio = 1200;
        const descuento = 100;

        function calcularPrecioFinal(precio, descuento) {
            return precio - descuento;
        }

        const mensajee = `El precio final de la ${producto} es $${calcularPrecioFinal(precio, descuento)}.`;
        console.log(mensajee); // "El precio final de la laptop es $1100."
