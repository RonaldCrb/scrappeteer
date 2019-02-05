'use strict';
module.exports = (sequelize, DataTypes) => {
  const Minute = sequelize.define('Minute', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }); 
  Minute.associate = function(models) {
    // associations can be defined here
    Minute.hasMany(models.Scrapecol, {
      foreignKey: 'minuteId',
    });
    Minute.hasMany(models.Scrapepen, {
      foreignKey: 'minuteId',
    });
    Minute.hasMany(models.Scrapeven, {
      foreignKey: 'minuteId',
    });
  };
  return Minute;
};
