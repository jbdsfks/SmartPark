var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var login = require('./routes/login');
var register = require('./routes/register');
var parkindex = require('./routes/parkindex');
var highwayindex1 = require('./routes/highwayindex1');
var highwayindex2 = require('./routes/highwayindex2');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', login);
app.use('/register', register);
app.use('/parkindex', parkindex);
app.use('/highwayindex1', highwayindex1);
app.use('/highwayindex2', highwayindex2);

app.use(function(req, res, next) {
  next(createError(404));
});


app.use(function(err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  res.status(err.status || 500);
  res.render('error');
});

app.use(function (req, res) {
    console.log(req.path);
    if(req.path.indexOf('/api')>=0){
        res.send("server text");

    }else{ //angular启动页
        res.sendfile('login.ejs');
    }
});

app.listen(3001);
module.exports = app;
