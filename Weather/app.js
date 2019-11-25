
const argv = require('yargs')
  .options({
    direccion: {
      demand: true,
      alias: 'd',
      desc: 'Dirección de la ciudad'
    }
  }).argv
const { getWeather } = require('./places/places')

const encodeUrl = encodeURI(argv.direccion)

getWeather(encodeUrl)