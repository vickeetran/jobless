import { 
  GET_JOB,
  RECEIVE_JOB,
  POST_JOB,
  POST_RECEIVE_JOB,
  RECEIVE_POST_USER,
  GET_JOBLIST,
  RECEIVE_JOBLIST,
  GET_USER,
  RECEIVE_USER,
  INVALIDATE_USER,
  POST_USER } from './actions.js';

export const user = function(state={}, action) {
  switch(action.type) {
    case RECEIVE_USER:
      return action.userJson
    default:
      return state
  }
}

export const jobList = function(state=[], action) {
  switch(action.type) {
    case RECEIVE_JOBLIST:
      return action.jobListJson
    default:
      return state
  }
}

export const isFetching = function(state=false, action) {
  switch(action.type) {
    case GET_USER:
      return true;
    case POST_USER:
      return true;
    case GET_JOBLIST:
      return true;
    case GET_JOB:
      return true;
    case POST_JOB:
      return true;
    case RECEIVE_USER:
      return false;
    case RECEIVE_POST_USER:
      return false;
    case RECEIVE_JOBLIST:
      return false;
    case RECEIVE_JOB:
      return false;
    case POST_RECEIVE_JOB:
      return false;
    default:
      return state;
  }
}

export const selectedJob = function(state={}, action) {
  switch(action.type) {
    //todo, create job
    case RECEIVE_JOB:
      return action.jobJson;
    default:
      return state;
  }
}

export const isInvalidated = function(state=false, action) {//not important yet
  switch(action.type) {
    case INVALIDATE_USER:
      return false;
    case RECEIVE_USER:
      return true;
    default:
      return state;
  }
}