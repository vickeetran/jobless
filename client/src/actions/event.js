import * as helper from './actionHelper.js';

export const EVENT_GET_REQUEST = 'EVENT_GET_REQUEST';
export const EVENT_GET_RESPONSE = 'EVENT_GET_RESPONSE';

export const EVENT_POST_REQUEST = 'EVENT_POST_REQUEST';
export const EVENT_POST_RESPONSE = 'EVENT_POST_RESPONSE';

export const EVENT_PUT_REQUEST = 'EVENT_PUT_REQUEST';
export const EVENT_PUT_RESPONSE = 'EVENT_PUT_RESPONSE';

const ENDPOINT = 'event';

const getRequest = function(status) {
  return {
    type: EVENT_GET_REQUEST,
    status
  }
}

const getResponse = function(status, data) {
  return {
    type: EVENT_GET_RESPONSE,
    status,
    data
  }
}

export const get = function(id) {
  return helper.get({
    request: getRequest,
    response: getResponse,
  }, ENDPOINT + '/' + id.toString());
}

const postRequest = function(status) {
  return {
    type: EVENT_POST_REQUEST,
    status
  }
}

const postResponse = function(status, data) {
  return {
    type: EVENT_POST_RESPONSE,
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

const putRequest = function(status) {
  return {
    type: EVENT_POST_RESPONSE,
    status,
  }
}

const putResponse = function(status, data) {
  return {
    type: EVENT_PUT_RESPONSE,
    status,
    data
  }
}

export const put = function(data, id) {
  return helper.put({
    request: putRequest,
    response: putResponse,
  }, ENDPOINT, data)
}