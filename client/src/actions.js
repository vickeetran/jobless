import fetch from 'isomorphic-fetch';

export const GET_USER = 'GET_USER';
export const RECEIVE_USER = 'RECEIVE_USER';
export const INVALIDATE_USER = 'INVALIDATE_USER';
export const POST_USER = 'POST_USER';
export const RECEIVE_POST_USER = 'RECEIVE_POST_USER';

export const GET_JOBLIST = 'GET_JOBLIST';
export const RECEIVE_JOBLIST = 'RECEIVE_JOBLIST';

export const GET_JOB = 'GET_JOB';
export const RECEIVE_JOB = 'RECEIVE_JOB';
export const RECEIVE_POST_JOB = 'RECEIVE_POST_JOB';
export const POST_JOB = 'POST_JOB';

/////////USERS///////////
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
    userJson 
  }
}

const receivePostUser = function() {
  return {
    type: RECEIVE_POST_USER
  }
}

const fetchUser = function() {
  return dispatcher => {
    dispatcher(requestUser());
    return fetch('http://localhost:3000/api/user')
      .then(response => { return response.json() })
      .then(json => { return dispatcher(receivePostUser()) });
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
    .then(json => {return dispatcher(receivePostUser())});
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

//////////JOBLIST/////////
const requestJobList = function() {
  return {
    type: GET_JOBLIST
  }
}

const receiveJobList = function(jobListJson) {
  return {
    type: RECEIVE_JOBLIST,
    jobListJson
  }
}

const fetchJobList = function() {
  return dispatcher => {
    dispatcher(requestJobList());
    return fetch('http://localhost:3000/api/position')
      .then(response => {return response.json()})
      .then(json => {return dispatcher(receiveJobList(json))});
  }
}

export const getJobList = function() {
  return (dispatcher,getState) => {
    const state = getState();
    if(!state.isFetching) {
      dispatcher(fetchJobList());
    }
  }
}


///////JOB///////////
const requestJob = function(id) {
  return {
    type: GET_JOB,
    id
  }
}

const receiveJob = function(jobJson) {
  return {
    type: RECEIVE_JOB,
    jobJson
  }
}

const receivePostJob = function() {
  return {
    type: RECEIVE_POST_JOB
  }
}

const fetchJob = function(id) {
  return dispatcher => {
    dispatcher(requestJob(id));
    return fetch('http://localhost:3000/api/position/'+ id.toString())
      .then(response => { return response.json()})
      .then(json => { return dispatcher(receiveJob())})
  }
}

const fetchPostJob = function(id, data) {
  return (dispatcher) => {
    dispatcher(requestPostUser());
    return fetch(
    'http://localhost:3000/api/position'+ id.toString(), {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),//add data here later
    })
    .then(() => {return dispatcher(receivePostJob())});
  }
}

export const getJob = function(id) {
  return (dispatcher, getState) => {
    const state = getState();
    if(!state.isFetching) {
      dispatcher(fetchJob(id));
    }
  }
}

export const postJob = function(id, data) {
  return (dispatcher, getState) => {
    const state = getState();
    if(!state.isFetching) {
      dispatcher(fetchPostJob(id, data))
    }
  }
}