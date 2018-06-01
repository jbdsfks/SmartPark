var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = require('mongoose').model('User');

module.exports = function () {
    passport.use(new LocalStrategy({
        usernameField: 'username',    // define the parameter in req.body that passport can use as username and password
        passwordField: 'password',
        // typeField: 'type',
        passReqToCallback: true
    }, function (req, uid, password, done) {
        // console.log(111);
        User.findOne({
            uid: uid
        }, function (err, user) {
            console.log(user);
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, req.flash('error','用户名不存在！'));
            }
            if (!user.authenticate(password)) {
                console.log(1);
                return done(null, false, req.flash('error','密码错误！'));
            }
            // if (user.type !== type){
            //     return done(null, false, {
            //         message: 'Unknown usertype'
            //     });
            // }
            console.log('login success');
            req.user = user;
            return done(null, user);
        });
    }));
};