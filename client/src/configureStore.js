import { createStore, applyMiddleware} from 'redux';
import * as reducers from './reducer.js';
import thunkMiddleware from 'redux-thunk'

export default function configureStore(initalState) {
  return createStore(
    reducers.user,
    initalState,
    applyMiddleware(thunkMiddleware)
  );
} 