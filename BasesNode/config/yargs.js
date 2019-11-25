const opt = {
  base: {
    demand: true,
    alias: 'b'
  },
  limite: {
    alias: 'l',
    default: 10
  }
}

const argv = require('yargs')
  .command('crear', 'Tablas de múltiplicar', opt)
  .command('listar', 'Tablas de múltiplicar', opt)
  .help()
  .argv

  module.exports = {
    argv
  }