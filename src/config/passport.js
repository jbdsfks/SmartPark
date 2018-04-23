var passport= require('passport'),
    mongoose = require('mongoose');
module.exports = function() {
    var User = mongoose.model('User');
    passport.serializeUser(function(user, done) {
        done(null, user.uid);
    });
    passport.deserializeUser(function(uid, done) { User.findOneByUId({
        uid: uid
    }, '-password -salt', function(err, user) {
        done(err, user);
    });
    });
    require('./strategies/local.js')();
};