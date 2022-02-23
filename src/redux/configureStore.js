import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { addRemoveBook } from './books';

const rootReducer = combineReducers({
  addRemoveBook,
});

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
