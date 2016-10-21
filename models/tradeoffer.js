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
       TradeOffer.belongsTo(models.User, {as: 'buyer'});
       TradeOffer.belongsTo(models.User, {as: 'seller'});
       TradeOffer.belongsTo(models.Product, {as: 'buyerProduct'});
       TradeOffer.belongsTo(models.Product, {as: 'sellerProduct'});
       //TradeOffer.hasMany(models.User);
       //TradeOffer.hasOne(models.Notification);


      }
    }
  });
  return TradeOffer;
};