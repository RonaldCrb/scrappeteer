require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const welcome = require('./utils/welcome')
const sequelize = require('./db/sequelize')
const mercantilSell = require('./routes/mercantilsell')
const banescoSell = require('./routes/banescosell')
const prueba = require('./routes/prueba')
const app = express()

app.use(bodyParser.json())


// FUNCIONALIDADES PRINCIPALES A TRAVES DE MIDDLEWARES DE SCRAPING
app.use(mercantilSell)
app.use(banescoSell)
app.use(prueba)

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

sequelize.sync()
  .then(res => {
    console.log('DATABASE STATUS: POOL CONNECTED')
    app.listen(3000, welcome)
  })
  .catch(err => {
    console.log(err.message)
  })