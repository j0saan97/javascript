// permisos.js

export const puedeLeer = (estado) => ({
  leer: () => console.log(`${estado.nombre} está leyendo contenido`)
});

export const puedeEscribir = (estado) => ({
  escribir: () => console.log(`${estado.nombre} está escribiendo contenido`)
});

export const puedeEliminar = (estado) => ({
  eliminar: () => console.log(`${estado.nombre} está eliminando contenido`)
});

/*


Análisis de la Estructura
Las funciones puedeLeer, puedeEscribir, y puedeEliminar no son clases ni constructores; son funciones que tienen un propósito específico:

1. Mixins (Comportamientos)
Cada función (como puedeLeer) actúa como un mixin que inyecta un comportamiento específico en un objeto.

Toma un objeto (estado) como argumento.

Devuelve un nuevo objeto literal que contiene las funciones (métodos) que representan el comportamiento.

2. Composición de Comportamiento
La clave es cómo se utiliza la composición con estos mixins. Estos pequeños módulos permiten que otros objetos "elijan" qué capacidades necesitan, modelando la relación "tiene un" (has-a), en lugar de la rígida relación "es un" (is-a) de la herencia.

*/



/*
Conceptos de POO que Demuestra
Este código demuestra los siguientes conceptos avanzados de POO en JavaScript:

1. Composición sobre Herencia
Es el ejemplo paradigmático de por qué la composición es preferible. Si hubieras usado herencia, tendrías que crear una jerarquía compleja (UsuarioBase -> UsuarioLector -> UsuarioEscritor -> UsuarioAdmin), con todos los problemas de acoplamiento y rigidez que discutimos. Con los mixins, simplemente compones las piezas que necesitas.

2. Encapsulación de Comportamiento
Cada función (mixin) encapsula un único comportamiento (leer, escribir). Esto se alinea con el Principio de Responsabilidad Única (SRP) de S.O.L.I.D.

3. Funciones Factoría (Factory Functions)
El patrón de uso de estos mixins a menudo culmina en una Función Factoría (CrearUsuario en el ejemplo de arriba) que es responsable de ensamblar el objeto final a partir de sus componentes. Esto te da un control total sobre la creación y los permisos del objeto sin usar la palabra clave new.

4. Inmutabilidad y Reutilización
Los mixins devuelven un nuevo objeto con las funciones, manteniendo las funciones originales puras (no modifican la función estado que reciben), lo que facilita su reutilización y testeo.
*/