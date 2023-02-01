// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/p2ztw1D4qHtLB1Q2CF6o/books';

const INITIALBOOKS = [];

export const fetchBooks = createAsyncThunk(
  'feachBooks',
  async () => {
    const response = await axios.get(URL);
    const data = Object.keys(response.data).map((id) => ({
      item_id: id,
      ...response.data[id][0],
    }));
    return data;
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
      .addCase(fetchBooks.fulfilled, (state, action) => action.payload)
      .addCase(createBooks.fulfilled, (state, action) => [...state, action.payload])
      // eslint-disable-next-line max-len
      .addCase(deleteBook.fulfilled, (state, action) => state.filter((book) => book.item_id !== action.payload))
      .addDefaultCase((state) => state);
  },
});

export default bookSlice.reducer;
