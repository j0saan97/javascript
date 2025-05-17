// para delimitar el numero de decimales del rsdo :

//toFixed()
let a = 3.5;
let b = 3.7;

console.log(a * b); // devuelve 12.9500000000001
console.log((a * b).toFixed(4)); // devuelve el rsdo con 4 decimales : 12.9500

// .toPrecision(): devuelve el numero de cifras significativas:

console.log((a * b).toPrecision(4)); // muestra 12.95

// valueOf() es un método incorporado que se utiliza para obtener el valor primitivo de un objeto:


