import * as helper from './actionHelper.js';

export const USER_GET_REQUEST = 'USER_GET_REQUEST';
export const USER_GET_RESPONSE = 'USER_GET_RESPONSE';

export const USER_POST_REQUEST = 'USER_POST_REQUEST';
export const USER_POST_RESPONSE = 'USER_POST_RESPONSE';

export const USER_PUT_REQUEST = 'USER_PUT_REQUEST';
export const USER_PUT_RESPONSE = 'USER_PUT_RESPONSE';

const ENDPOINT = 'user';

const getRequest = function(id) {
  return {
    type: USER_GET_REQUEST,
    id
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
  }, ENDPOINT);
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
  }, ENDPOINT, data);
}

const putRequest = function(data) {
  return {
    type: USER_PUT_REQUEST,
    data
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
  }, ENDPOINT, data);
}