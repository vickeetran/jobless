import { createStore, applyMiddleware, combineReducers} from 'redux';
import {user, jobList} from './reducer.js';
import thunkMiddleware from 'redux-thunk'

export default function configureStore(initalState) {
  return createStore(
    combineReducers({user, jobList}),
    initalState,
    applyMiddleware(thunkMiddleware)
  );
} 