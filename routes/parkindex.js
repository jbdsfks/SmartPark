var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('parkindex', { title: '停车场管理' });
});

module.exports = router;
