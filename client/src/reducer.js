import { REQUEST_USER, RECEIVE_USER, INVALIDATE_USER } from './actions.js';

export const user = function(state, action) {
  switch(action.type) {
    case REQUEST_USER:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_USER:
      return Object.assign({}, state, {
        user: action.userJson,
        invalidated: false,
        isFetching: false
      });
    case INVALIDATE_USER:
      return Object.assign({}, state, {
        invalidated: true
      })
    default:
      return state
  }
}