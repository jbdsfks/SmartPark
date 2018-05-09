var config = require('./config'),
    createError = require('http-errors'),
    express = require('express'),
    compression=require('compression'),
    path = require('path'),
    cookieParser = require('cookie-parser'),
    logger = require('morgan'),
    methodOverride = require('method-override'),
    session = require('express-session'),
    flash = require('connect-flash'),
    passport = require('passport');

var login = require('../../routes/login');
var register = require('../../routes/register');
var parkindex = require('../../routes/parkindex');
var highwayindex1 = require('../../routes/highwayindex1');
var highwayindex2 = require('../../routes/highwayindex2');

module.exports = function() {
    var app = express();

    if (process.env.NODE_ENV === 'development') {
        app.use(logger('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compression());
    }
    app.use(express.static(path.join(__dirname,'../../public')));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));
    app.use(methodOverride());

    // console.log();


    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());

    app.use('/', login);
    app.use('/register', register);
    app.use('/parkindex', parkindex);
    app.use('/highwayindex1', highwayindex1);
    app.use('/highwayindex2', highwayindex2);
    // require('../app/routes/index.server.route')(app);
    // require('../app/routes/users.server.route')(app);
    // require('../app/routes/car.server.route')(app);

    app.use(express.static('./public'));
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

    // app.all('/*', function (req, res) {
    //     res.sendFile('index.html', {root: path.join(__dirname, 'public')});
    // });

// catch 404 and forward to error handler
    app.use(function(req, res, next) {
        next(createError(404));
    });

// error handler
    app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};

        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });

    return app;
};
