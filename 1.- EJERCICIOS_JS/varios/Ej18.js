/*
Dado un array de usuarios, mostrar sólo los que tengan más de 20 años
y en su nombre tengan la letra "o" y "n"
 
  const usuarios = [
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Juan', edad: 23 },
    { nombre: 'Pepe', edad: 12 },
    { nombre: 'Raul', edad: 28 },
    { nombre: 'Paco', edad: 38 },
    { nombre: 'Jason', edad: 56}
  ];
 
Ejemplos:
filtrarUsuarios(usuarios);
 
Devuelve: 
[
    { nombre: 'Antonio', edad: 20 },
    { nombre: 'Jason', edad: 56}
]

*/ 

const usuarios = [
    { nombre: 'Antonio', edad: 21 },
    { nombre: 'Juan', edad: 23 },
    { nombre: 'Pepe', edad: 12 },
    { nombre: 'Raul', edad: 28 },
    { nombre: 'Paco', edad: 38 },
    { nombre: 'Jason', edad: 56 }
];

function filtrarUsuarios(usuarios) {
    return usuarios.filter(usuario => 
        usuario.edad > 20 && 
        usuario.nombre.includes('o') && 
        usuario.nombre.includes('n')
    );
}

// SI FUERAMOS ESTRICTOS HABRIA QUE CONVERTIR LOS NOMBRES A MINUSCULA PARA QUE NO DIERA FALLO AL NO PILLAR MAYUSCULAS

console.log(filtrarUsuarios(usuarios));
// Salida: 
// [ { nombre: 'Jason', edad: 56 } ]


