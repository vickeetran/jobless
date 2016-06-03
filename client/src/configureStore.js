import { createStore, applyMiddleware, combineReducers} from 'redux';
import {debug, user, jobList, isFetching,isInvalidated} from './reducer.js';
import thunkMiddleware from 'redux-thunk'

export default function configureStore(initalState) {
  return createStore(
    combineReducers({debug, user, jobList, isFetching, isInvalidated}),
    initalState,
    applyMiddleware(thunkMiddleware)
  );
} 