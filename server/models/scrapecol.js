'use strict';
module.exports = (sequelize, DataTypes) => {
  const Scrapecol = sequelize.define('Scrapecol', {
    buyer: DataTypes.STRING,
    payment: DataTypes.STRING,
    price: DataTypes.STRING,
    limit: DataTypes.STRING
  }, {});
  Scrapecol.associate = function(models) {
    // associations can be defined here
    Scrapecol.belongsTo(models.Minute, {
      foreignKey: 'minuteId',
      onDelete: 'CASCADE',
    });
  };
  return Scrapecol;
};
