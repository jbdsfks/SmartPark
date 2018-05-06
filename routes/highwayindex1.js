var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('highwayindex1', { title: '收费站管理' });
});

module.exports = router;
