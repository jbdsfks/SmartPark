var mongoose = require('mongoose'),
    Recharge = mongoose.model('Recharge'),
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

    var recharge = new Recharge();
    recharge.money = req.body.money;
    recharge.Date = String((new Date()).getTime());
    User.findOne({
        uid:req.body.user
    }).exec(function (err, user) {
        if (err){
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        }
        console.log(user);
        recharge.user = user._id;
        recharge.save(function (err) {
            if (err){
                return res.status(400).send({
                    message: getErrorMessage(err)
                });
            }else {
                user.money = recharge.money + user.money;
                user.save(function (err) {
                    if (err){
                        return res.status(400).send({
                            message: getErrorMessage(err)
                        });
                    }else{
                        res.json(recharge);
                    }
                })
            }
        })
    });
};
exports.list = function (req, res) {
    console.log(req.user);
    Recharge.find({
        user: req.user._id
    }).sort('-created').populate('user', 'username uid').exec(function (err, recharges) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            // console.log(recharges);
            res.json(recharges);
        }
    });
    // console.log(uid);
    // User.findOne({
    //     uid:req.user.uid
    // }).exec(function (err,user) {
    //    if (err){
    //        return next(err);
    //    }else{
    //        // console.log(user);
    //
    //    }
    // });
};
exports.read = function (req, res) {
    console.log(req.recharges);
    res.json(req.recharges);
};

// exports.read = function (req, res) {
//     // console.log(req.parkingRecords);
//     res.json(req.recharge);
// };
