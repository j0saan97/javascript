/*
- comillas simples
- comillas dobles
- intercalado de ambas para introducir frases entrecomilladas en un string
- comillas invertidas

Métodos:
    
     - para obtener la longitud de 1 string: 
        - .length : nos dice la longitud del elemento

    - para obtener partes de strings:  
        - slice() 
        - substring()
        - substr(): esta obsoleto en las nuevas versiones

    - para reemplazar partes de cadenas de texto:
        - replace

    - eliminar espacios
        - inicio: .trimStart
        - final: .trimEnd

    - obtener el caracter que hay en cierta posicion: charAt() 

    - Obtener la posicion de una palabra dentro de una cadena de caracteres .indexOf("palabra-a-buscar")
*/ 


// comillas simples y dobles: uso
let str_sng = 'soy 1 string de comillas simples';
let str_dbl = "soy 1 string con comillas dobles";
// los 2 son validos

console.log(str_dbl);
console.log(str_sng);

// si una frase lleva comillas dentro de ella, para que js las interprete bien podemos:

//con el caracter de escape o backslash
let str_comillas = "El otro día me dijo literalmente \"ve a sacar la basura\"";

// usando comillas simples para el string y comillas dobles para la frase entrecomillada
let str_comillas_simples = 'El otro día me dijo literalmente "ve a sacar la basura"';

// al contrario que el anterior: dobles para el string y simples para la frase entrecomillada
let str_comillas_dobles = "El otro día me dijo literalmente 've a sacar la basura'";

console.log(str_comillas);
console.log(str_comillas_simples);
console.log(str_comillas_dobles);

//comillas invertidas: IMPORTANTE
let nombre = "Iñigo";
let saludo = `Hola, ${nombre} bienvenido`;
console.log(saludo); // devuelve saludo con el valor de la variable que hemos especificado, muy util para react, angular y view

//para introducir una variable en un string la sintaxis es el simbolo del dolar con el nombre de la variable a inotrucir:  `${nombre_variable_a_introducir}`

// METODOS STRING:

// .length

let str = "Hola soy un string";
console.log(str.length);

// Obtener partes de una cadena:

//slice
let slice_str = str.slice(5, 10);
console.log(slice_str);

                          // en slice y substring pasamos como parametro el caracter inicial y el último que queremos coger de la cadena
// substring
let substring_str = str.substring(5, 10);
console.log(substring_str);



// replace: sintaxis: nombreCadena.replace(valorQueSaco, valorQueMeto)
let cadenita = "esto es un cadena d texto";
let nuevaCadena = cadenita.replace("cadena", "trozo");
console.log(nuevaCadena);

// NOTA IMPORTANTE: AUNQUE YO ELIMINE EL VALOR DE cadenita EL VALOR DE nuevaCadena no se borra, dado que las variables almacenan su valor en espacios diferentes.

// replace solo afecta a la 1a instancia encontrada, si quiero que englobe mas instancias, necesito usar expresiones regulares
delete cadenita;
console.log(nuevaCadena); // muestra nuevaCadena

let texto_largo = "el arbol, el mono, el niño, el perro";
// si uso la expresion regular /g (global) reemplaza todas las instancias:

console.log(texto_largo.replace(/el/g, "los")); //cambia todos los "el" x "los"


//- eliminar espacios: .trim() , trimStart(), .trimEnd()
let str_con_espacios = "     soy un string con espacios                      ";

console.log(str_con_espacios.length); // muestra 53

console.log(str_con_espacios.trim().length); //muestra 26
console.log(str_con_espacios.trimStart().length); // muestra 48
console.log(str_con_espacios.trimEnd().length); // muestra 31

// obtener el caracter que hay en cierta posicion: .charAt(numero indice) 

let str_4 = "hola, soy el string num 4";
console.log(str_4.charAt(6)); // muestra s

// index of : nos devuelve la 1a instancia de la cadena buscada

let str_5 = " hola soy josan y juego poker, desde hace mucho tiempo me llaman josan";
console.log(str_5.indexOf("josan")); // muestra 10

// si no encuentra el caracter nos devolverá -1.

// last.indexOf() : nos devuelve la ultima instanciua de la cadena buscada.

console.log(str_5.lastIndexOf("josan")); // muestra 65