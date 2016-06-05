import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'//import { createStore } from 'redux';
import { connect } from 'react-redux';
import * as reducers from '../reducer.js';
import Login from './Login.jsx';
import TestComponent from './TestComponent.jsx'
import * as User from '../actions/user.js';
import * as Job from '../actions/job.js';
import * as JobList from '../actions/joblist.js';
import * as Debug from '../actions/debug.js';
import * as Event from '../actions/event.js';
import Dashboard from './Dashboard.jsx';
import JobAdd from './JobAdd.jsx';


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
    // return this.renderTest();
    
    return (
     <div>
        <Dashboard methods={this.props.methods} user={this.props.user} job={this.props.job} jobList={this.props.jobList} event={this.props.event}/>
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
  //PUTs currently crash server if no id is provided in data object
  return {
    methods : {
      debugOn: () => {
        dispatch(Debug.on());
      },
      debugOff: () => {
        dispatch(Debug.off());
      },
      getUser: () => {          //GETs /api/user/:id and sets user to response
        dispatch(User.get());
      },
      postUser: (data) => {     //POSTs /api/user and sets user to response
        dispatch(User.post(data));
      },
      putUser: (data) => {      //PUTs /api/user and sets user to response
        dispatch(User.put(data));
      },
      getJob: (id) => {
        dispatch(Job.get(id));
      }, 
      postJob: (data) => {
        dispatch(Job.post(data));
      },
      putJob: (data) => {
        dispatch(Job.put(data));
      },
      getJobList: () => {
        dispatch(JobList.get());
      },
      getEvent: () => {
        dispatch(Event.get());
      },
      postEvent: (data) => {
        dispatch(Event.post(data));
      },
      putEvent: (data) => {
        dispatch(Event.put(data));
      }
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (App)




