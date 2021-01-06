const argv = require('yargs')
.command('crear', 'Crea una tarea', {
  descripcion: {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea'
  }
})
.command('actualizar', 'Actualiza el estado de una tarea', {
  descripcion: {    
    alias: 'd',
    desc: 'Descripción de la tarea'
  },
  completado: {
    demand: true,
    alias: 'c',
    desc: 'Marca como completado la tarea'
  }
})
.command('borrar', 'Borra una tarea', {
  descripcion: {    
    alias: 'd',
    desc: 'Borrar una tarea'
  }
})
.help()
.argv;

module.exports = {
  argv
}
