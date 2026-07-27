/* Enunciado Ejercicio 33:
Crea una función a la cual le pase un string y lo convierta 
a un listado en un objeto que cuente el número de elementos.
 
Las palabras no deben incluir guiones ni guiones bajos.
 
Ejemplos:
contarElementos("pc -ordenador _computadora consola- ps5 theLastOfUs ordenador"); 
 
Devuelve: 
{ pc: 1, ordenador: 2, computadora: 1, consola: 1, ps5: 1, theLastOfUs: 1 }
*/

function contarElementos(texto){

    const palabras = texto.split(" ");

    let mapeo = {};

    palabras.forEach(palabra =>{

        //limpiar guiones: creamos exp reg q verifique si hay guiones bajos o altos, comas, signos exclamacion, indicador de global para que lo verifique en toda la palabra y lo sustituya por nada  " "
            palabra = palabra.replace(/[-_.,!]/g, " ");

            if(mapeo[palabra]){
                mapeo[palabra]++;
            }else{
                mapeo[palabra] = 1;
            }
            
         });
   
         return mapeo;
        

}

console.log(contarElementos("pc -ordenador _computadora consola- ps5 theLastOfUs ordenador")); 
console.log(contarElementos("escalera, escalera, color, poker, poker, poker, full - , full")); 

/*
Los **maps** (o **objetos** en JavaScript, como en el ejemplo de tu código) se usan en programación para **almacenar pares clave-valor**. La idea es que puedas acceder rápidamente a un valor usando una clave única asociada a ese valor.

### Aplicaciones comunes de los maps:

1. **Contar elementos repetidos**: Como en tu código, puedes usar un map para contar cuántas veces aparece cada palabra en un texto. La clave sería la palabra, y el valor sería el número de veces que aparece.
   
2. **Almacenamiento de datos**: En lugar de usar índices numéricos como en un array, los maps permiten usar claves personalizadas (como strings, números u objetos) para acceder a datos.
   
3. **Búsqueda eficiente**: Acceder a un valor en un map es rápido porque puedes consultar directamente por la clave en lugar de recorrer toda una lista.

En resumen, un map es útil cuando necesitas asociar elementos y realizar búsquedas rápidas o conteos, como en tu caso de contar palabras.
*/