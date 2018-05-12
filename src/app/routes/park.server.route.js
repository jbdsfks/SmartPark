module.exports = function(app) {
    var park = require('../controllers/park.server.controller');
    app.get('/park/index', park.index);
};