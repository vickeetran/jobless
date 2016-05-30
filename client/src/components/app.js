import React from 'react';
import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions.js';
import * as reducers from '../reducer.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const initalState = {
      isFetching: false,
      isInvalidated: false,
    };

    this.state= {};
    this.store = createStore(reducers.user, initalState);
    this.unsubscribe = this.store.subscribe(()=>{
      this.setState(this.store.getState());
    });
    
    //this.fetchUser();
    setInterval(this.fetchUser.bind(this), 500);
  }
  
  fetchUser () {
    //console.log(this.store.getState());
    actions.getUser()(this.store.dispatch, this.store.getState());
  }

  getUser() {
    return this.store.getState();
  }

  getJob() {
    
  }

  render() {


    return(  
      <div>
        {this.getUser()}
      </div>
      
    );
  }
}




