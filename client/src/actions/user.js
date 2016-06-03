import * as helper from './actionHelper.js';

export const USER_GET_REQUEST = 'USER_GET_REQUEST';
export const USER_GET_RESPONSE = 'USER_GET_RESPONSE';

export const USER_POST_REQUEST = 'USER_GET_REQUEST';
export const USER_POST_RESPONSE = 'USER_GET_RESPONSE';

export const USER_PUT_REQUEST = 'USER_PUT_REQUEST';
export const USER_PUT_RESPONSE = 'USER_PUT_RESPONSE';

const getRequest = function(status) {
  return {
    type: USER_GET_REQUEST,
    status
  }
}

const getResponse = function(status, data) {
  return {
    type: USER_GET_RESPONSE,
    status,
    data
  }
}

export const get = function() {
  return helper.get({
    request: getRequest,
    response: getResponse,
  }, 'user');
}

const postRequest = function(status) {
  return {
    type: USER_POST_REQUEST,
    status
  }
}

const postResponse = function(status, data) {
  return {
    type: USER_POST_RESPONSE,
    status,
    data,
  }
}

export const post = function(data) {
  return helper.post({
    request: postRequest,
    response: postResponse,
  }, 'user', data);
}

const putRequest = function(status) {
  return {
    type: USER_POST_RESPONSE,
    status,
  }
}

const putResponse = function(status, data) {
  return {
    type: USER_PUT_RESPONSE,
    status,
    data
  }
}

export const put = function(data) {
  return helper.put({
    request: putRequest,
    response: putResponse,
  }, 'user', data);
}





