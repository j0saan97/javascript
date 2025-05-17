const fechaActual = new Date();
console.log(fechaActual);

// objeto Date con una fecha específica
const fechaEspecifica = new Date('2024-04-01T12:00:00');
console.log(fechaEspecifica);

// Obtener componentes individuales de una fecha:

const fecha = new Date();
const año = fecha.getFullYear();
const mes = fecha.getMonth(); // (0-11)
const dia = fecha.getDate();
const hora = fecha.getHours();
const minutos = fecha.getMinutes();
const segundos = fecha.getSeconds();
console.log(`${año}-${mes + 1}-${dia} ${hora}:${minutos}:${segundos}`);


// Convertir una cadena de texto a objeto Date:

const fechaTexto = '2024-04-01T12:00:00';
const fechaObjeto = new Date(fechaTexto);
console.log(fechaObjeto);

// Obtener el día de la semana de una fecha:

const fechaa = new Date();
const diaSemana = fecha.getDay(); // (0 para domingo, 1 para lunes, ..., 6 para sábado)
console.log(diaSemana);

// Sumar o restar días a una fecha:

const fechaaa = new Date();
fecha.setDate(fecha.getDate() + 7); // Sumar 7 días
console.log(fecha);
