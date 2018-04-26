var express = require('express');
	router = express.Router(),



router.get('/', function(req, res, next) {
  res.render('login', { title: '登录' });
});

  
module.exports = router;
