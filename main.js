import express from 'express';
import db from './db/sqlconfig.js';
import bodyParser from 'body-parser';
import router from './routes/index.js';
import Sequelize from 'sequelize';

// Set up the express app
const app = express()

// parses JSON data and makes it available under the req.body as a property.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const PORT = 3000;

const dialogo = function () {

  console.log(`==================================================================`)
  console.log(`============== Servidor corriendo en el puerto ${PORT} ==============`)
  console.log(`==============      Bienvenidos a \u0024\u00A2\u20B9\u0394\u03C1\u03C1\u20AC\u03C4\u03C4\u20AC\u20AC\u00AE     ===============`)
  console.log(`==================================================================`)
  console.log()
  console.log(`==================       Local \u0E3Fitcoins       ====================`)
  console.log(`=> GET http://localhost:3000/scrapeit/banesco`)
  console.log(`=> GET http://localhost:3000/scrapeit/mercantil`)
  console.log(`=> GET http://localhost:3000/scrapeit/prueba`)
  console.log(`=> POST http://localhost:3000/scrapeit`)
  console.log(`==================================================================`)
}

app.listen(PORT, dialogo);
