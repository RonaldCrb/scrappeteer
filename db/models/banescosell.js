const Sequelize = require('sequelize')

const sequelize = require('../../db/sequelize')

const BanescoSell = sequelize.define('banescosell', {
  id: {
    type: Sequelize.INTEGER,
    autoincrement: true,
    allowNull: false,
    primaryKey: true
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

module.exports = BanescoSell