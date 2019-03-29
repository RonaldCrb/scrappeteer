/* eslint-disable class-methods-use-this */
const util = require('util')
const models = require('../server/models')
import { scrapelbtcven } from '../scrapers/scrapeven.js'


class ScrapesController {
  // get scrape results from ven
  scrapeVen (req, res) {
    const scrapeven =
      scrapelbtcven()
      .then(data => {
        res.send(data)
        console.log(`Finalizado Scraping`)
      })
      .catch(err => {
        console.log(err.message)
      });
  }
  // get scrape results from pen
  scrapePen (req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'Aqui recibiras el producto scrapepen',

    });
  }

  // get scrape results from col
  scrapeCol (req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'Hola millan',

    });
  }
}
//
// Promise.all([scrapeVen()])
//   .then(data => res.status(200).send({
//     success: 'true',
//     message: 'scrapeven exitoso',
//     data,
//   }))
//   .catch(err => res.status(500).send(err))


const scrapeController = new ScrapesController();

export default scrapeController;
