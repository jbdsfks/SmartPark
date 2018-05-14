var users = require('../../app/controllers/users.server.controller'),
    passport = require('passport');
module.exports = function(app) {

    app.route('/user/create')
        .post(users.create)
        .get(users.list);

    app.route('/user/id/:userId')
        .get(users.read)
        .put(users.update)
        .delete(users.delete);
    app.param('userId', users.userByUid);

    app.route('/signUp')
        .get(users.renderSignup)
        .post(users.signup);

    app.route('/signIn')
        .get(users.renderSignin)
        .post(
            function(req, res, next) {
                passport.authenticate('local', function(err, user, info) {
                    if (err) { return next(err); }
                    if (!user) { return res.redirect('/signIn'); }
                    req.login(user, function(err) {
                        if (err) { return next(err); }
                        return res.redirect('/user/id/'+req.user.uid);
                    });
                })(req, res, next);
        });

    app.get('/signout', users.signout);

    // app.get('/', index.login);
    // app.get('/register', index.register);
};