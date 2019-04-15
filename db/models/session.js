const Sequelize = require('sequelize')

const sequelize = require('../sequelize')

const Session = sequelize.define('sessions', {
  id: {
    type: Sequelize.INTEGER,
    autoincrement: true,
    allowNull: false,
    primaryKey: true
  },
  remarks: {
    type: Sequelize.STRING,
  },
  origin: {
    type: Sequelize.STRING,
  }
})

module.exports = Session