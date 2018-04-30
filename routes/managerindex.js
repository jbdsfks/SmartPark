
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('managerindex', { title: '管理员' });
});

module.exports = router;
