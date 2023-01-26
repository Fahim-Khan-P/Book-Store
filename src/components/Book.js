import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = (book) => {
  const { title, author, id } = book;
  const dispatch = useDispatch();
  return (
    <div className="book">
      <p>
        BookName:
        {title}
        Author:
        {author}
        <button
          type="button"
          onClick={() => dispatch(removeBook(id))}
        >
          Remove
        </button>
      </p>
    </div>
  );
};

export default Book;
