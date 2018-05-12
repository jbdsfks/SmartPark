var Car = require('mongoose').model('Car');


exports.index = function(req, res) {

    res.render('parkindex', {
        title: 'Hello World',
    });
};