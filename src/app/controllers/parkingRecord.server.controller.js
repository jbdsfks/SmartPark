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
    // parkingRecord.user = req.user;
    // parkingRecord.car = req.car;
    // parkingRecord.park = req.park;
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
    ParkingRecord.find({
        user: req.user._id
    }).sort('-created').populate('user park', 'username uid').exec(function (err, parkingRecords) {
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
    ParkingRecord.find({
        park: pid
    }).populate('user park', 'username uid').exec(function (err, parkingRecords) {
        if (err) return next(err);
        if (!parkingRecords) {
            req.parkingRecord = JSON.stringify();
            next();
        } else {
            req.parkingRecord = parkingRecords;
            next();
        }

    });
};
exports.read = function (req, res) {
    // console.log(req.parkingRecords);
    res.json(req.parkingRecord);
};
exports.update = function (req, res) {
    var parkingRecord = req.parkingRecord;
    // parkingRecord 属性
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

exports.delete = function (req, res) {
    var parkingRecord = req.parkingRecord;
    parkingRecord.remove(function (err) {
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

// exports.hasAuthorization = function (req, res, next) {
//     if (req.car.owner.id !== req.user.id) {
//         return res.status(403).send({
//             message: 'User is not authorized'
//         });
//     }
//     next();
// };