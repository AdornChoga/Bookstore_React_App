import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { addRemoveBook } from './books';

const rootReducer = combineReducers({
  addRemoveBook,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
