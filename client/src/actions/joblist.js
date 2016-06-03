import * as helper from './actionHelper.js';

export const JOBLIST_GET_REQUEST = 'JOBLIST_GET_REQUEST';
export const JOBLIST_GET_RESPONSE = 'JOBLIST_GET_RESPONSE';

const ENDPOINT = 'position';

const getRequest = function(status) {
  return {
    type: JOBLIST_GET_REQUEST,
    status
  }
}

const getResponse = function(status, data) {
  return {
    type: JOBLIST_GET_RESPONSE,
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
