const router = require('express').Router();
const isLoggedIn = require('../helpers/auth');
const jobs = require('github-jobs');

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

router.get('/gitjobs', isLoggedIn, function(req, res) {
  res.render('search.html');
});

module.exports = router;