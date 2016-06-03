import * as helper from './actionHelper.js';

export const JOB_GET_REQUEST = 'JOB_GET_REQUEST';
export const JOB_GET_RESPONSE = 'JOB_GET_RESPONSE';

export const JOB_POST_REQUEST = 'JOB_POST_REQUEST';
export const JOB_POST_RESPONSE = 'JOB_POST_RESPONSE';

export const JOB_PUT_REQUEST = 'JOB_PUT_REQUEST';
export const JOB_PUT_RESPONSE = 'JOB_PUT_RESPONSE';

const ENDPOINT = 'position';

const getRequest = function(status) {
  return {
    type: JOB_GET_REQUEST,
    status
  }
}

const getResponse = function(status, data) {
  return {
    type: JOB_GET_RESPONSE,
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
    type: JOB_POST_REQUEST,
    status
  }
}

const postResponse = function(status, data) {
  return {
    type: JOB_POST_RESPONSE,
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
    type: JOB_POST_RESPONSE,
    status,
  }
}

const putResponse = function(status, data) {
  return {
    type: JOB_PUT_RESPONSE,
    status,
    data
  }
}

export const put = function(data) {
  return helper.put({
    request: putRequest,
    response: putResponse,
  }, ENDPOINT, data)
}