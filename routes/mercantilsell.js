const express = require('express')
const mercantil = require('../scrapers/mercantil.js') 

const router = express.Router()
// Rutas que generan scrapes (definidas en controller/lbtc.js)
router.get('/mercantil/sell', (req, res, next) => {
  mercantil()
    .then(data => {
      res.send(data)
      console.log(`Finalizado Scraping`)
    })
    .catch(err => {
      console.log(err.message)
    })
})

module.exports = router
