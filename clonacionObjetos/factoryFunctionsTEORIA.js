/*
Funciones de Fábrica (Factory Functions) en JavaScript
Una función de fábrica es simplemente una función que crea y devuelve un nuevo objeto.

No utilizan la palabra clave new.

No utilizan la sintaxis de clases (class).

📌 Características Clave
Simplicidad: Son una forma sencilla y directa de crear objetos sin la complejidad del binding de this o el uso de prototipos/clases.

Encapsulamiento (Closures): Aprovechan los closures para crear propiedades privadas (variables que son accesibles solo dentro de la función de fábrica, pero a las que pueden acceder los métodos del objeto creado).

Composición: Son ideales para implementar el patrón de Composición sobre Herencia (Composition over Inheritance) mediante la inclusión de otras funciones (llamadas mixins o traits), lo que permite construir objetos compuestos con diferentes comportamientos.

🧱 Objeto Compuesto con Factory Functions
Un objeto compuesto se construye combinando múltiples "fábricas" o "mixins". Cada mixin proporciona una parte del comportamiento o datos del objeto final.
*/

// 1. MIXIN: Función que añade la habilidad de Correr al objeto.
const puedeCorrer = (atleta) => ({
    // El método `correr` accede a las propiedades del `atleta` (e.g., el nombre)
    correr: (distancia) => {
        console.log(`${atleta.nombre} ha corrido ${distancia} km.`);
    }
});

// 2. MIXIN: Función que añade la habilidad de Nadar.
const puedeNadar = (atleta) => ({
    nadar: (estilo) => {
        console.log(`${atleta.nombre} está nadando estilo ${estilo}. ¡Es un gran nadador!`);
    }
});

// 3. MIXIN: Función que añade la habilidad de Saltar.
const puedeSaltar = () => ({
    saltar: (altura) => {
        console.log(`¡El atleta salta! Ha alcanzado una altura de ${altura} metros.`);
    }
});

// 4. MIXIN: Función que añade la habilidad de Esprintar.
const puedeSprintar = (atleta) => ({
    sprintar: (tiempo) => {
        console.log(`${atleta.nombre} hace un sprint explosivo durante ${tiempo} segundos.`);
    }
});

// 5. FACTORY FUNCTION PRINCIPAL: Crea y compone el objeto Atleta.
const crearAtleta = (nombre, deportePrincipal) => {
    // 5.1. Definimos el estado base (propiedades) del atleta
    const estado = {
        nombre,
        deportePrincipal,
        nivelEnergia: 100 // Propiedad inicial
    };

    // 5.2. Componemos el objeto final usando Object.assign
    // Se combinan el estado base y los resultados de las funciones mixin.
    return Object.assign(
        {},                // Objeto destino vacío
        estado,            // Propiedades base (nombre, deportePrincipal, nivelEnergia)
        puedeCorrer(estado),     // Habilidad de correr
        puedeNadar(estado),      // Habilidad de nadar
        puedeSaltar(),           // Habilidad de saltar
        puedeSprintar(estado)    // Habilidad de esprintar
    );
};

// --- Uso de la Factory Function para crear un Atleta ---

const maria = crearAtleta("Maria", "Triatlón");

console.log(`--- Presentación del Atleta ---`);
console.log(`Atleta: ${maria.nombre}`);
console.log(`Deporte: ${maria.deportePrincipal}`);
console.log(`Energía inicial: ${maria.nivelEnergia}`);

console.log(`\n--- Sesión de Entrenamiento ---`);

maria.correr(10);           // Usa el mixin 'puedeCorrer'
maria.sprintar(20);         // Usa el mixin 'puedeSprintar'
maria.nadar("Libre");       // Usa el mixin 'puedeNadar'
maria.saltar(1.5);          // Usa el mixin 'puedeSaltar'