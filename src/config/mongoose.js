var config = require('./config'),
    mongoose= require('mongoose');
module.exports = function() {
    var db = mongoose.connect(config.db);

    require('../app/models/user.server.model');
    require('../app/models/car.server.model');
    require('../app/models/park.server.model');
    require('../app/models/parkingRecord.server.model');
    require('../app/models/recharge.server.model');

    return db;
};