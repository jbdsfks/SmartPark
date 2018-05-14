var Car = require('mongoose').model('Car');
// var findCarByOwnerID = function(ownerId){
//     console.log('1'+ownerId);
//     return Car.findOne({
//         owner:ownerId
//     }).populate('owner', 'username uid').exec(function (err, car) {
//         if (err){
//             return next(err);
//         }
//         if (!car)
//             return next(new Error('Failed to load '+req.user._id+'\'s car '));
//         console.log('2'+car);
//         return car;
//     });
// };


exports.login = function(req, res) {
    res.render('login', {
        title: '登 录',
        user: req.user ? JSON.stringify(req.user) : null,
        messages: req.flash('error') || req.flash('info')
        // car: req.user ? findCarByOwnerID(req.user._id): null
    });
};
exports.register = function(req, res) {
    res.render('register', {
        title: '注 册',
        // user: JSON.stringify(req.user)
        // car: req.user ? findCarByOwnerID(req.user._id): null
    });
};