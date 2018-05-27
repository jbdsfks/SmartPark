var recharge = require('../controllers/recharge.server.controller'),
    user = require('../controllers/users.server.controller');

module.exports = function (app) {

    app.route('/api/bills/:userId')
        .get(recharge.list)
        .post(recharge.create);
    app.param('userId',user.userByUid);

};