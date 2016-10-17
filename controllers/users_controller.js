var bcrypt = require('bcrypt');
var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('users/new');
});

router.get('/sign-in', function(req, res) {
	res.render('users/sign_in');
});

router.get('/sign-out', function(req, res) {
	req.session.destroy(function(err) {
		res.redirect('/');
	});
});


//login 
router.post('/login', function(req, res) {
	models.User.findOne({
		where: {email: req.body.email}
	}).then(function(user) {

		if(user == null) {
			res.redirect('/users/sign-in')
		}
	bcrypt.compare(req.body.password, user.password_hash, function(err, result) {

		if(result == true) {
			req.session.logged_in = true;
			req.session.username = user.username;
			req.session.user_id = user.id;
			req.session.user_email = user.email;

			res.redirect('/');
		} else {
			res.redirect('/users/sign-in')
		}
	});
	});
});

// register a user
router.post('/create', function(req,res) {
	models.User.findAll({
    where: {email: req.body.email}
  }).then(function(users) {

		if (users.length > 0){
			console.log(users)
			res.send('we already have an email or username for this account')
		}else{

			// Using bcrypt, generate a 10-round salt,
			// then use that salt to hash the user's password.
			bcrypt.genSalt(10, function(err, salt) {
					bcrypt.hash(req.body.password, salt, function(err, hash) {
						
						
						models.User.create({
							name: req.body.name,
							email: req.body.email,
							phone: req.body.phone,
							address:  req.body.address,
							password_hash: hash
						})
						// In a .then promise connected to that create method,
						// save the user's information to req.session
						// as shown in these comments
						.then(function(user){


							// so what's happening here?
							// we enter the user's session by setting properties to req.

							// we save the logged in status to the session
		          req.session.logged_in = true;
		          // the username to the session
				  req.session.username = user.username;
				  // the user id to the session
		          req.session.user_id = user.id;
		          // and the user's email.
		          req.session.user_email = user.email;

		          // redirect to home on login
							res.redirect('/')
						});
					});
			});

		}
	});
});