const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const db = require('./../db');

passport.use(new GoogleStrategy({
  clientID: '698335281879-q1ogep3olou0o0vhn0i9383irnbime8b.apps.googleusercontent.com',
  clientSecret: 'wRSinYF2x4eRqa2TsYAwBF8o',
  callbackURL: 'http://localhost:3000/auth/google/callback',
},
(token, refreshToken, profile, done) => {
  process.nextTick(() => {
    done(null, profile);
  });
}));

passport.serializeUser((user, done) => {
  console.log(JSON.stringify(user));
  done(null, user);
});

// used to deserialize the user
passport.deserializeUser((id, done) => {
  db.User.findOne({ where: { id: 1 } })
    .then(user => done(null, user))
    .catch(err => done(err));
});

module.exports = passport;
