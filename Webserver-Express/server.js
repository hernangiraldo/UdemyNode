const express = require('express')
const hbs = require('hbs')
require('./hbs/helpers')
const port = process.env.PORT || 3000


const app = express()

app.use(express.static(`${__dirname}/public`))

//Express HBS Engine
app.set('view engine', 'hbs')
hbs.registerPartials(`${__dirname}/views/partials`)



app.get('/', function (req, res) {
  res.render('home')
})

app.get('/about', function (req, res) {
  res.render('about')
})


app.listen(port, () => {
  console.log(`Listen in port ${port}`)
})