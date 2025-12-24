/*
Las Enumeraciones o Enums son una de las pocas características de TypeScript que no existen en JavaScript estándar. 
Permiten definir un conjunto de constantes con nombre, lo que hace que tu código sea más legible y menos propenso a errores de escritura.
*/

// Ejemplo: Sistema de Citas Médicas

// 1. Definimos el Enum
// Usamos strings porque si guardamos esto en una base de datos, 
// es mejor leer "CANCELADA" que el número 2.
enum EstadoCita {
    Programada = "PROGRAMADA",
    EnCurso = "EN_CURSO",
    Completada = "COMPLETADA",
    Cancelada = "CANCELADA"
}

interface Cita {
    id: number;
    paciente: string;
    doctor: string;
    estado: EstadoCita; // Aquí usamos el Enum como tipo
}

/**
 * Función para actualizar el estado de la cita
 * Solo permite transiciones lógicas
 */
function gestionarCita(cita: Cita, nuevoEstado: EstadoCita): void {
    
    // Ejemplo de lógica de negocio usando el Enum
    if (cita.estado === EstadoCita.Completada) {
        console.log("Error: No puedes cambiar el estado de una cita que ya terminó.");
        return;
    }

    if (nuevoEstado === EstadoCita.EnCurso) {
        console.log(`El Dr. ${cita.doctor} ha llamado al paciente ${cita.paciente}.`);
    }

    cita.estado = nuevoEstado;
    console.log(`Cita ${cita.id} actualizada a: ${cita.estado}`);
}

// --- USO DEL SISTEMA ---

const miCita: Cita = {
    id: 502,
    paciente: "Andrés",
    doctor: "García",
    estado: EstadoCita.Programada
};

// 1. El paciente llega a la clínica
gestionarCita(miCita, EstadoCita.EnCurso);

// 2. El doctor termina la consulta
gestionarCita(miCita, EstadoCita.Completada);

// 3. Intento de error: Alguien intenta cancelarla después de terminada
gestionarCita(miCita, EstadoCita.Cancelada);