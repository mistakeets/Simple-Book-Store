const router = require('express').Router()
const books = require('../../database/books')

router.get('/', (request, response) => {
  response.render('search')
})

router.post('/resultsTitle', (request, response, done) => {
  const title = request.body.title
  books.findByTitle(title)
    .then(books => {
      if (books) {
        return response.render('results', { books })
      }
      done()
    })
    .catch(error => {
      console.log(error, response)
    })
})

router.post('/resultsAuthor', (request, response, done) => {
  const author = request.body.searchAuthor
  books.findByAuthor(author)
    .then(books => {
      if (books) {
        return response.render('results', { books })
      }
      done()
    })
    .catch(error => {
      console.log(error, response)
    })
})

module.exports = router
