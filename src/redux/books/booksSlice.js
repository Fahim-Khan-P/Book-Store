// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/p2ztw1D4qHtLB1Q2CF6o/books';

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

export const fetchBooks = createAsyncThunk(
  'feachBooks',
  async () => {
    const response = await axios.get(URL);
    return response.data;
  },
);

export const createBooks = createAsyncThunk(
  'createBooks',
  async (book) => {
    await axios.post(URL, book);
    return book;
  },
);

export const deleteBook = createAsyncThunk(
  'deleteBook',
  async (id) => {
    await axios.delete(`${URL}/${id}`);
    return id;
  },
);

const bookSlice = createSlice({
  name: 'books',
  initialState: INITIALBOOKS,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.fulfilled, (state, action) => [...state, action.payload])
      .addCase(createBooks.fulfilled, (state, action) => [...state, action.payload])
      // eslint-disable-next-line max-len
      .addCase(deleteBook.fulfilled, (state, action) => state.filter((book) => book.item_id !== action.payload))
      .addDefaultCase((state) => state);
  },
});

export default bookSlice.reducer;
