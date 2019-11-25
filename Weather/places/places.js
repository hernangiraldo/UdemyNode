const axios = require('axios')

async function getWeather(city) {
  const instance = axios.create({
    headers: {
      'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
      'x-rapidapi-key': '8892f5a0c9mshf88959e4b5706b4p132048jsn657710dc0432'
    }
  })

  try {
    const resp = await instance.get(`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`)

    if (resp.data.Results.length === 0) {
      throw new Error('No hay resultados para este lugar')
    }

    const {name, lat, lon} = resp.data.Results[0]
    return {
      name,
      lat,
      lon
    }
  } catch(e) {
    console.log('Ups! Tuvimos un error')
  }
}

module.exports = {
  getWeather
}