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
    app.set('views',path.join(__dirname,'../../public/views'));
    app.set('view engine', 'ejs');

    app.use(flash());
    app.use(passport.initialize());
    app.use(passport.session());

    require('../app/routes/users.server.route')(app);
    require('../app/routes/car.server.route')(app);
    require('../app/routes/park.server.route')(app);
    require('../app/routes/parkingRecord.server.route')(app);
    require('../app/routes/recharge.server.route')(app);

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
        console.log(err);
        res.render('error');
    });

    return app;
};
