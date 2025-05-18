// ejemplo.js

document.addEventListener("DOMContentLoaded", () => {
  const btnGenerar = document.getElementById("generarTabla");
  const btnTema = document.getElementById("alternarTema");
  const contenedor = document.getElementById("contenedorTabla");
  let modoOscuro = false;

  // Función para generar una tabla con datos ficticios
  function crearTabla() {
    const datos = [
      { nombre: "Ana", edad: 28, ciudad: "Madrid" },
      { nombre: "Luis", edad: 35, ciudad: "Sevilla" },
      { nombre: "Sofía", edad: 22, ciudad: "Valencia" }
    ];

    const tabla = document.createElement("table");
    tabla.style.borderCollapse = "collapse";
    tabla.style.width = "100%";

    const encabezado = document.createElement("tr");
    ["Nombre", "Edad", "Ciudad"].forEach(texto => {
      const th = document.createElement("th");
      th.textContent = texto;
      th.style.border = "1px solid #999";
      th.style.padding = "0.5rem";
      th.style.background = "#ddd";
      encabezado.appendChild(th);
    });
    tabla.appendChild(encabezado);

    datos.forEach(fila => {
      const tr = document.createElement("tr");
      Object.values(fila).forEach(valor => {
        const td = document.createElement("td");
        td.textContent = valor;
        td.style.border = "1px solid #ccc";
        td.style.padding = "0.5rem";
        tr.appendChild(td);
      });
      tabla.appendChild(tr);
    });

    contenedor.innerHTML = "";
    contenedor.appendChild(tabla);
  }

  // Función para alternar tema claro/oscuro
  function alternarTema() {
    modoOscuro = !modoOscuro;
    document.body.style.backgroundColor = modoOscuro ? "#222" : "#fff";
    document.body.style.color = modoOscuro ? "#eee" : "#000";
    contenedor.style.borderColor = modoOscuro ? "#666" : "#ccc";
  }

  btnGenerar.addEventListener("click", crearTabla);
  btnTema.addEventListener("click", alternarTema);
});
