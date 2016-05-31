import React from 'react';
//import { combineReducers } from 'redux';
//import { createStore } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions.js';
import * as reducers from '../reducer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }

  componentDidMount() {
    //this.props.fetchUser();

    //These methods are available to props, you can pass them down
    this.props.postUser({
      firstName: 'hey',
      lastName: 'bro',
      email: 'example@example.com'
    });
    this.props.getJobList();
  }

  render() {
    return(  
      <div>
        {JSON.stringify(this.props)}
     </div>
      
    );
  }
}

const mapStateToProps = function mapStateToProps(state) {
  const {user, jobList, isFetching, isInvalidated} = state;

  return {
    user,
    jobList,
    isFetching,
    isInvalidated
  }
}

const mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchUser: () => {
      dispatch(actions.getUser());
    },
    postUser: (data) => {
      dispatch(actions.postUser());
    },
    getJobList: () => {
      dispatch(actions.getJobList());
    },
    postJob: (id, data) => {
      dispatch(actions.postJob(id, data));
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App)




