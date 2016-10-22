var models  = require('../models');
var express = require('express');
var router  = express.Router();


// router.get('/offers', function(req, res) {

//   models.TradeOffer.findAll({
//     where: {
//     	status: "offered",
//     	buyer_id: req.session.user_id
//     }
//   })
//   .then(function(offers) {
//     res.render('exchange/trade', {
//       offers: offers
//     });
//   });
// });

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

router.put('/accept/:buyerid/:sellerid/:buyerproduct/:sellerproduct', function(req,res) {
  models.TradeOffer.update(
  {
  	status: "accepted"
  },
  {
    where: { id : req.body.trade_id }
  })
  .then(function (result) {
	models.Product.update(
	{
		user_id : req.params.sellerid
	},
	{
		where: { id : req.params.buyerproduct }
	})
	.then(function (result) {
		models.Product.update(
		{
			user_id : req.params.buyerid
		},
			{
		where: { id : req.params.sellerproduct }
		}).then(function (products){
			res.redirect('/');
		});
	}, function(rejectedPromiseError){

	});
  	// res.redirect('/accepted/' + req.params.buyerid + '/' + req.params.sellerid + '/' + req.params.buyerproduct + '/' + req.params.sellerproduct + '?_method=PUT');
  }, function(rejectedPromiseError){

  });
});

router.put('/deny', function(req,res) {
	models.TradeOffer.update(
	{
		status: "denied"
	},
	{
		where: { id : req.body.trade_id }
	})
	.then(function (result) {
		res.redirect('/');
	});
});

module.exports = router;