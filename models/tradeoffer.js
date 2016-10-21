'use strict';
module.exports = function(sequelize, DataTypes) {
  var TradeOffer = sequelize.define('TradeOffer', {
    status: DataTypes.STRING
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'tradeoffers',
    classMethods: {
      associate: function(models) {
        // associations can be defined here
       //TradeOffer.hasMany(models.Notification);
       TradeOffer.belongsTo(models.Notification);

       // the next associations need to be reviewed please
       // TradeOffer.hasOne(models.User); user 1
       // TradeOffer.hasOne(models.User); user 2
       // TradeOffer.hasOne(models.Product); product 1
       // TradeOffer.hasOne(models.Product); product 2
       
       //TradeOffer.hasMany(models.User);
       //TradeOffer.hasOne(models.Notification);


      }
    }
  });
  return TradeOffer;
};