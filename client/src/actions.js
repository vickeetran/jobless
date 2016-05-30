import fetch from 'isomorphic-fetch';

export const REQUEST_USER = 'REQUEST_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const INVALIDATE_USER = 'INVALIDATE_USER';

const requestUser = function() {
  return {
    type: REQUEST_USER
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

export const invalidateUser = function() { //not important...yet?
  return {
    type: INVALIDATE_USER
  }
}

export const getUser = function() {
  return (dispatcher, state) => {
    //if it's not fetching, and the user is either empty or invalidated: you fetch
    if(!state.isFetching && (!state.user || state.isInvalidated)) {
      fetchUser()(dispatcher);
    } 
  }
}


