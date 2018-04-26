var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('commonindex', { title: '用户' });
});

module.exports = router;
