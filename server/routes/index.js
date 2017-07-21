const router = require('express').Router()

router.get('/', (request, response) => {
  response.render('index')
})

router.get('/search', (request, response) => {
  response.render('search')
})

router.get('/admin', (request, response) => {
  response.render('admin')
})

module.exports = router
