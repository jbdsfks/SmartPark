var park = require('../controllers/park.server.controller'),
    users = require('../controllers/users.server.controller');

module.exports = function(app) {

    app.get('/park/index', park.index);

    app.route('/api/parks')
        .get(park.list)
        .post(park.create);

    app.route('/api/parks/:ownerId')
        .get(park.read)
        .put(park.update)
        .delete(park.delete);
    app.param('ownerId', park.parkByOwnerId);

    // app.route('/api/parks/:parkId')
    //     .get(park.read)
    //     .put(park.update)
    //     .delete(park.delete);
    // app.param('parkId', park.parkByID);

};