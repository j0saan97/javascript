// Crear una expresión regular para encontrar números de teléfono en un formato específico
let telefonoExpresionRegular = /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/;

// Ejemplo de texto donde buscar números de teléfono
let texto = "Mi número de teléfono es 123-456-7890. Llámame si necesitas ayuda.";

// Testear si la expresión regular coincide con el texto
let coincidencia = telefonoExpresionRegular.test(texto);
console.log("¿Número de teléfono encontrado?", coincidencia);

// Obtener un arreglo de todas las coincidencias encontradas en el texto
let coincidencias = texto.match(telefonoExpresionRegular);
console.log("Coincidencias encontradas:", coincidencias);

// Buscar la primera coincidencia y obtener su índice de inicio en el texto
let primeraCoincidenciaIndice = texto.search(telefonoExpresionRegular);
console.log("Índice de la primera coincidencia:", primeraCoincidenciaIndice);

// Reemplazar todas las coincidencias en el texto con un valor específico
let nuevoTexto = texto.replace(telefonoExpresionRegular, "[TELÉFONO]");
console.log("Texto con números de teléfono reemplazados:", nuevoTexto);
