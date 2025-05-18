/*
<!-- Imaginemos este HTML en tu página -->
<ul>
  <li>Manzana</li>
  <li>Plátano</li>
  <li>Cereza</li>
</ul>
*/

// 1. Seleccionamos todos los <li> dentro de <ul>
const itemsNodeList = document.querySelectorAll('ul li');
// itemsNodeList es un NodeList parecido a:
// [ <li>Manzana</li>, <li>Plátano</li>, <li>Cereza</li> ]

// 2. Lo convertimos en un Array usando spread
const itemsArray = [...itemsNodeList];
// itemsArray es ahora un Array real:
// [ <li>Manzana</li>, <li>Plátano</li>, <li>Cereza</li> ]

// 3. Iteramos el array e imprimimos el texto de cada <li>
itemsArray.forEach(li => {
  console.log(li.textContent);
  // Primera iteración: imprime "Manzana"
  // Segunda iteración: imprime "Plátano"
  // Tercera iteración: imprime "Cereza"
});
