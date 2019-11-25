const argv = require('./config/yargs').argv
const colors = require('colors');

const { creteTask, listTask, showCompletedOrIncompleted, updateTask, deleteTask } = require('./handle-task')

const task = argv._[0];

switch(task) {
  case 'crear':
    const task = creteTask(argv.descripcion)
    console.log(task)
    break

  case 'actualizar':
      console.log(argv.id, argv.estado)
    updateTask(argv.id, Boolean(argv.estado))
    break

  case 'listar':
    const tasks = listTask()
    break

  case 'completas':
    showCompletedOrIncompleted(true)
    break

  case 'pendientes':
      showCompletedOrIncompleted(false)
    break

  case 'eliminar':
    deleteTask(argv.id)
    break

  default:
    console.log('Comando no reconocido')
}