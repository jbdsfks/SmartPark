var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var index = require('./routes/index');
var login = require('./routes/login');
var register = require('./routes/register');

var managerindex = require('./routes/managerindex');

var adminindex = require('./routes/adminindex');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/login', login);
app.use('/register', register);

app.use('/managerindex', managerindex);

app.use('/adminindex', adminindex);


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
        res.sendfile('index.ejs');
    }
});

app.listen(3001);
module.exports = app;
