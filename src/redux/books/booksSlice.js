const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const addBook = (book) => ({
  type: ADD_BOOK,
  book,
});

export const removeBook = (bookId) => ({
  type: REMOVE_BOOK,
  bookId,
});

const INITIALBOOKS = [
  {
    id: 1,
    title: 'Redux',
    author: 'Khan',
  },
  {
    id: 2,
    title: 'React',
    author: 'Aman',
  },
  {
    id: 3,
    title: 'Express',
    author: 'Karim',
  },
];

const bookReducer = (state = INITIALBOOKS, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];

    case REMOVE_BOOK: {
      return state.filter((book) => book.id !== action.bookId);
    }
    default:
      return state;
  }
};

export default bookReducer;
