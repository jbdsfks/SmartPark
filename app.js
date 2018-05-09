process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./src/config/mongoose'),
    passport = require('./src/config/passport'),
    express = require('./src/config/express'),
    path = require('path');
var db = mongoose();
var app = express();


app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');


var passport = passport();
module.exports = app;
