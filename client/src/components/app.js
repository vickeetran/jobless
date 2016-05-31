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
    this.props.fetchUser();
    // this.props.postUser({
    //   firstName: 'hey',
    //   lastName: 'bro',
    //   email: 'example@example.com'
    // });
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
      //console.log('fetching');
      dispatch(actions.getUser());
    },
    postUser: (data) => {
      dispatch(actions.postUser());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App)




