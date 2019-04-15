const banesco = require('../scrapers/banesco.js')
const mercantil = require('../scrapers/mercantil.js') 
const BanescoSell = require('../db/models/banescosell')

class ScrapesController {
  // GET (URL)
  banesco (req, res) {
    banesco()
      .then(data => {
        data.forEach(post => {
          BanescoSell.create(post)
        })
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
