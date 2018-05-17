var mongoose = require('mongoose'),
    ParkingRecord = mongoose.model('ParkingRecord');

var getErrorMessage = function (err) {
    if (err.errors) {
        for (var errName in err.errors) {
            if (err.errors[errName].message) return err.errors[errName].message;
        }
    } else {
        return 'Unknown server error';
    }
};

exports.create = function (req, res) {
    var parkingRecord = new ParkingRecord(req.body);
    parkingRecord.user = req.user;
    parkingRecord.car = req.car;
    parkingRecord.park = req.park;
    parkingRecord.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(parkingRecord);
        }
    });
};
exports.list = function (req, res) {
    ParkingRecord.find().sort('-created').populate('user car park', 'username uid').exec(function (err, parkingRecords) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(parkingRecords);
        }
    });
};

exports.parkingRecordByPId = function (req, res, next, pid) {
    ParkingRecord.findOne({
        park: pid
    }).populate('user car park', 'username uid').exec(function (err, parkingRecords) {
        if (err) return next(err);
        if (!parkingRecords) {
            return next(new Error('Failed to load parkingRecord ' + pid));
        }
        req.parkingRecords = parkingRecords;
        next();
    });
};
exports.read = function(req, res) {
    res.json(req.parkingRecords);
};
exports.update = function(req, res) {
    var parkingRecord = req.parkingRecord;
    // parkingRecord 属性
    parkingRecord.save(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(parkingRecord);
        }
    });
};

exports.delete = function(req, res) {
    var parkingRecord = req.parkingRecord;
    parkingRecord.remove(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(parkingRecord);
        }
    });
};
//
// exports.index = function (req, res) {
//
//     res.render('parkindex', {
//         title: 'Hello World',
//     });
// };

exports.hasAuthorization = function (req, res, next) {
    if (req.car.owner.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};