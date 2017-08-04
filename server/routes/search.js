const router = require('express').Router()

router.get('/', (request, response) => {
  response.render('search')
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
