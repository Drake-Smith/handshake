'use strict';
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    name: {type: DataTypes.STRING, allowNull: false},
    category: {type: DataTypes.STRING, allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
    condition: {type: DataTypes.STRING, allowNull: false},
    value: {type: DataTypes.INTEGER, allowNull: false},
    picture: {type: DataTypes.STRING, allowNull: false},
    // underscored: true
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here

        //Product.hasOne(models.User);
        Product.belongsTo(models.User);
        
      }
    }
  });
  return Product;
};