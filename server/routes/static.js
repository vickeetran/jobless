const router = require('express').Router();
const isLoggedIn = require('../helpers/auth');
router.get('/', function(req, res) {
  res.render('index.html')
});

router.get('/login', function(req, res) {
  res.render('front.html');
});

module.exports = router;