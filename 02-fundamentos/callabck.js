/* setTimeout(() => {
  console.log('Hola desde aqui');
}, 2000);
 */
let getUsuarioById = (id, callback) => {
  let usuario = {
    nombre: 'Javier',
    id
  }
  if (id === 20) {
    callback(`El usuario con id ${id}, no existe en la base de datos`);
  } else {
    callback(usuario);
  }
}

getUsuarioById(20, (err,usuario) => {
  if (err) {
    return console.log(err);
  }
  console.log('Usuario base de datos', usuario);
});