import React from 'react';
import fetch from 'isomorphic-fetch';

import { Router, Route, Link, browserHistory } from 'react-router'//import { createStore } from 'redux';
import { connect } from 'react-redux';
import * as reducers from '../reducer.js';

export default class GitJobs extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("gitjobs mounted");
    fetch('/gitjobs', {credentials: 'same-origin'})
    .then( res => res.json() )
    .then( jobs => {
      console.log('JOBSSSZ', jobs);
    })    
  }

  componentWillReceiveProps(nextProps) {
    
  }

  render() {
    return (
      <form className="search-container">
        <input type="text" id="search-bar" placeholder="Seach by company, job title, or location..."/>
        <a href=""><img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/></a>
      </form>
    )
  }
}






