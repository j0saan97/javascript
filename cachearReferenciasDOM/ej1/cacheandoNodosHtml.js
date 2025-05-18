// script.js (modificado con DOMContentLoaded y logs de depuración)

document.addEventListener('DOMContentLoaded', () => {
  // Ejemplo 1: createElement
  const btn1 = document.getElementById('btn1');
  const res1 = document.getElementById('resultado1');
  console.log('Botón 1:', btn1, 'Contenedor 1:', res1);
  if (btn1 && res1) {
    btn1.addEventListener('click', () => {
      const caja = document.createElement('div');
      caja.textContent = '¡Hola mundo! (createElement)';
      caja.style.padding = '0.5rem';
      caja.style.background = '#eef';
      caja.style.border = '1px solid #99c';
      res1.appendChild(caja);
    });
  }

  // Ejemplo 2: <template>
  const btn2 = document.getElementById('btn2');
  const res2 = document.getElementById('resultado2');
  const tpl = document.getElementById('tpl-item');
  console.log('Botón 2:', btn2, 'Template:', tpl, 'Contenedor 2:', res2);
  if (btn2 && tpl && res2) {
    btn2.addEventListener('click', () => {
      ['Elemento A', 'Elemento B'].forEach(texto => {
        const clone = tpl.content.cloneNode(true);
        clone.querySelector('.item').textContent = texto;
        res2.appendChild(clone);
      });
    });
  }

  // Ejemplo 3: innerHTML
  const btn3 = document.getElementById('btn3');
  const res3 = document.getElementById('resultado3');
  const tarjetaHTML = `
    <div class="tarjeta" style="border:1px solid #c99; padding:0.5rem; margin:0.5rem 0;">
      <h3>Título Tarjeta</h3>
      <p>Contenido generado con innerHTML.</p>
    </div>
  `;
  console.log('Botón 3:', btn3, 'Contenedor 3:', res3);
  if (btn3 && res3) {
    btn3.addEventListener('click', () => {
      res3.innerHTML += tarjetaHTML;
    });
  }

  // Ejemplo 4: DocumentFragment
  const btn4 = document.getElementById('btn4');
  const res4 = document.getElementById('resultado4');
  console.log('Botón 4:', btn4, 'Contenedor 4:', res4);
  if (btn4 && res4) {
    btn4.addEventListener('click', () => {
      const frag = document.createDocumentFragment();
      for (let i = 1; i <= 5; i++) {
        const li = document.createElement('li');
        li.textContent = `Ítem ${i}`;
        frag.appendChild(li);
      }
      res4.appendChild(frag);
    });
  }
});

