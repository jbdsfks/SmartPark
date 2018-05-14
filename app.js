process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./src/config/mongoose'),
    passport = require('./src/config/passport'),
    express = require('./src/config/express');
var db = mongoose();
var app = express();



var passport = passport();
module.exports = app;
