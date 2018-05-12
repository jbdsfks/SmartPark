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

    app.route('/signup')
        .get(users.renderSignup)
        .post(users.signup);

    app.route('/signin')
        .post(
        passport.authenticate('local', { failureRedirect: '/' }),
        function(req, res) {
            res.redirect('/user/id/'+req.user.uid);
        });

    app.get('/signout', users.signout);
};