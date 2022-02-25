import axios from 'axios';
import bookApp from '../../logic/local_storage';

/* eslint-disable react/jsx-key */

const ACTIONS = {
  INITIALIZE: 'book/state/initialize',
  ADDBOOK: 'book/add-book',
  REMOVEBOOK: 'book/remove-book',
};

const baseUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';
const { appId } = bookApp.fetchApp();

const addBook = (payload) => async (dispatch) => {
  const requestBody = {
    item_id: payload.id,
    title: payload.bookTitle,
    category: payload.category,
  };
  const options = { headers: { 'Content-Type': 'application/json' } };
  await axios.post(`${baseUrl}${appId}/books`, requestBody, options);
  const { data } = await axios.get(`${baseUrl}${appId}/books`);
  const bookId = payload.id;
  const book = data[bookId][0];
  dispatch({ type: ACTIONS.ADDBOOK, payload: { ...book, id: bookId } });
};

const removeBook = (payload) => async (dispatch) => {
  const bookId = payload.id;
  await axios.delete(`${baseUrl}${appId}/books/${bookId}`);
  dispatch({ type: ACTIONS.REMOVEBOOK, payload: { id: bookId } });
};

const initializeState = (payload) => (
  {
    type: ACTIONS.INITIALIZE,
    payload,
  }
);

const addRemoveBook = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.ADDBOOK:
      return [...state, action.payload];
    case ACTIONS.REMOVEBOOK:
      return state.filter((book) => book.id !== action.payload.id);
    case ACTIONS.INITIALIZE:
      return action.payload;
    default:
      return state;
  }
};

export {
  ACTIONS, addBook, removeBook, addRemoveBook, initializeState,
};
