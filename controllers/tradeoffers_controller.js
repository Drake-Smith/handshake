var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.post('/create', function (req, res) {
	console.log(req.body);
	console.log('----------------');
 
  models.TradeOffer.create({
    buyer_id: req.body.buyer,
    seller_id: req.body.seller,
    buyer_product_id: req.body.buyer_product,
    seller_product_id: req.body.seller_product,
    status: "offered"
  })
  .then(function() {
    res.redirect('/');
  });

});

module.exports = router;