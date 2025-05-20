/*Dado un array de objetos de peliculas de los años 80 y 90. 
 
Crea dos funciones:
- Una que las filtre por género
- y otra que las filtre por la decada en este formato 80s o 90s
  */



function filtrarPorGenero(peliculas, genero){
  return peliculas.filter(pelicula => genero === pelicula.genero)
}



function filtrarPorDecada(peliculas, decada){

  return peliculas.filter(pelicula => {

    // sacar año lanzamiento de la peli
    const anioLanzamiento = pelicula.anioLanzamiento;

    // comprobar con una condicion el año
    if(decada === "80s"){
        return anioLanzamiento >= 1980 && anioLanzamiento <= 1989;
    }else if(decada === "90s"){
        return anioLanzamiento >= 1990 && anioLanzamiento <= 1999;
    }

        
  })

}

const peliculas = [
    { titulo: "Terminator", genero: "accion", anioLanzamiento: 1984 },
    { titulo: "Alien", genero: "ciencia ficción", anioLanzamiento: 1979 },
    { titulo: "Die Hard", genero: "accion", anioLanzamiento: 1988 },
    { titulo: "Predator", genero: "accion", anioLanzamiento: 1987 },
    { titulo: "Total Recall", genero: "ciencia ficción", anioLanzamiento: 1990 },
    { titulo: "RoboCop", genero: "ciencia ficción", anioLanzamiento: 1987 },
    { titulo: "Starship Troopers", genero: "ciencia ficción", anioLanzamiento: 1997 },
    { titulo: "The Fifth Element", genero: "ciencia ficción", anioLanzamiento: 1997 },
    { titulo: "Armageddon", genero: "accion", anioLanzamiento: 1998 },
    { titulo: "Deep Impact", genero: "ciencia ficción", anioLanzamiento: 1998 }
  ];

  console.log("filtradas por genero", filtrarPorGenero(peliculas, "accion"));
  console.log("filtradas por DECADA", filtrarPorDecada(peliculas, "90s"));