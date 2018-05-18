var mongoose = require('mongoose'),
    Park = mongoose.model('Park');

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
    var park = new Park(req.body);
    // park.owner = req.user;
    park.save(function (err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(park);
        }
    });
};
exports.list = function (req, res) {
    Park.find().sort('-created').populate('owner', 'username uid').exec(function (err, parks) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(parks);
        }
    });
};

exports.parkByID = function (req, res, next, pid) {
    Park.findOne({
        _id: pid
    }).populate('owner', 'username uid').exec(function (err, park) {
        if (err) return next(err);
        // if (!park) return next(new Error('Failed to load park ' + pid));
        req.park = park;
        next();
    });
};

exports.parkByOwnerId = function (req, res, next, ownerId) {
    Park.findOne({
        owner: ownerId
    }).populate('owner', 'username uid').exec(function (err, park) {
        if (err) return next(err);
        // if (!park) return next(new Error('Failed to load park ' + ownerId));
        req.park = park;
        next();
    });
};

exports.read = function(req, res) {
    res.json(req.park);
};
exports.update = function(req, res) {
    var park = req.park;
    park.parkname = req.body.parkname;
    park.price = req.body.price;
    park.carnum = req.body.carnum;
    park.address = req.body.address;
    park.phone = req.body.phone;
    // park 属性
    park.save(function(err) {
        if (err) {
            console.log(err);
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(park);
        }
    });
};

exports.delete = function(req, res) {
    var park = req.park;
    park.remove(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(park);
        }
    });
};

exports.index = function (req, res) {

    res.render('parkindex', {
        title: 'Hello World',
    });
};

exports.hasAuthorization = function (req, res, next) {
    if (req.car.owner.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};