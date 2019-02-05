'use strict';

module.exports = (sequelize, DataTypes) => {
  const Scrapeven = sequelize.define('Scrapeven', {
    buyer: DataTypes.STRING,
    payment: DataTypes.STRING,
    price: DataTypes.STRING,
    limit: DataTypes.STRING
  }, {});
  Scrapeven.associate = function(models) {
    // associations can be defined here
    Scrapeven.belongsTo(models.Minute, {
      foreignKey: 'minuteId',
      onDelete: 'CASCADE',
    });
  };
  return Scrapeven;
};
