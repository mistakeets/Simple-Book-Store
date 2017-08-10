const router = require('express').Router()
const books = require('../../database/books')
const admin = require('./admin')
const search = require('./search')
const book = require('./book')

router.get('/', (request, response) => {
  books.getAllBooks()
    .then((books) => { response.render('index', { books }) })
    .catch(err => console.log('err', err))
})

router.use('/book', book)
router.use('/search', search)
router.use('/admin', admin)

module.exports = router
