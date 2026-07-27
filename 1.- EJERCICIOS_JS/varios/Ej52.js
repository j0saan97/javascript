/* Dado un array de arrays, unir todos los arrays en uno solo
sin usar la función flat o concat de javascript
solo con estructuras de control y funciones basicas de arrays

    Ejemplos:
    const numeros = [  
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
    ];
    
    limpiarNumeros(numeros);
    
    Devuelve: 
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */

function limpiarNumeros(numeros){
    let resultado = [];

    for(subarray of numeros){
        for(numero of subarray){
            resultado.push(numero);
        }
    }

    return resultado;
}


    const numeros = [  
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
        ];

        console.log(limpiarNumeros(numeros));

        /*
        Primer bucle: Toma cada subarray de la matriz.
        
        Segundo bucle: Recorre cada número dentro del subarray actual y lo añade al array resultado.

        Este patrón de doble bucle es común para trabajar con matrices y otras estructuras anidadas.
        es totalmente válido utilizar x en lugar de subarray en el bucle. El nombre de la variable en un bucle for...of es arbitrario y lo defines tú según lo que sea más claro o conveniente.

Sin embargo, es importante elegir nombres descriptivos para mejorar la legibilidad del código. Usar subarray en lugar de x es preferible en este caso, ya que indica claramente que la variable 
representa un subarray dentro de la matriz.
        */