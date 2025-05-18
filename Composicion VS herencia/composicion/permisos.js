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
