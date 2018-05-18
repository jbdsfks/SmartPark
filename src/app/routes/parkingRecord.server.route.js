var parkingRecord = require('../controllers/parkingRecord.server.controller'),
    park = require('../controllers/park.server.controller'),
    users = require('../controllers/users.server.controller');

module.exports = function(app) {

    // app.get('/park/index', park.index);

    app.route('/api/parkingRecords/:userId/:parkId')
        .get(parkingRecord.list)
        .post(parkingRecord.create);
    app.param('userId', users.userByUid);
    app.param('parkId', park.parkByID);

    app.route('/api/parkingRecord/:parkId')
        .get(parkingRecord.read);
        // .put(parkingRecord.update)
        // .delete(parkingRecord.delete);
    app.param('parkId', parkingRecord.parkingRecordByPId);
};