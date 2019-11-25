const fs = require('fs')
const colors = require('colors')

let todoList = [];

function saveTasks() {
  const data = JSON.stringify(todoList)
  fs.writeFile('db/tasks.json', data, (err) => {
    if (err) throw new Error('No se pudo guardar la DB', err)
  })
}

function loadDB() {
  try {
    todoList = require('./db/tasks.json')
  } catch(e) {
    todoList = []
  }
}

function creteTask(description) {
  loadDB();
  const task = {
    id: todoList.length + 1,
    description,
    completed: false
  }

  todoList.unshift(task)
  saveTasks()
  return task
}

function listTask() {
  loadDB()
  if (todoList.length > 0) {
    console.log(colors.green('================= POR HACER ================='))
    todoList.map(t => console.log(`id: ${t.id} - descripción: ${t.description}  estado: ${t.completed ? 'Completada' : 'Pendiente'}`))
    console.log('================= POR HACER ================='.green)
  } else {
    console.log(colors.yellow('La lista de tareas está vacía'))
  }
}

function showCompletedOrIncompleted(status) {
  loadDB()
  if (todoList.length > 0) {
    const all = todoList.filter(t => t.completed === status);

    if (all.length > 0) {
      all.map(t => console.log(`id: ${t.id} - descripción: ${t.description}`))
    } else {
      console.log(`Ninguna tarea ${status ? 'completada' : 'pendiente'}`)
    }

  } else {
    console.log('La lista de tareas está vacía')
  }
}

function updateTask(id, status) {
  loadDB()
  let exist
  if (todoList.length > 0) {
    exist = false
    todoList.map(t => {
      if (t.id === id) {
        exist = true
        t.completed = status
        return t
      }
      return t
    })

    if (exist) {
      saveTasks()
    } else {
      console.log('No existe una tarea con ese identificador')
    }


  } else {
    console.log('La lista de tareas está vacía')
  }
}

function deleteTask(id) {
  loadDB()
  const tmpL = todoList.length
  todoList = todoList.filter(t => t.id !== id);

  if (tmpL !== todoList.length) {
    console.log(colors.green(`Tarea eliminada de la lista`))
    saveTasks()
  } else {
    console.log(colors.red(`La tarea con el id: ${id} NO existe`))
  }

}

module.exports = {
  creteTask,
  listTask,
  showCompletedOrIncompleted,
  updateTask,
  deleteTask
}