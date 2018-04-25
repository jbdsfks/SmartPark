var users = require('../../app/controllers/users.server.controller'),
    cars = require('../../app/controllers/cars.server.controller');

module.exports = function (app) {

    app.route('/api/cars/create')
        .get(cars.renderCreateCar)
        .post(users.requiresLogin, cars.create);

    app.route('/api/cars')
        .get(cars.list);

    app.route('/api/cars/:carId')
        .get(cars.read)
        .delete(users.requiresLogin, cars.hasAuthorization, cars.delete);
    app.param('carId', cars.carByID);
};