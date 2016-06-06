import * as helper from './actionHelper.js';

export const SESSION_GET_REQUEST = 'SESSION_GET_REQUEST';
export const SESSION_GET_RESPONSE = 'SESSION_GET_RESPONSE';

const ENDPOINT = 'session';

const getRequest = function(id) {
  return {
    type: SESSION_GET_REQUEST,
    id
  }
}

const getResponse = function(status, data) {
  return {
    type: SESSION_GET_RESPONSE,
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
