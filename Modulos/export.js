/*En JavaScript, especialmente cuando se trabaja con módulos ES6 (ECMAScript 2015), import y export se utilizan para gestionar la importación y exportación de código entre archivos. Estos conceptos permiten dividir el código en módulos reutilizables y mantener un código más organizado y mantenible.

export
El uso de export permite declarar qué partes de un archivo deben ser accesibles desde otros archivos.

Tipos de exportaciones*/

// Exportación nombrada: Permite exportar múltiples elementos desde un módulo. Cada elemento exportado debe ser importado usando el mismo nombre.

    // archivo: math.js
    export const pi = 3.1416;
    export function sumar(a, b) {
    return a + b;
    }

// Exportación por defecto: Exporta un único valor por defecto por módulo. No tiene nombre específico y puede ser importado con cualquier nombre.

    // archivo: mensaje.js
    export default function mensaje() {
        console.log("Hola, mundo!");
    }
  
// Exportaciones agrupadas: Se pueden agrupar varias exportaciones en una sola declaración.

    // archivo: utils.js
    const multiplicar = (a, b) => a * b;
    const dividir = (a, b) => a / b;

    export { multiplicar, dividir };
