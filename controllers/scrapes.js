/* eslint-disable class-methods-use-this */
import db from '../db/db';

class ScrapesController {
  // get scrape results from ven
  scrapeVen(req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'Aqui recibiras el producto scrapeven',
      todos: db
    });
  }

  // get scrape results from pen
  scrapePen(req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'Aqui recibiras el producto scrapepen',
      todos: db
    });
  }

  // get scrape results from col
  scrapeCol(req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'Aqui recibiras el producto scrapecol',
      todos: db
    });
  }
}

const scrapeController = new ScrapesController();

export default scrapeController;
