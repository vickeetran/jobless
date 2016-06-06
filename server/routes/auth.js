// eslint-disable-next-line new-cap
const router = require('express').Router();
const passport = require('../config/passport');

router.get('/login', passport.authenticate('google', { scope: ['profile', 'email', 'openid', 'https://www.googleapis.com/auth/calendar'] }));
router.get('/google/callback', passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/failed',
}));

module.exports = router;