import React from 'react';
import { useSelector } from 'react-redux';

import Book from './Book';

const AllBooks = () => {
  const books = useSelector((state) => state.bookReducer);
  return (
    <div>
      {books.map((book) => (
        <Book title={book.title} author={book.author} key={book.id} />
      ))}
    </div>
  );
};
export default AllBooks;
