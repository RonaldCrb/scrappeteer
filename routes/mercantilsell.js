const express = require('express')
const mercantil = require('../scrapers/mercantil.js') 
const MercantilSell = require('../db/models/mercantilsell')

const router = express.Router()
// Rutas que generan scrapes (definidas en controller/lbtc.js)
router.get('/mercantil/sell', (req, res, next) => {
  mercantil()
    .then(data => {
      MercantilSell.bulkCreate(data)
      res.send(data)
      console.log(`Finalizado Scraping`)
    })
    .catch(err => {
      console.log(err.message)
    })
})

module.exports = router
