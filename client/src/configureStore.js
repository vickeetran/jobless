import { createStore, applyMiddleware, combineReducers} from 'redux';
import {debug, user, job, jobList, event} from './reducer.js';
import thunkMiddleware from 'redux-thunk'

export default function configureStore(initalState) {
  return createStore(
    combineReducers({debug, user, job, jobList, event}),
    initalState,
    applyMiddleware(thunkMiddleware)
  );
} 