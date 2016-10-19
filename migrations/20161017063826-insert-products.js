'use strict';

var models = require("../models");

module.exports = {
  up: function (queryInterface, Sequelize) {
  return models.Product.bulkCreate(
      [
        { name: "Pogo Stick",
          category: "Toys",
          description: "A Pogo stick for jumping",
          condition: "Like New",
          value: "50",
          picture: "https://i5.walmartimages.com/asr/2d32e5f4-46a1-41d6-9475-6cbd3e0eedc6_1.10864e0b9e6edabcfb1f64c8f103b594.jpeg"
        },
        { name: "Macbook",
          category: "Computers",
          description: "A laptop",
          condition: "Used",
          value: "1500",
          picture: "http://cdn.macrumors.com/article-new/2014/11/rosegoldmacbook-800x667.jpg"
        },
        { name: "Water Bottle",
          category: "Misc",
          description: "New water bottle.",
          condition: "New",
          value: "20",
          picture: "http://d3oco3p7h2m8kx.cloudfront.net/media/catalog/product/cache/1/image/804x1262.28/0dc2d03fe217f8c83829496872af24a0/h/y/hydro_flask_21_oz_standard_mouth_vacuum_insulated_stainless_steel_water_bottle_-_mint.png"
        },

      ]
    )
  },

  down: function (queryInterface, Sequelize) {
return models.Product.destroy(
      [
        { name: "Pogo Stick",
          category: "Toys",
          description: "A Pogo stick for jumping",
          condition: "Like New",
          value: "50",
          picture: "https://i5.walmartimages.com/asr/2d32e5f4-46a1-41d6-9475-6cbd3e0eedc6_1.10864e0b9e6edabcfb1f64c8f103b594.jpeg"
        },
        { name: "Macbook",
          category: "Computers",
          description: "A laptop",
          condition: "Used",
          value: "1500",
          picture: "http://cdn.macrumors.com/article-new/2014/11/rosegoldmacbook-800x667.jpg"
        },
        { name: "Water Bottle",
          category: "Misc",
          description: "New water bottle.",
          condition: "New",
          value: "20",
          picture: "http://d3oco3p7h2m8kx.cloudfront.net/media/catalog/product/cache/1/image/804x1262.28/0dc2d03fe217f8c83829496872af24a0/h/y/hydro_flask_21_oz_standard_mouth_vacuum_insulated_stainless_steel_water_bottle_-_mint.png"
        },
      ]
    )
  }
};
