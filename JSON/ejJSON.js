// Objeto en JavaScript
const persona = {
  nombre: "Carlos",
  edad: 32,
  casado: false,
  direccion: {
    ciudad: "Madrid",
    pais: "España"
  },
  hobbies: ["leer", "correr", "programar"]
};

// Convertir el objeto a JSON (string)
const jsonString = JSON.stringify(persona);
console.log("JSON como string:");
console.log(jsonString);

// Convertir el JSON (string) a objeto de nuevo
const personaDesdeJSON = JSON.parse(jsonString);

console.log("\nObjeto reconstruido desde JSON:");
console.log(personaDesdeJSON);

// Acceder a propiedades del objeto reconstruido
console.log("\nNombre:", personaDesdeJSON.nombre);
console.log("Ciudad:", personaDesdeJSON.direccion.ciudad);
console.log("Primer hobby:", personaDesdeJSON.hobbies[0]);
