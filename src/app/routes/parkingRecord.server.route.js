var parkingRecord = require('../controllers/parkingRecord.server.controller'),
    park = require('../controllers/park.server.controller'),
    users = require('../controllers/users.server.controller');

module.exports = function(app) {

    // app.get('/park/index', park.index);

    app.route('/api/parkingRecords')
        .get(parkingRecord.list)
        .post(users.requiresLogin, parkingRecord.create);
    app.route('/api/parkingRecord/:parkingRecordId')
        .get(parkingRecord.read)
        .put(parkingRecord.update)
        .delete(parkingRecord.delete);
    app.param('parkingRecordId', parkingRecord.parkingRecordById);
};