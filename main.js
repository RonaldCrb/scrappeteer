require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const welcome = require('./utils/welcome')
const sequelize = require('./db/sequelize')
const mercantilSell = require('./routes/mercantilsell')

const app = express()

app.use(bodyParser.json())

app.use(mercantilSell)

sequelize.sync()
  .then(res => {
    console.log('DATABASE STATUS: POOL CONNECTED')
    app.listen(3000, welcome)
  })
  .catch(err => {
    console.log(e.message)
  })