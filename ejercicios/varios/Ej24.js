/*Enunciado Ejercicio 24:
Crea una función a la cual le pasemos un array de nombres de archivo
y nos devuelva un array con esos mismos archivos, pero si hay alguno
duplicado debe estar númerado con un (numero de repeticiones)
como hacen los sistemas operativos.
 
Ejemplos:
renombrarArchivos(["nombre", "apellido", "nombre", "nombre"]);
 
Devuelve: 
[ 'nombre', 'apellido', 'nombre(1)', 'nombre(2)' ] */

function renombrarArchivos(ficheros){

    // recorremos cada archivo y devolvemos un array nuevo
    return ficheros.map((fichero, indice)=>{

        // crear nuevo array filtrado que contenga todos los archivos menos el actual
        let filtrados = ficheros.slice(0, indice).filter(ficheroFiltro => fichero === ficheroFiltro)

        // si no hay repetidos devolvemose el erchivo actual

        // si si hay repetidos agregamos numeracion
        return filtrados.length === 0 ? fichero: `${fichero}(${filtrados.length})`
    })

        
}

console.log(renombrarArchivos(["nombre", "apellido", "nombre", "nombre", "apellido"]));