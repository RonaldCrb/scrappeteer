import { prueba } from '../scrapers/prueba.js'

class PruebasController {
  // GET (URL)
  prueba (req, res) {
    prueba()
      .then(data => {
        res.send(data)
        console.log(`Finalizado Scraping`)
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}
export const pruebas = new PruebasController()
