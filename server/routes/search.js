const router = require('express').Router()
const books = require('../../database/books')

router.get('/', (request, response) => {
  response.render('search')
})

router.post('/results', (request, response, done) => {
  const title = request.body.title
  books.findByTitle(title)
    .then(() => {
      response.render('results')
      done()
    })
})

module.exports = router
