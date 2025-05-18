// Definimos un objeto con hasta 5 propiedades
const libro = {
  titulo: "El Quijote",
  autor: "Miguel de Cervantes",
  año: 1605,
  editorial: "Francisco de Robles",
  paginas: 863
};

// Desestructuramos solo las propiedades que necesitamos
// - titulo    ← extrae libro.titulo
// - autor     ← extrae libro.autor
// - paginas   ← extrae libro.paginas
const { titulo, autor, paginas } = libro;

console.log("Título:", titulo);     // "El Quijote"
// Podemos usar 'autor' directamente, sin libro.autor
console.log("Autor:", autor);       // "Miguel de Cervantes"
// Y 'paginas' sin acceder al objeto original
console.log("Páginas:", paginas);   // 863

// El resto de propiedades (año, editorial) NO crean variables
// pero siguen existiendo dentro de 'libro'
console.log("Objeto original sigue intacto:", libro);
