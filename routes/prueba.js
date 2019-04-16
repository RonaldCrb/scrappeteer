const express = require('express')
const prueba = require('../scrapers/prueba.js')
const router = express.Router()

router.get('/prueba', (req, res, next) => {
  prueba()
  .then(post => {
    console.log(post)
  })
  .catch(err => {
    console.log(err.message)
  })
})

module.exports = router