/* eslint-disable class-methods-use-this */
import models from '../server/models';

class ScrapesController {
  // get scrape results from ven
  scrapeVen(req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'Aqui recibiras el producto scrapeven',
      
    });
  }

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
