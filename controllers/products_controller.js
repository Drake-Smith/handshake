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
    res.render('index', {
      user_id: req.session.user_id,
      email: req.session.user_email,
      logged_in: req.session.logged_in,
      products: products
    });
  });
});

router.post('/create', function (req, res) {
 
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