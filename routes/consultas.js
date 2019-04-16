const express = require('express')
const BanescoSell = require('../db/models/banescosell')
const MercantilSell = require('../db/models/mercantilsell')

const router = express.Router()
// Rutas que devuelven arrays de objetos
router.get('/banesco/index/sell', (req, res, next) => {
  BanescoSell.findAll
    .then(data => {
      data.forEach(post => {
        
      });
      BanescoSell.bulkCreate(data)
      res.status(201).send(data)
      console.log(`Finalizado Scraping`)
    })
    .catch(err => {
      console.log(err.message)
    })
})

module.exports = router