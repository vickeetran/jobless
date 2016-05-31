import { createStore, applyMiddleware, combineReducers} from 'redux';
import {user, jobList, isFetching,isInvalidated} from './reducer.js';
import thunkMiddleware from 'redux-thunk'

export default function configureStore(initalState) {
  return createStore(
    combineReducers({user, jobList, isFetching, isInvalidated}),
    initalState,
    applyMiddleware(thunkMiddleware)
  );
} 