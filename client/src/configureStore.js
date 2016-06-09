import { createStore, applyMiddleware, combineReducers, session} from 'redux';
import {debug, user, job, jobList, event} from './reducer.js';
import thunkMiddleware from 'redux-thunk';
import { routerReducer } from 'react-router-redux';

export default function configureStore(initalState) {
  return createStore(
    combineReducers({debug, user, job, jobList, event, session, routing: routerReducer}),
    initalState,
    applyMiddleware(thunkMiddleware)
  );
}
