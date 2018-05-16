var park = require('../controllers/park.server.controller'),
    users = require('../controllers/users.server.controller');

module.exports = function(app) {

    app.get('/park/index', park.index);

    app.route('/api/parks')
        .get(park.list)
        .post(park.create);

    app.route('/api/parks/:parkId')
        .get(users.requiresLogin, park.read)
        .put(users.requiresLogin, park.update)
        .delete(users.requiresLogin, park.delete);
    app.param('parkId', park.parkByID);
};