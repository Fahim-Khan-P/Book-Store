import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';

const Book = (book) => {
  // eslint-disable-next-line camelcase
  const { title, author, item_id } = book;
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
          onClick={() => dispatch(deleteBook(item_id))}
        >
          Remove
        </button>
      </p>
    </div>
  );
};

export default Book;
