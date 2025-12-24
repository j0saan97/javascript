/*
Aquí aprenderás a usar Tipos de Unión, Enums y cómo TypeScript nos ayuda a evitar que escribamos mal los estados.

Ejemplo: Sistema de Gestión de Tareas (Tasks)
Imagina que quieres una función que cambie el estado de una tarea y registre quién hizo el cambio.
*/

// 1. Definimos los estados posibles con un "String Literal Type"
// Esto es mejor que un string normal porque SOLO acepta estos 3 valores
type Estado = "Pendiente" | "En Progreso" | "Completado";

interface Tarea {
    id: number;
    titulo: string;
    estado: Estado;
}

interface RegistroCambio {
    tareaId: number;
    nuevoEstado: Estado;
    usuario: string;
    fecha: Date;
}

/**
 * Función: actualizarEstadoTarea
 * Cambia el estado de una tarea y genera un ticket de registro.
 */
function actualizarEstadoTarea(
    tarea: Tarea, 
    nuevoEstado: Estado, 
    usuario: string = "Sistema"
): RegistroCambio {
    
    // Cambiamos el estado en el objeto original
    tarea.estado = nuevoEstado;

    // Retornamos el objeto de registro (debe cumplir la interfaz RegistroCambio)
    return {
        tareaId: tarea.id,
        nuevoEstado: nuevoEstado,
        usuario: usuario,
        fecha: new Date()
    };
}

// --- USO DEL EJEMPLO ---

let miTarea: Tarea = { 
    id: 101, 
    titulo: "Aprender TypeScript", 
    estado: "Pendiente" 
};

// Caso correcto
const log = actualizarEstadoTarea(miTarea, "En Progreso", "Admin_Juan");

// ¡ERROR DE TYPESCRIPT SI INTENTAS ESTO!
// actualizarEstadoTarea(miTarea, "Terminado"); 
// Error: "Terminado" no es asignable al tipo "Estado" (debería ser "Completado")

/*
¿Qué hace especial a este ejemplo?Tipos de Unión (|): Al definir type Estado = "Pendiente" | "En Progreso" | "Completado", creas 
una validación de seguridad. Si escribes mal el estado (por ejemplo, "completada" en minúsculas), el editor te avisará antes de 
guardar.Contratos estrictos: La función promete devolver un RegistroCambio. Si olvidas poner la fecha o el usuario, 
el código no compilará.Mutación controlada: El ejemplo muestra cómo una función puede modificar un objeto recibido (tarea) y 
al mismo tiempo generar un nuevo tipo de dato como respuesta.Resumen de lo aprendidoCaracterística¿Para qué sirve?InterfacesPara 
definir la estructura de los objetos (Tarea, Producto).Union TypesPara limitar un string a valores específicos y evitar errores de
dedo.Tipo de RetornoPara asegurar que la función siempre entregue lo que se espera.
*/