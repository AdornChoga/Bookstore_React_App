const ACTIONS = {
  ADDBOOK: 'book/add-book',
  REMOVEBOOK: 'book/remove-book',
};

const initialState = [];

const addRemoveBook = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.ADDBOOK:
      return [...state, action.payload];
    case ACTIONS.REMOVEBOOK:
      return state.filter((book) => book.id !== action.payload.id);
    default:
      return state;
  }
};

export { ACTIONS, initialState, addRemoveBook };
