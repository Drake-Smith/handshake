var models  = require('../models');
var express = require('express');
var router  = express.Router();


router.get('/offers', function(req, res) {

  models.TradeOffer.findAll({
    // where: {
    // 	buyer: req.session.user_id
    // }
  })
  .then(function(offers) {
    res.render('exchange/trade', {
      offers: offers
    });
  });
});

router.post('/create', function (req, res) {
 
	models.TradeOffer.create({
		buyer_id: req.body.buyer,
		seller_id: req.body.seller,
		buyer_product_id: req.body.buyer_product,
		seller_product_id: req.body.seller_product,
		status: "offered",
		user_id: req.body.buyer
	})
	.then(function() {
		res.redirect('/');
	});

});

module.exports = router;