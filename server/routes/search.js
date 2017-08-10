const router = require('express').Router()
const books = require('../../database/books')

router.get('/', (request, response) => {
  response.render('search')
})

router.post('/results', (request, response, done) => {
  const title = request.body.title
  books.findByTitle(title)
    .then(books => {
      if (books) {
        return response.render('results', { books })
      }
    })
    .catch(error => {
      console.log(error, response)
    })
})

module.exports = router
