const express = require('express');
const app = express();
const passport = require('passport');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
// const db = require('./db');
const routes = require('./routes');
// const clientConfig = require('config/client_secret');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

app.use(passport.initialize());
app.use(passport.session());
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

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // get information from html forms
app.use(express.static(`${__dirname}/../client/public`));

app.get('/main', passport.authenticate('google', { scope: ['profile', 'email' ] }));
app.get('/auth/google/callback', passport.authenticate('google', {
  successRedirect: '/',
  failureRedirect: '/failed',
}));

app.use('/api', routes);

app.listen(port);
/* eslint-disable no-console */
console.log(`listening to port: ${port}`);
module.exports = app;

