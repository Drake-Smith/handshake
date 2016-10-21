'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    phone: {type: DataTypes.STRING, allowNull: false},
    address: {type: DataTypes.STRING, allowNull: false},
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here

        User.hasMany(models.Product);
        User.hasMany(models.Notification);
      }
    }
  });
  return User;
};
