var user = require('../../app/controllers/users.server.controller');
module.exports = function(app) {
    app.route('/user/create')
        .post(user.create)
        .get(user.list);

    app.route('/user/id/:userId')
        .get(user.read)
        .put(user.update)
        .delete(user.delete);
    app.param('userId', user.userByUid);
};