const router = require('express').Router();
const isLoggedIn = require('../helpers/auth');
router.get('/', isLoggedIn, function(req, res) {
  res.render('index.html')
});

router.get('/login', function(req, res) {
  res.render('front.html');
});

router.get('/jobView', isLoggedIn, function(req, res) {
  res.render('index.html');
});

router.get('/calendar', isLoggedIn, function(req, res) {
  res.render('index.html');
});

module.exports = router;