const argv = require('yargs')
  .command('crear', 'Crear tarea', {
    descripcion: {
      demand: true,
      alias: 'd',
      desc: 'Descripción de la tarea que se está creando'
    }
  })
  .command('actualizar', 'Actualizar tarea', {
    id: {
      demand: true,
      desc: 'Id de la tarea que se desea actualizar'
    },
    estado: {
      demand: true,
      alias: 'e',
      desc: 'Estado de la tarea que se desea actualizar'
    }
  })
  .command('listar', 'Listado de todas tareas')
  .command('completas', 'Listado de tareas completadas')
  .command('pendientes', 'Listado de tareas pendientes')
  .command('eliminar', 'Eliminar tarea', {
    id: {
      demand: true,
      desc: 'Id de la tarea que se desea eliminar'
    },
  })
  .help()
  .argv

  module.exports = {
    argv
  }