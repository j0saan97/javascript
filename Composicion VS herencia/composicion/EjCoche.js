/**
 * ✅ SOLUCIÓN GARANTIZADA: Composición de Objetos
 *
 * El problema se soluciona haciendo que el objeto 'estado' sea el
 * destino directo de la composición, garantizando que los mixins y
 * el objeto final comparten la misma referencia de 'bateria'.
 */

// =================================================================
// 1. MIXINS (Funciones Fábrica Modulares) - Sin Cambios
// =================================================================

// ⚙️ Mixin 1: Control de Movimiento. Solo gestiona la posición y dirección.
const puedeMoverse = (estado) => ({
    mover: (direccion, distancia) => {
        estado.posicion += distancia;
        estado.direccion = direccion;
        console.log(`[Movimiento] Moviéndose hacia ${direccion}, posición actual: ${estado.posicion}`);
    }
});

// ⚡ Mixin 2: Gestión de Energía. Solo gestiona el nivel de batería.
const puedeGestionarEnergia = (estado) => ({
    gastarBateria: (cantidad) => {
        estado.bateria -= cantidad;
        console.log(`[Energía] Batería reducida en ${cantidad}%. Restante: ${estado.bateria}%`);
    },
    verificarEnergia: () => {
        if (estado.bateria <= 5) {
            console.warn(`[Energía] Batería baja (${estado.bateria}%). Se requiere recarga.`);
            return false;
        }
        return true;
    }
});

// 🔭 Mixin 3: Escaneo de Entorno. Solo gestiona la detección de objetos.
const puedeEscanear = (estado) => ({
    detectarObstaculo: () => {
        const hayObstaculo = Math.random() < 0.3;
        if (hayObstaculo) {
            console.log(`[Escaneo] ¡Obstáculo detectado!`);
        }
        return hayObstaculo;
    }
});

// =================================================================
// 2. FUNCIÓN FÁBRICA PRINCIPAL - Composición (CORRECCIÓN FINAL)
// =================================================================

/**
 * Función Fábrica para crear el objeto AutoControlado.
 */
const crearAutoControlado = (nombre) => {
    // 1. Estado inicial del objeto (Datos)
    const estado = {
        nombre: nombre,
        posicion: 0,
        bateria: 100,
        direccion: 'Norte'
    };

    // CORRECCIÓN CLAVE: Usamos Object.assign(estado, ...)
    // Esto hace que el objeto 'estado' (que los mixins están modificando)
    // sea el objeto FINAL devuelto. Inyectamos los métodos directamente en él.
    return Object.assign(
        estado, // <-- El objeto 'estado' es el DESTINO de la composición
        puedeMoverse(estado),
        puedeGestionarEnergia(estado),
        puedeEscanear(estado)
    );
};


// =================================================================
// 3. USO Y DEMOSTRACIÓN (VERIFICACIÓN DE LA CORRECCIÓN)
// =================================================================

const autonomo = crearAutoControlado("V-Sentinel 1.0");

console.log(`\n--- Inicializando ${autonomo.nombre} ---`);
console.log(`Estado Inicial: Batería ${autonomo.bateria}%, Posición ${autonomo.posicion}`);

// 1. Primer ciclo de operación
if (autonomo.verificarEnergia()) {
    autonomo.mover('Este', 10);
    autonomo.gastarBateria(15); // Batería: 100 - 15 = 85%
}

// 2. Segundo ciclo de operación
if (autonomo.verificarEnergia()) {
    if (!autonomo.detectarObstaculo()) {
        autonomo.mover('Norte', 5);
        autonomo.gastarBateria(5); // Batería: 85 - 5 = 80% (Si no hubo obstáculo)
    } else {
        console.log("¡Ruta bloqueada! Deteniendo movimiento.");
    }
}


// 4. CONSOLE.LOG DE LA CORRECCIÓN
console.log("\n--- Estado Final (Resultado de la Corrección) ---");
console.log(`Batería restante: ${autonomo.bateria}%`); // Mostrará 80% u 85% (si hubo obstáculo)