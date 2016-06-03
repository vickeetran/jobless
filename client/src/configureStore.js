import { createStore, applyMiddleware, combineReducers} from 'redux';
import {debug, user, job, jobList} from './reducer.js';
import thunkMiddleware from 'redux-thunk'

export default function configureStore(initalState) {
  return createStore(
    combineReducers({debug, user, job, jobList}),
    initalState,
    applyMiddleware(thunkMiddleware)
  );
} 