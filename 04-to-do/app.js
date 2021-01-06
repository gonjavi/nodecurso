const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
const colors = require('colors');

console.log(argv);

let comando = argv._[0];

switch(comando) {
  case 'crear':
    let tarea = toDo.crear(argv.descripcion);
    console.log(tarea);
  break;
  case 'listar':
    let listado = toDo.getListado();
    for (let tarea of listado) {
      console.log('======== To Do========='.green);
      console.log(tarea.descripcion);
      console.log('Estado', tarea.completado);
      console.log('======================'.green);
    }
    
  break;
  case 'actualizar':
    let actualizado = toDo.actualizar(argv.descripcion, argv.completado);
    console.log(actualizado);
  break;
  case 'borrar':
    let borrado = toDo.borrar(argv.descripcion);
    console.log(borrado);
  default:
    console.log('El comando no es reconocido');
}


// comando $  node app.js crear -d 'pasear perro'
// node app.js listar
// node app.js borrar -d dormir
// node app.js actualizar -d orar -c true