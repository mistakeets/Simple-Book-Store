const router = require('express').Router()
const books = require('../../database/books')
const pgPromise = require('pg-promise')

router.get('/', (request, response) => {
  response.render('index')
})

router.get('/search', (request, response) => {
  response.render('search')
})

router.get('/admin', (request, response) => {
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

router.post('/findByTitle', (request, response, done) => {
  const title = request.body.title
  books.findByTitle(title)
    .then(() => {
      response.redirect('/searchResults')
      done()
    })
})

router.get('/searchResults', (request, response) => {
  response.render('searchResults')
})

module.exports = router
