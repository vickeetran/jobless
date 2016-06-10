import React from 'react';
import fetch from 'isomorphic-fetch';

import { Router, Route, Link, browserHistory } from 'react-router'//import { createStore } from 'redux';
import { connect } from 'react-redux';
import * as reducers from '../reducer.js';
import GitJobsEntry from './GitJobsEntry.jsx';
import * as Job from '../actions/job.js';


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
      this.setState({gitJobs: jobs});
      console.log('yobs', jobs);
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
              {this.state.gitJobs.map(job => <GitJobsEntry data={job} methods={this.props.methods}/>)}
            </ul>
            )
          }
        })()}
      </div>
    )
  }
}


const mapStateToProps = function mapStateToProps(state) {
  const {job} = state;

  return {
    job
  }
}


const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    methods : {
      postJob: (data) => {
        dispatch(Job.post(data));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (GitJobs)