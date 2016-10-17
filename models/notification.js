'use strict';
module.exports = function(sequelize, DataTypes) {
  var Notification = sequelize.define('Notification', {
    message: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Notification.hasOne(models.TradeOffer);
       //Notification.hasMany(models.TradeOffer);

        
      }
    }
  });
  return Notification;
};