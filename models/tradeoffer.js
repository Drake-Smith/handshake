'use strict';
module.exports = function(sequelize, DataTypes) {
  var TradeOffer = sequelize.define('TradeOffer', {
    status: {type: DataTypes.STRING},
    offerPicture: {type: DataTypes.STRING},
    requestPicture: {type: DataTypes.STRING}
  }, {
    underscored: true,
    freezeTableName: true,
    tableName: 'tradeoffers',
    classMethods: {
      associate: function(models) {
       TradeOffer.belongsTo(models.User, {as: 'buyer'});
       TradeOffer.belongsTo(models.User, {as: 'seller'});
       TradeOffer.belongsTo(models.Product, {as: 'buyerProduct'});
       TradeOffer.belongsTo(models.Product, {as: 'sellerProduct'});
      }
    }
  });
  return TradeOffer;
};