import React from 'react';
import fetch from 'isomorphic-fetch';

import { Router, Route, Link, browserHistory } from 'react-router'//import { createStore } from 'redux';
import { connect } from 'react-redux';
import * as reducers from '../reducer.js';
import GitJobsEntry from './GitJobsEntry.jsx';

export default class GitJobs extends React.Component {
  constructor(props) {
    super(props);

    this.retrieveQuery = this.retrieveQuery.bind(this);

    this.state = {
      gitJobs: null
    }
  }

  componentDidMount() {
  
  }

  retrieveQuery() {
    var query = document.getElementById('search-bar').value;
    console.log(query);
    fetch(`/gitjobs?term=${query}`, {credentials: 'same-origin'})
    .then( res => res.json() )
    .then( jobs => {
      //console.log('JOBSSSZ', jobs);
      this.setState({gitJobs: jobs});
      console.log('!!!!!!!!!', this.state.gitJobs);
    })    
  }

  componentWillReceiveProps(nextProps) {
    
  }

  render() {
    return (
      <div>
        <form className="search-container">
          <input type="text" id="search-bar" placeholder="Seach by company, job title, or location..."/>
          <a onClick={this.retrieveQuery}><img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/></a>
        </form>
        {(() => {
          if (this.state.gitJobs) {
            return (
            <ul className="menu-box-menu">
              {this.state.gitJobs.map(job => <GitJobsEntry data={job}/>)}
            </ul>
            )
          }
        })()}
      </div>
    )
  }
}






