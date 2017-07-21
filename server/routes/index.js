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
  books.addBook(request.body.name)
    .then(() => {
      response.redirect('/admin')
      done()
    })
})

module.exports = router
