import fetch from 'isomorphic-fetch';

export const GET_USER = 'GET_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const INVALIDATE_USER = 'INVALIDATE_USER';
export const POST_USER = 'POST_USER';

const requestUser = function() {
  return {
    type: GET_USER
  }
}

const requestPostUser = function() {
  return {
    type: POST_USER
  }
}

const receiveUser = function(userJson) {
  return {
    type: RECEIVE_USER,
    userJson: userJson 
  }
}

const fetchUser = function() {
  return dispatcher => {
    dispatcher(requestUser());
    return fetch('http://localhost:3000/api/user')
      .then(response => { return response.json() })
      .then(json => { return dispatcher(receiveUser(json)) });
  }
}

const fetchPostUser = function(data) {
  return (dispatcher) => {
    dispatcher(requestPostUser());
    return fetch(
    'http://localhost:3000/api/user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),//add data here later
    })
    .then(response => { console.log(response.body); return response.json() })
    .then(json => {console.log(json); return dispatcher(receiveUser(json))});
  }
}

export const invalidateUser = function() { //not important...yet?
  return {
    type: INVALIDATE_USER
  }
}

export const getUser = function() {
  return (dispatcher, getState) => {
    const state = getState();
    //if it's not fetching, and the user is either empty or invalidated: you fetch
    if(!state.isFetching && (!state.user || state.isInvalidated)) {
      dispatcher(fetchUser());
    } 
  }
}

export const postUser = function(data) {
  return (dispatcher, getState) => {
    const state = getState();
    if(!state.isFetching) {
      dispatcher(fetchPostUser(data));
    } 
  }
}


