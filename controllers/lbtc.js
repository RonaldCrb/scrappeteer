const util = require('util')
const models = require('../server/models')
import { custom } from '../scrapers/custom.js'
import { banesco } from '../scrapers/banesco.js'
import { mercantil } from '../scrapers/mercantil.js'
import { lbtcvenves } from '../scrapers/scrapeven.js'

class ScrapesController {
  // GET (URL)
  banesco (req, res) {
    banesco()
      .then(data => {
        res.send(data)
        console.log(`Finalizado Scraping`)
      })
      .catch(err => {
        console.log(err.message)
      })
  }
  // GET (URL)
  mercantil (req, res) {
    mercantil()
      .then(data => {
        res.send(data)
        console.log(`Finalizado Scraping`)
      })
      .catch(err => {
        console.log(err.message)
      })
  }

 // POST (URL, {url: 'https://www.localbitcoins.com/sell-bitcoins....'})
 custom (req, res) {
  console.log(req)
    .then(data => {
      res.send(data)
      console.log(`Finalizado Scraping`)
    })
    .catch(err => {
      console.log(err.message)
    });
 }
}
const lbtc = new ScrapesController();

export default lbtc;
