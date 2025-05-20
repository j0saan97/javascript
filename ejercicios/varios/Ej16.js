function mostrarTextoCaja(frase){

    // separar la frase en palabras y ver cuantos caracteres tiene la mas larga

        const palabras = frase.split(" ");
        let longitudMaxima = 0;

        palabras.forEach(palabra => {
            longitudMaxima = Math.max(longitudMaxima, palabra.length); // con Math.max evaluamos si es mas larga la palabra guardada en longitudMaxima o la que estoy recorriendo, y devuelve la longitud de la mas larga
            
        });

        console.log(palabras, longitudMaxima);

        // huecos por defecto
        const huecosPorDefecto = 4;

    // imprimir 1a linea del marco
    const asteriscosTotales = longitudMaxima + huecosPorDefecto;
    console.log("*".repeat(asteriscosTotales));

    // recorrer palabras y mostrarlas 1 por linea dentro de la caja
    palabras.forEach(palabra =>{

        const espacios = " ".repeat(longitudMaxima - palabra.length);
        console.log(`* ${palabra}${espacios} *`);

    })
    
    // imprimir linea asteriscos final
    console.log("*".repeat(asteriscosTotales)); 

}

console.log(mostrarTextoCaja("Hola soy josan sapere marco maqina"));