const Sequelize = require('sequelize')

const dbConfig = {
  dialect: 'postgresql',
  host: process.env.PGHOST
}

const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, dbConfig)

module.exports = sequelize