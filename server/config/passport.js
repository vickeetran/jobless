const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const db = require('./../db');
const config = require('./client_secret');
const calendar = require('../helpers/calendar');

passport.use(new GoogleStrategy({
  clientID: config.web.client_id,
  clientSecret: config.web.client_secret,
  callbackURL: config.web.redirect_uris[0],
},
(token, refreshToken, profile, done) => {
  process.nextTick(() => {
    calendar.events(token, 'primary')
      // Add calendar to profile
      .then(events => calendar.extendWithCalendar(profile, events))
      .then(fullProfile => done(null, fullProfile));
  });
}));

passport.serializeUser((profile, done) => {
  // console.log(JSON.stringify(profile, null, 2));
  done(null, profile);
});

// used to deserialize the user
passport.deserializeUser((profile, done) => {
  db.User.findOrCreate({ where: {
    googleID: profile.id,
    email: profile.emails[0].value,
    firstName: profile.name.givenName,
    lastName: profile.name.familyName,
  } })
    .then(user => calendar.extendWithCalendar(user, profile.calendarEvents))
    .then(user => done(null, user))
    .catch(err => done(err));
});

module.exports = passport;