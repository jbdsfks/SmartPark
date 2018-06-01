var parkingRecord = require('../controllers/parkingRecord.server.controller'),
    park = require('../controllers/park.server.controller'),
    users = require('../controllers/users.server.controller');

module.exports = function(app) {

    app.route('/api/parkingRecord/:recId')
        .get(parkingRecord.read)
        .delete(parkingRecord.delete)
        .put(parkingRecord.update);
        
    app.param('recId', parkingRecord.getParkingRecordByRecId);

    app.route('/api/parkingRecords/user/:userId')
        .get(parkingRecord.listByUid)
        .post(parkingRecord.create);
    app.param('userId', users.userByUid);

    app.route('/api/parkingRecords/park/:parkId')
        .get(parkingRecord.read);
        // .put(parkingRecord.update)
        //.delete(parkingRecord.delete);
    app.param('parkId', parkingRecord.parkingRecordByPId);
};