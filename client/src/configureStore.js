import { createStore, applyMiddleware, combineReducers} from 'redux';
import {debug, user, job} from './reducer.js';
import thunkMiddleware from 'redux-thunk'

export default function configureStore(initalState) {
  return createStore(
    combineReducers({debug, user, job}),
    initalState,
    applyMiddleware(thunkMiddleware)
  );
} 