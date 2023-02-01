import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from '../redux/books/booksSlice';

import Book from './Book';

const AllBooks = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  const books = useSelector((state) => state.books);
  return (
    <div>
      {books.map((book) => (
        <Book key={book.item_id} title={book.title} author={book.author} item_id={book.item_id} />
      ))}
    </div>
  );
};

export default AllBooks;
