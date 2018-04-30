var mongoose = require('mongoose'),
    Car = mongoose.model('Car');

var getErrorMessage = function (err) {
  if (err.errors){
      for (var errName in err.errors){
          if (err.errors[errName].message)
              return err.errors[errName].message;
      }
  }else {
      return 'Unknown server error';
  }
};
exports.renderCreateCar = function(req, res, next) {
    console.log('1');
    console.log(req.user);
    if (!req.car) {
        console.log(req.user);
        res.render('car', {
            title: 'create car Form',
            messages: req.flash('error') || req.flash('info')
        });
    } else {
        return res.redirect('/api/cars');
    }
};
exports.create = function (req, res) {
    var car = new Car(req.body);
    car.owner = req.user;

    car.save(function (err) {
       if (err){
           return res.status(400).send({
               message: getErrorMessage(err)
           });
       }else {
           res.json(car);
       }
    });
};

exports.list = function (req, res) {
    Car.find().sort('-created').populate('owner', 'username uid').exec(function (err, cars) {
       if (err){
           return res.status(400).send({
               message: getErrorMessage(err)
           });
       }  else {
           res.json(cars);
       }
    });
};

exports.findCarByOwner = function(req, res, next, ownerId){
    console.log(ownerId);
    Car.findOne({
        owner:ownerId
    }).populate('owner', 'username uid').exec(function (err, car) {
        if (err){
            return next(err);
        }
        if (!car)
            return next(new Error('Failed to load '+ownerId+'\'s car '));
        console.log(car);
        req.car = car;
        next();
    });

};

exports.carByID = function (req, res, next, id) {
    Car.findOne({
        _id:id
    }).populate('owner', 'username uid').exec(function (err, car) {
        if (err){
            return next(err);
        }
        if (!car)
            return next(new Error('Failed to load car '+ id));

        req.car = car;
        next();
    })
};

exports.read = function (req, res) {
    console.log(req.car);
    res.json(req.car);
};

exports.delete = function(req, res) {
    var car = req.car;
    car.remove(function(err) {
        if (err) {
            return res.status(400).send({
                message: getErrorMessage(err)
            });
        } else {
            res.json(car);
        }
    });
};

exports.hasAuthorization = function(req, res, next) {
    if (req.car.owner.id !== req.user.id) {
        return res.status(403).send({
            message: 'User is not authorized'
        });
    }
    next();
};
