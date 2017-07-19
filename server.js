const express = require('express')
const morgan = require('morgan')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.get('/', (request, response) => {
  response.render('index')
})

const port = 3000
app.list(port, () => {
  console.log('Book Store server running on port ' + port)
})
