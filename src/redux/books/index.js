const ACTIONS = {
  ADDBOOK: 'book/add-book',
  REMOVEBOOK: 'book/remove-book',
};

const initialState = [
  {
    bookTitle: 'The Hunger Games',
    category: 'Action',
    author: 'Suzanne Collins',
    progress: '0%',
    chapter: 'Introduction',
    id: 1,
  },
];

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
