var mongoose = require('mongoose'),
    ParkingRecord = mongoose.model('ParkingRecord'),
    Park = mongoose.model('Park'),
    User = mongoose.model('User');

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
    var parkingRecord = new ParkingRecord();
    parkingRecord.user = req.user._id;
    parkingRecord.car = req.body.car;
    parkingRecord.park = req.body.park;
    parkingRecord.carin = req.body.carin;

    Park.findOne({
        _id: parkingRecord.park
    }).exec(function (err, park) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            park.freenum = park.freenum - 1;
            park.save(function (err) {
                if (err) {
                    return res.status(400).send({
                        message: getErrorMessage(err)
                    });
                } else {
                    parkingRecord.save(function (err) {
                        if (err) {
                            return res.status(400).send({
                                message: getErrorMessage(err)
                            });
                        } else {
                            res.json(parkingRecord);
                        }
                    });
                }
            })
        }
    });
};

exports.listByUid = function (req, res) {
    ParkingRecord.find({
        user: req.user._id
    }).sort('-created').populate('user park car', 'username uid parkname carId').exec(function (err, parkingRecords) {
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
    }).populate('user park car', 'username uid parkname carId').exec(function (err, parkingRecords) {
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
    parkingRecord.carout = req.body.carout;
    var time_in = new Date(parkingRecord.carin),
        time_out = new Date(parkingRecord.carout);
    var hours = Math.ceil((time_out - time_in) / (3600 * 1000));

    Park.findOne({
        _id: parkingRecord.park
    }).exec(function (err, park) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {

            park.freenum = park.freenum + 1;
            var pay = hours * park.price;
            parkingRecord.pay = pay;

            park.save(function (err) {
                if (err) {
                    return res.status(400).send({
                        message: getErrorMessage(err)
                    });
                } else {

                    User.findOne({
                        _id:parkingRecord.user
                    }).exec(function(err, user){
                        console.log(user);
                        user.money = user.money - pay;
                        user.save(function (err){
                            if (err){
                                return res.status(400).send({
                                    message: getErrorMessage(err)
                                });
                            }else{
                                parkingRecord.save(function (err) {
                                    if (err) {
                                        return res.status(400).send({
                                            message: getErrorMessage(err)
                                        });
                                    } else {
                                        res.json(parkingRecord);
                                    }
                                });
                            }
                        });
                    });
                }
            });


        }
    });
    // parkingRecord 属性
};

exports.getParkingRecordByRecId = function (req, res, next, recId) {

    ParkingRecord.findOne({
        _id: recId
    }).exec(function (err, parkingRecord) {
        if (err) {
            next(err)
        } else {
            req.parkingRecord = parkingRecord;
            next()
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