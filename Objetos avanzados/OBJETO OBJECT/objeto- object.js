// Crear un objeto utilizando el constructor Object
let persona = new Object();

// Agregar propiedades al objeto utilizando la notación de puntos
persona.nombre = 'Juan';
persona.edad = 30;
persona.profesion = 'Ingeniero';

// Mostrar el objeto
console.log('Persona:', persona);

// Obtener un arreglo con las claves (propiedades) del objeto
let keys = Object.keys(persona);
console.log('Claves del objeto:', keys);

// Obtener un arreglo con los valores de las propiedades del objeto
let values = Object.values(persona);
console.log('Valores del objeto:', values);

// Verificar si una propiedad existe en el objeto
let tieneEdad = Object.hasOwnProperty.call(persona, 'edad');
console.log('¿Tiene la propiedad edad?', tieneEdad);

// Eliminar una propiedad del objeto
delete persona.profesion;
console.log('Persona después de eliminar la propiedad profesión:', persona);

// Combinar dos objetos en uno nuevo
let extraInfo = { ciudad: 'Madrid', telefono: '123456789' };
let personaConExtraInfo = Object.assign({}, persona, extraInfo);
console.log('Persona con información adicional:', personaConExtraInfo);
