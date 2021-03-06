var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser')
var methodOverride = require('method-override');
var session = require('express-session');
var expressHandleBars = require('express-handlebars');
var path = require('path');


// model controllers
var users_controller = require('./controllers/users_controller');
var products_controller = require('./controllers/products_controller');
var tradeoffers_controller = require('./controllers/tradeoffers_controller');

var Sequelize = require('sequelize')
if (process.env.JAWSDB_URL) {
    connection = new Sequelize(process.env.JAWSDB_URL);
} else {
    connection = new Sequelize('handshake', 'andrew', ' ', {
        host: 'localhost',
        dialect: 'mysql',
        port: '3000'
    })
}
// express settings
var app = express();
// override POST to have DELETE and PUT
app.use(methodOverride('_method'))

// //allow sessions
app.use(session({ secret: 'app', cookie: { maxAge: null }, resave: true, saveUninitialized: true
}));
app.use(cookieParser());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
//set up handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));


// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// need to get this updated
// app.use('/', application_controller);
// app.use('/cats', cats_controller);
app.use('/users', users_controller);
app.use('/trade', tradeoffers_controller);
app.use('/', products_controller);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: (app.get('env') === 'development') ? err : {}
  });
});




// our module get's exported as app.
module.exports = app;
