import React from 'react';
import { Router, Route, Link, browserHistory } from 'react-router'//import { createStore } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions.js';
import * as reducers from '../reducer.js';
import Login from './Login.jsx';
import JobView from './jobView.jsx';
import JobList from './jobList.jsx';
import TestComponent from './TestComponent.jsx'
import * as User from '../actions/user.js';
import * as Job from '../actions/job.js'
import * as Debug from '../actions/debug.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    //THIS LINE TURNS ON DEBUG MODE WHICH CONSOLE LOGS EVERY ACTION
    //QUITE USEFUL
    this.props.methods.debugOn();
    
  }

  componentDidMount() {
    //this.result = {hi: 'lynn'}
    //this.props.methods.getUser();

    //These methods are available to props, you can pass them down
    // this.props.postUser({
    //   firstName: 'hey',
    //   lastName: 'bro',
    //   email: 'example@example.com'
    // });
    // this.props.getJobList();
  }

  renderTest() {
    return (
      <div>
        <TestComponent  methods={this.props.methods} user={this.props.user} job={this.props.job}/>
      </div>
    )
  }

  render() {

    return this.renderTest();
    
    return (
     <div>
       <JobView newsomething={this.props}/>
     </div>
    );
  }
}

const mapStateToProps = function mapStateToProps(state) {
  const {debug, user, job} = state;

  return {
    debug,
    user,
    job
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
      }
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps) (App)




