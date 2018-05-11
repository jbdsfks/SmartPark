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


exports.render = function(req, res) {
    // if (req.session.lastVisit) {
    //     console.log(req.session.lastVisit);
    // }
    //
    // req.session.lastVisit = new Date();

    res.render('index', {
        title: 'Hello World',
        user: JSON.stringify(req.user)
        // car: req.user ? findCarByOwnerID(req.user._id): null
    });
};