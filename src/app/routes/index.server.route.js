module.exports = function(app) {
    var index = require('../controllers/index.server.controller');
    app.get('/', index.login);
    app.get('/register', index.register);
};