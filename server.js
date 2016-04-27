var express = require("express");
var session = require("express-session");
 
// var favicon       = require("serve-favicon");
var logger        = require("morgan");
//var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');

var PORT          = process.env.PORT || 8080;

var db            = require('./config/db.js');

var router        = require('./controller/routes.js');

var app           = express();    //Initializing Express

//Directories
app.use(express.static(__dirname + "/public"));
app.use('/public', express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/public/views"));
app.use(express.static(__dirname + "/public/views/partials"));

// app.use(favicon(__dirname + '/public/favicon.ico'));

//Middleware
app.use(logger('dev')); // log every request to the console

//app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }))

app.use(session({  
  key: 'mark-a-portfolio',
  secret: 'keyboard Markat', 
  cookie: {
    secure: false,
    maxAge: 60000 
  },
  saveUninitialized: true,
  resave: true 
}));


//Routing
app.get('*', router);
app.get('/', router);

app.listen(PORT, function(){
  console.log("Portfolio is Listening on Port %s", PORT);
});