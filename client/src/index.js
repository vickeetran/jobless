import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import JobList from './components/jobList.jsx';
import JobView from './components/jobView.jsx';
import EventView from './components/eventView.jsx';
require('file?name=[name].[ext]!./index.html');
require('./stylesheets/sass/style.scss');
require('./stylesheets/sass/joblist.scss');

ReactDOM.render(<App />, document.getElementById('app'));
