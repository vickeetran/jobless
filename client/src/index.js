import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore.js';
import App from './components/app';
import { Provider } from 'react-redux';

require('file?name=[name].[ext]!./index.html');

// Require stylesheets
require('./stylesheets/sass/style.scss');
require('./stylesheets/sass/joblist.scss');

const initalState =  {
    jobList: [],
    isFetching: false,
    isInvalidated: false
  };

let store = configureStore(initalState);

ReactDOM.render((<Provider store={store}><App /></Provider>), document.getElementById('app'));
