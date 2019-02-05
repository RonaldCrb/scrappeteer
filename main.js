import express from 'express';
import db from './db/db';
import bodyParser from 'body-parser';
import router from './routes/index.js';

// Set up the express app
const app = express()

// parses JSON data and makes it available under the req.body as a property.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

const PORT = 3000;

const dialogo = function () {
  console.log(`==================================================================`)
  console.log(`============== Servidor corriendo en el puerto 3000 ==============`)
  console.log(`==============      Bienvenidos a Scrappetteer      ==============`)
  console.log(`==================================================================`)
  console.log()
  console.log(`========== Endpoints para todos con title y description ==========`)
  console.log(`=> GET http://localhost:3000/api/v1/todos`)
  console.log(`=> POST http://localhost:3000/api/v1/todos`)
  console.log(`=> GET http://localhost:3000/api/v1/todos/:id`)
  console.log(`=> DELETE http://localhost:3000/api/v1/todos/:id`)
  console.log(`=> PUT http://localhost:3000/api/v1/todos/:id`)
  console.log(`==================================================================`)
  console.log()
  console.log(`==============       Endpoints para scrapping       ==============`)
  console.log(`=> Endpoint disponible: GET http://localhost:3000/api/v1/scrapecol`)
  console.log(`=> Endpoint disponible: GET http://localhost:3000/api/v1/scrapeven`)
  console.log(`=> Endpoint disponible: GET http://localhost:3000/api/v1/scrapepen`)
  console.log(`==================================================================`)
}

app.listen(PORT, dialogo);
