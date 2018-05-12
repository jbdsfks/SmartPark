var passport= require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('mongoose').model('User');

module.exports = function() {
    passport.use(new LocalStrategy({
        usernameField: 'username',    // define the parameter in req.body that passport can use as username and password
        passwordField: 'password',
        passReqToCallback: true
    },function(req,uid, password, done) {
        console.log(111);
        User.findOne({
            uid: uid
        }, function(err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, {
                    message: 'Unknown user'
                });
            }
            if (!user.authenticate(password)) {
                return done(null, false, {
                    message: 'Invalid password'
                });
            }
            console.log('login success');
            req.user = user;
            return done(null, user);
        });
    }));
};