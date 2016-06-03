import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'//import { createStore } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions.js';
import * as reducers from '../reducer.js';
import Login from './Login.jsx';
import JobView from './jobView.jsx';
import JobListView from './jobList.jsx';
import TestComponent from './TestComponent.jsx'
import * as User from '../actions/user.js';
import * as Job from '../actions/job.js';
import * as JobList from '../actions/joblist.js';
import * as Debug from '../actions/debug.js';
import * as Event from '../actions/event.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    //THIS LINE TURNS ON DEBUG MODE WHICH CONSOLE LOGS EVERY ACTION
    //QUITE USEFUL
    this.props.methods.debugOn();
    
  }

  componentDidMount() {
  }

  renderTest() {
    return (
      <div>
        <TestComponent  methods={this.props.methods} user={this.props.user} job={this.props.job} jobList={this.props.jobList} event={this.props.event}/>
      </div>
    )
  }

  render() {

    //UNCOMMENT THIS TO RENDER TEST COMPONENT
    return this.renderTest();
    
    return (
     <div>
       <JobView newsomething={this.props}/>
     </div>
    );
  }
}

const mapStateToProps = function mapStateToProps(state) {
  const {debug, user, job, jobList, event} = state;

  return {
    debug,
    user,
    job,
    jobList,
    event
  }
}

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    methods : {
      debugOn: () => {
        dispatch(Debug.on());
      },
      debugOff: () => {
        dispatch(Debug.off());
      },
      getUser: () => {
        dispatch(User.get());
      },
      postUser: (data) => {
        dispatch(User.post(data));
      },
      getJob: (id) => {
        dispatch(Job.get(id));
      }, 
      postJob: (data) => {
        dispatch(Job.post(data));
      },
      getJobList: () => {
        dispatch(JobList.get());
      },
      getEvent: (id) => {
        dispatch(Event.get(id));
      },
      postEvent: (data) => {
        dispatch(Event.post(data));
      }
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (App)




