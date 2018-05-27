var User = require('mongoose').model('User'),
    passport = require('passport'),
    Car = require('mongoose').model('Car');

exports.create = function(req, res, next) {
    var user = new User(req.body);
    user.save(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(user);
        }
    });
};
exports.list = function(req, res, next) {
    User.find({}, function(err, users) {
        if (err) {
            return next(err);
        } else {
            res.json(users);
        }
    });
};
exports.read = function(req, res) {
    res.json(req.user);
};
exports.userByUid = function(req, res, next, uid){
    // console.log(uid);
    User.findOneByUId(uid, function(err, user) {
        if (err) {
            return next(err);
        } else {
            req.user = user;
            next();
        }
    });
};
exports.update = function(req, res) {
    var user = req.user;
    user.username = req.body.username;
    user.password = User.hashPassword(req.body.password);
    user.email = req.body.email;
    user.type = req.body.type;
    // park 属性
    user.save(function(err) {
        if (err) {
            console.log(err);
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(user);
        }
    });
};
exports.delete = function(req, res, next) {
    req.user.remove(function(err) {
        if (err) {
            return next(err);
        } else {
            res.json(req.user);
        }
    })
};
var getErrorMessage = function(err) {
    var message = '';
    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
            default:
                message = 'Something went wrong';
        }
    } else {
        for (var errName in err.errors) {
            if (err.errors[errName].message) message = err.errors[errName].
                message;
        }
    }
    return message;
};
exports.renderSignin = function(req, res, next) {
    if (!req.user) {
        // console.log('asd');

        res.render('login', {
            title: '登 录',
            messages: req.flash('error') || req.flash('info'),
            user: req.user?req.user:null
        });
    }else{

        res.render('login', {
            title: '登 录',
            messages: req.flash('error') || req.flash('info'),
            user: req.user?req.user:null
        });
    }
};
exports.renderSignup = function(req, res, next) {
    if (!req.user) {
        res.render('register', {
            title: 'Sign-up Form',
            messages: req.flash('error')
        });
    } else {
        return res.redirect('/signIn');
    }
};
exports.signup = function(req, res, next) {
    if (!req.user) {
        console.log(req.body);
        var user = new User(req.body);
        user.uid = req.body.username;
        console.log(user);
        var message = null;
        user.provider = 'local';
        user.save(function(err) {
            if (err) {
                console.log(err);
                var message = getErrorMessage(err);
                req.flash('error', message);
                return res.redirect('/signUp');
            }
            var message = 'sign up success';
            req.flash('info', message);
            return res.redirect('/api/user/'+user.uid);
        });
    } else {
        res.redirect('/api/user/'+req.user.uid);
    }
};
exports.signout = function(req, res) {
    req.logout();
    res.redirect('/');
};
exports.requiresLogin = function(req, res, next) {
    if (!req.isAuthenticated()) {
        return res.status(401).send({
            message: 'User is not logged in'
        });
    }
    next();
};