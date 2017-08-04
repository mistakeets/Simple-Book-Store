const router = require('express').Router()
const books = require('../../database/books')

router.get('/', (request, response) => {
  response.render('admin')
})

router.post('/addBook', (request, response, done) => {
  const title = request.body.title
  const firstName = request.body.firstName
  const lastName = request.body.lastName
  const genre = request.body.genre

  books.addBook(title, firstName, lastName, genre)
    .then(() => {
      response.redirect('/admin')
      done()
    })
})

module.exports = router
