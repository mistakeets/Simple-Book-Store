const router = require('express').Router()

const admin = require('./admin')
const search = require('./search')

router.get('/', (request, response) => {
  response.render('index')
})

router.use('/search', search)

router.use('/admin', admin)

module.exports = router
