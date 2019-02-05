'use strict';
module.exports = (sequelize, DataTypes) => {
  const Scrapepen = sequelize.define('Scrapepen', {
    buyer: DataTypes.STRING,
    payment: DataTypes.STRING,
    price: DataTypes.STRING,
    limit: DataTypes.STRING
  }, {});
  Scrapepen.associate = function(models) {
    // associations can be defined here
    Scrapepen.belongsTo(models.Minute, {
      foreignKey: 'minuteId',
      onDelete: 'CASCADE',
    });
  };
  return Scrapepen;
};
