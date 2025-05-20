/*
! Ej 8: Crea un algoritmo al cual le pase un numero entero y me lo convierta a numero romano.
 
ej enteroARomano(100); // rsdo C
    enteroARomano(345); // rsdo CCCXLV

*/

function enteroARomano(numero){

    //numero original
    const numeroOriginal = numero;

    // variable para guardar string final
    let resultado = "";


    // listado de numeros romanos
    const caracteresRomanos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    // el equivalente en numeros romanos
    const valoresDecimales = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    // bucle para recorres numeros decimales
    for(let i = 0; i < valoresDecimales.length; i++){
         // bucle para iterar mientras el num sea > o = al num decimal que estoy recorriendo
         while(numero >= valoresDecimales[i]){

            //añadir el caracter romano al resultado.
            resultado += caracteresRomanos[i];

      //actualizar numero para restar el valor decimal que ya he agregado al rsdo de numeros romanos   
      numero -= valoresDecimales[i];
      
        }

    }
       

return "El numero decimal " + numeroOriginal + " en romano es " +  resultado;
        
}


console.log(enteroARomano(2003));