import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

require('file?name=[name].[ext]!./index.html');

// Require stylesheets
require('./stylesheets/sass/style.scss');
require('./stylesheets/sass/joblist.scss');

ReactDOM.render(<App />, document.getElementById('app'));
