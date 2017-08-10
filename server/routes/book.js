const router = require('express').Router()
const books = require('../../database/books')

router.get('/:bookId', (request, response, next) => {
  const bookId = request.params.bookId
  if (!bookId) {
    return next()
  }
  books.getBook(bookId)
    .then(function(book) {
      if (book) {
        return response.render('singleBook', { book })
      }
      next()
    })
    .catch(error => {
      console.log(error, response)
    })
})

module.exports = router
