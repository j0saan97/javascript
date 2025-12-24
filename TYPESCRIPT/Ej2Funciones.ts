// 1. Definimos qué es un Producto
interface Producto {
    nombre: string;
    precio: number;
    categoria: string;
}

/**
 * Función: aplicarDescuento
 * @param productos - Una lista de productos
 * @param porcentaje - Cuánto descuento aplicar (ej: 0.10 para 10%)
 * @param precioMinimo - Solo descontar si el precio supera este valor
 */
function aplicarDescuento(
    productos: Producto[], 
    porcentaje: number, 
    precioMinimo: number = 100 // Valor por defecto
): Producto[] {
    
    // Usamos .map para crear una NUEVA lista con los precios modificados
    return productos.map(p => {
        if (p.precio > precioMinimo) {
            // Retornamos el producto con el precio rebajado
            return {
                ...p, // Copiamos todas las propiedades (nombre, categoría)
                precio: p.precio * (1 - porcentaje) // Calculamos el nuevo precio
            };
        }
        // Si es barato, lo devolvemos tal cual
        return p;
    });
}

// --- USO DE LA FUNCIÓN ---

const inventario: Producto[] = [
    { nombre: "Teclado", precio: 50, categoria: "Tech" },
    { nombre: "Monitor", precio: 300, categoria: "Tech" },
    { nombre: "Silla Gamer", precio: 200, categoria: "Muebles" }
];

// Aplicamos un 20% de descuento (0.2) a lo que cueste más de 150
const rebajas = aplicarDescuento(inventario, 0.2, 150);

console.log(rebajas);

/*
¿Qué hace que esto sea TypeScript y no JavaScript?
Seguridad en el Array: Al decir productos: Producto[], TypeScript no te dejará pasar una lista de números o strings por error. Tienen que ser objetos con nombre y precio.

Valores por Defecto: precioMinimo: number = 100 hace que el parámetro sea opcional. Si no lo pasas al llamar a la función, usará 100 automáticamente.

Contrato de Retorno: Al escribir : Producto[] después de los paréntesis de la función, obligas a que la función devuelva siempre una lista de productos. Si olvidas el return, TypeScript te avisará con un error rojo.
*/