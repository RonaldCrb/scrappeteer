const Sequelize = require('sequelize')

const sequelize = require('../../db/sequelize')

const MercantilSell = sequelize.define('mercantilsell', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  },
  title: {
    type: Sequelize.STRING,
  },
  trader: {
    type: Sequelize.STRING,
  },
  price: {
    type: Sequelize.STRING,
  },
  limit: {
    type: Sequelize.STRING,
  }
})

module.exports = MercantilSell