'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Scrapevens', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      minuteId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'Minutes',
          key: 'id',
          as: 'minuteId',
        },
      },
      buyer: {
        type: Sequelize.STRING
      },
      seller: {
        type: Sequelize.STRING
      },
      payment: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      limit: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Scrapevens');
  }
};
