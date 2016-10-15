var models  = require('../models');
var express = require('express');
var router  = express.Router();


router.get('/', function(req, res) {

  // use the Cat model to find all cats,
  // and use the include option to grab info from the User model.
  // This will let us show the cat and it's owner.
  models.Product.findAll({
    include: [ models.User ]
  })
  // connect the findAll to this .then
  .then(function(products) {
    // grab the user info from our req.
    // How is it in our req?
    // This info gets saved to req via the users_controller.js file.
    res.render('products/index', {
      user_id: req.session.user_id,
      email: req.session.user_email,
      logged_in: req.session.logged_in,
      products: products
    });
  });
});

router.post('/create', function (req, res) {
  // SOLUTION:
  // =========
  // use the Cat model to create a cat based on what's
  // passed in req.body (name, sleepy, user_id)
  models.Product.create({
    name: req.body.name,
    category: req.body.category,
    description: req.body.description,
    condition: req.body.condition,
    estimated_cost: req.body.estimated_cost,
    picture: req.body.picture,
    user_id: req.session.user_id
  })
  // connect the .create to this .then
  .then(function() {
    res.redirect('/');
  });
});

router.put('/update/:id', function(req,res) {
 
  // use the Cat model to trade a cat's sleepy status
  // based on the boolean passed in req.body sleepy
  // and the id of the cat (as passed in the url)
  models.Product.update(
  {
    user_id: req.body.user_id
  },
  {
    where: { id : req.params.id }
  })
  // connect it to this .then.
  .then(function (result) {
    res.redirect('/');
  }, function(rejectedPromiseError){

  });
});


router.delete('/delete/:id', function(req,res) {
 
  // use the Cat model to delete a cat
  // based on the id passed in the url
  models.Cat.destroy({
    where: {
      id: req.params.id
    }
  })
  // connect it to this .then.
  .then(function() {
    res.redirect('/');
  });

});


module.exports = router;