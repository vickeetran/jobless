import fetch from 'isomorphic-fetch';

export const ERROR = 'ERROR';

export const error = function(error) {
  return {
    type: 'ERROR',
    error
  }
}

export const get = function(actions, endpoint) {
  return dispatcher => {
    dispatcher(actions.request());
    let status;
    return fetch('/api/' + endpoint)
      .then(response => {
        status = response.status;
        return response.json() 
      })
      .then(json => { return dispatcher(actions.response(status, json))});
      //.catch(err => { return dispatcher(error(err))});
  }
}

export const post = function(actions, endpoint, data) {
  return (dispatcher, getState) => {
    dispatcher(actions.request());
    let status;
    return fetch('/api/' + endpoint, {
      method: 'POST',
      //mode:  'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    })
    .then(response => { 
      status= response.status;
      return response.json()
    })
    .then(json => {
      return dispatcher(actions.response(status, json))
    });
    //.catch(err => { return dispatcher(error(err))});
  }
}

export const put = function(actions, endpoint, data, id) {
  return (dispatcher, getState) => {
    dispatcher(actions.request());
    return fetch('/api/' + endpoint + '/' + id.toString(), {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => { return dispatcher(actions.response(response.status, data))})
    .catch(err => { return dispatcher(error(err))});
  }
}

