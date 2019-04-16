const express = require('express')
const banesco = require('../scrapers/banesco.js')
const BanescoSell = require('../db/models/banescosell')

const router = express.Router()
// Rutas que generan scrapes (definidas en controller/lbtc.js)
router.get('/banesco/sell', (req, res, next) => {
  banesco()
    .then(data => {
      BanescoSell.bulkCreate(data)
      res.send(data)
      console.log(`Finalizado Scraping`)
    })
    .catch(err => {
      console.log(err.message)
    })
})

module.exports = router