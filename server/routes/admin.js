const router = require('express').Router()
const books = require('../../database/books')

router.get('/addBook', (request, response) => {
  response.render('addBook')
})

router.post('/', (request, response, done) => {
  books.addBook(request.body)
    .then(() => {
      response.render('./index')
      done()
    })
})

module.exports = router
