const argv = require('./config/yargs').argv
const { createFile, listTable } = require('./multiplicar/multiplicar')

const type = argv._[0];
const { base, limite } = argv

switch(type) {
  case 'crear':
    createFile(base, limite)
    .then(filename => console.log(`archivo creado: ${filename}`))
    .catch(err => console.log(err))
    break

    case 'listar': 
      listTable(base, limite)
      break

    default:
      console.log('comando no reconocido')
      break
}

