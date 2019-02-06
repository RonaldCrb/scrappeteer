/* eslint-disable class-methods-use-this */
import models from '../server/models';
const scraper = require('../scrapers/scrapeven2.js')

class ScrapesController {
  // get scrape results from ven
  scrapeVen(req, res) {
    const scrapeven = new Promise((resolve, reject) => {
    scraper.scrapeVenBuy()
      .then(data => {
        resolve(data)
      })
      .catch(err => reject('scrapeven fallo'))
      })

      Promise.all([scrapeven])
        .then(data => res.status(200).send({
          success: 'true',
          message: 'scrapeven exitoso',
          scrapeven,
        }))
        .catch(err => res.status(500).send(err))
    };


  // get scrape results from pen
  scrapePen(req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'Aqui recibiras el producto scrapepen',

    });
  }

  // get scrape results from col
  scrapeCol(req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'Aqui recibiras el producto scrapecol',

    });
  }
}

const scrapeController = new ScrapesController();

export default scrapeController;
