var models  = require('../models');
var express = require('express');
var router  = express.Router();


router.get('/', function(req, res) {

  // use the Cat model to find all cats,
  // and use the include option to grab info from the User model.
  // This will let us show the cat and it's owner.
  models.Product.findAll({
    include: [ models.User ]
    // where : { id: { $ne: req.session.user_id}}
  })
  // connect the findAll to this .then
  .then(function(products) {
    // grab the user info from our req.
    // How is it in our req?
    // This info gets saved to req via the users_controller.js file.
    var ownerProducts = [];
    var marketProducts = [];
    for (var i = 0; i < products.length; i++) {
      var prod = products[i];
      if (prod.user_id == req.session.user_id) {
        ownerProducts.push(prod);
      }
      else{
        marketProducts.push(prod);
      }
    }
    res.render('index', {
      user_id: req.session.user_id,
      email: req.session.user_email,
      logged_in: req.session.logged_in,
      owner_products: ownerProducts,
      market_products: marketProducts
    });
  });
});

//router.post('/create', function (req, res) {
  router.post('/add', function (req, res) {
 
  models.Product.create({
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    condition: req.body.condition,
    value: req.body.value,
    picture: req.body.picture,
    user_id: req.session.user_id
  })
  // connect the .create to this .then
  .then(function() {
    res.redirect('/');
  });
});

router.put('/accepted/:buyerid/:sellerid/:buyerproduct/:sellerproduct', function(req,res) {
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
});

// router.put('/request/:id', function (req, res) {
//   models.Product.update(
//   {
//     requested: true
//   },
//   {
//     where: { id : req.params.id }
//   })
//   .then(function (result) {
//     res.redirect('/');
//     }, function(rejectedPromiseError){

//   });
// });

// router.put('/undo/request/:id', function (req, res) {
//   models.Product.update(
//   {
//     requested: false
//   },
//   {
//     where: { id : req.params.id }
//   })
//   .then(function (result) {
//     res.redirect('/');
//     }, function(rejectedPromiseError){

//   });
// });

// router.put('/offer/:id', function (req, res) {
//   models.Product.update(
//   {
//     offered: true
//   },
//   {
//     where: { id : req.params.id }
//   })
//   .then(function (result) {
//     res.redirect('/');
//     }, function(rejectedPromiseError){

//   });
// });

// router.put('/undo/offer/:id', function (req, res) {
//   models.Product.update(
//   {
//     offered: false
//   },
//   {
//     where: { id : req.params.id }
//   })
//   .then(function (result) {
//     res.redirect('/');
//     }, function(rejectedPromiseError){

//   });
// });

// router.put('/update/:id', function(req,res) {
 
//   models.Product.update(
//   {
//     user_id: req.body.user_id
//   },
//   {
//     where: { id : req.params.id }
//   })
//   // connect it to this .then.
//   .then(function (result) {
//     res.redirect('/');
//   }, function(rejectedPromiseError){

//   });
// });


// router.delete('/delete/:id', function(req,res) {
 
//   models.Cat.destroy({
//     where: {
//       id: req.params.id
//     }
//   })
//   // connect it to this .then.
//   .then(function() {
//     res.redirect('/');
//   });

// });


module.exports = router;