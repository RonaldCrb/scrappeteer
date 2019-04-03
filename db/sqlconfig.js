const Sequelize = require('sequelize')

export const db = new Sequelize('scrappetteer', 'scrappetter', '2352', {
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
