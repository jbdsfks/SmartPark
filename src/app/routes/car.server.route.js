var users = require('../../app/controllers/users.server.controller'),
    cars = require('../../app/controllers/cars.server.controller');

module.exports = function (app) {


    app.route('/api/cars/user/:userId')
        .get(cars.list)
        .post(cars.create);
    app.param('userId',users.userByUid);

    app.route('/api/cars/car/:carId')
        .get(cars.read)
        .put(cars.update)
        .delete(cars.delete);
    app.param('carId', cars.carByID);
};