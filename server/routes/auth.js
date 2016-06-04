// eslint-disable-next-line new-cap
const router = require('express').Router();
const passport = require('../helpers/passport');

router.get('/login', passport.authenticate('google', { scope: ['profile', 'email'] }));
router.get('/google/callback', passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/failed',
}));

module.exports = router;
