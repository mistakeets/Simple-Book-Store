const express = require('express')
const morgan = require('morgan')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))


app.get('/', (request, response) => {
  response.render('index')
})

app.get('/search', (request, response) => {
  response.render('views/search')
})

const port = 3000
app.listen(port, () => {
  console.log('Book Store server running on port ' + port)
})
