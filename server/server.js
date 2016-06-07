const express      = require('express');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const session      = require('express-session');

const passport     = require('./config/passport');
const routes       = require('./routes');
const auth         = require('./routes/auth');
const staticRoutes = require('./routes/static');

const app = express();
const port = process.env.PORT || 3000;

app.use(cookieParser());
app.use(session({
  secret: 'cat',
  resave: true,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', staticRoutes);
app.use('/api', routes);
app.use('/auth', auth);

app.use(express.static(`${__dirname}/../client/public`));
app.use(express.static('node_modules'));
app.engine('html', require('ejs').renderFile);
app.set('views', `${__dirname}/../client/public`);



app.listen(port);
/* eslint-disable no-console */
console.log(`listening to port: ${port}`);
module.exports = app;
