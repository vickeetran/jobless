const router = require('express').Router();

router.get('/login', function(req, res) {
  res.render('front.html');
});

module.exports = router;