const Sequelize = require('sequelize')

const SQL = new Sequelize('scrappetteer', 'ron', '2352', {
  host: 'localhost',
  dialect: 'postgres',
  operatorAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
