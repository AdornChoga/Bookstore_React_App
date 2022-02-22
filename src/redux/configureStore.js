import { createStore } from 'redux';
import { addRemoveBook, initialState } from './books';

const store = createStore(addRemoveBook, initialState);

export default store;
