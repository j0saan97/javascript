const original2 = {
    // 'c' es un valor primitivo (número). Su valor se almacena directamente.
    c: 20,

    // 'd' es un valor no-primitivo (un objeto). Solo se almacena la REFERENCIA  a la ubicación de memoria donde reside el objeto { w: 'Original' }.
    d: { w: 'Original' }
};

// Se crea una copia superficial: Object.assign({}, original2)
// 1. Crea un nuevo objeto vacío: {}
// 2. Copia las propiedades de original2 a ese nuevo objeto.
const copiaAssign = Object.assign({}, original2);

console.log("\n--- Object.assign() ---");

// A. Prueba con Primitivo (Copia por Valor)
copiaAssign.c = 500;
// Cuando se copió 'c', se copió el valor '20'.
// Modificar copiaAssign.c (500) NO afecta a original2.c.
console.log(`Original2.c: ${original2.c}`);      // Salida: 20 (Copia por Valor)
console.log(`CopiaAssign.c: ${copiaAssign.c}`);  // Salida: 500 (La copia cambió)

// B. Prueba con Objeto Anidado (Paso por Referencia)
copiaAssign.d.w = 'Cambiado por Assign';
// Cuando se copió 'd', NO se copió el objeto { w: 'Original' }.
// Solo se copió la REFERENCIA (la dirección de memoria) de ese objeto.
// Tanto original2.d como copiaAssign.d apuntan al MISMO objeto en memoria.
// Al modificar copiaAssign.d.w, estás modificando el objeto compartido.
console.log(`Original2.d.w: ${original2.d.w}`);      // Salida: 'Cambiado por Assign' (¡Cambia el original!)
console.log(`CopiaAssign.d.w: ${copiaAssign.d.w}`); // Salida: 'Cambiado por Assign'

/*
! Regla Fundamental: Propiedades Primitivas (valores simples como números, strings): Se copian por valor. Modificar la copia NO afecta al original.
! Propiedades de Objeto Anidado (objetos o arrays): Se copian por referencia. Modificar el contenido de la copia SÍ afecta al original.
*/