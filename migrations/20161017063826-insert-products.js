'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
  return models.Product.bulkCreate(
      [
        {name: "Pogo Stick"},
        {category: "Toys"},
        {description: "A Pogo stick for jumping"},
        {condition: "Like New"},
        {value: "50"},
        {picture: "www.google.com"}
      ],
      [
        {name: "Macbook"},
        {category: "Computers"},
        {description: "A laptop"},
        {condition: "Used"},
        {value: "1500"},
        {picture: "www.apple.com"}
      ]
    )
  },

  down: function (queryInterface, Sequelize) {
return models.Product.destroy(
      [
        {name: "Pogo Stick"},
        {category: "Toys"},
        {description: "A Pogo stick for jumping"},
        {condition: "Like New"},
        {value: "50"},
        {picture: "www.google.com"}
      ],
      [
        {name: "Macbook"},
        {category: "Computers"},
        {description: "A laptop"},
        {condition: "Used"},
        {value: "1500"},
        {picture: "www.apple.com"}
      ]
    )
  }
};
