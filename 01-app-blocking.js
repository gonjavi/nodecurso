let { getUsuarioSync } = require('./usuarios/usuario');

console.log('Inicio de programa');

let usuario1 = getUsuarioSync(1);
console.log('Usuarios1: ', usuario1);

let usuario2 = getUsuarioSync(2);
console.log('Usuarios2: ', usuario2);

console.log('Hola mundo!')