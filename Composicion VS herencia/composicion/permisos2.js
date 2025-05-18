// usuarios.js

import { puedeLeer, puedeEscribir, puedeEliminar } from './permisos.js';

function crearUsuario(nombre) {
  const estado = { nombre };
  return {
    ...estado,
    ...puedeLeer(estado)
  };
}

function crearEditor(nombre) {
  const estado = { nombre };
  return {
    ...estado,
    ...puedeLeer(estado),
    ...puedeEscribir(estado)
  };
}

function crearAdmin(nombre) {
  const estado = { nombre };
  return {
    ...estado,
    ...puedeLeer(estado),
    ...puedeEscribir(estado),
    ...puedeEliminar(estado)
  };
}

// Usando los usuarios:
const visitante = crearUsuario('Ana');
visitante.leer();

const editor = crearEditor('Luis');
editor.leer();
editor.escribir();

const admin = crearAdmin('Clara');
admin.leer();
admin.escribir();
admin.eliminar();
