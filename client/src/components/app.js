import React from 'react';
import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions.js';
import * as reducers from './reducer.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = createStore(user);
    this.unsubscribe = this.store.subscribe((()=>{
      console.log(this.store.getState());
      //this.setState(this.store.getState());
    }));

    this.state = {      
    }
    this.store.dispatch(actions.fetchUserIfNeeded());
    //fetchUser()(this.store.dispatch);
  }
  
  render() {
    return(  
      <div>
        <JobList />
      </div>
      
    );
  }
}

/////ACTIONS
// const REQUEST_USER = 'REQUEST_USER',
// RECEIVE_USER = 'RECEIVE_USER',
// INVALID_USER = 'INVALID_USER';

// const requestUser = function() {
//   return {
//     type: REQUEST_USER
//   }
// }

// const fetchUser = function() {
//   console.log('fetchUser');
//   return dispatcher => {
//     dispatcher(requestUser());
//     return fetch('http://localhost:3000/user')
//       .then(response => { response.json() })
//       .then(json => { return dispatcher(receiveUser(json)) });
//   }
// }

// const receiveUser = function(userJson) {
//   return {
//     type: RECEIVE_USER,
//     userJson: userJson 
//   }
// }

// const invalidUser = function() {
//   return {
//     type: INVALID_USER
//   }
// }


