const express = require('express')
const morgan = require('morgan')
const app = express()
const bodyParser = require('body-parser')
const routes = require('./server/routes')

app.set('view engine', 'ejs')
app.use(express.static('./public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use('/', routes)

const port = 3000
app.listen(port, () => {
  console.log('Book Store server running on port ' + port)
})
