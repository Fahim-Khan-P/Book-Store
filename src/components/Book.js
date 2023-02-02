import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/booksSlice';
import spinner from '../assets/spinner.png';

const Book = (book) => {
  // eslint-disable-next-line camelcase
  const { title, author, item_id } = book;
  const dispatch = useDispatch();
  return (
    <div className="single-book">
      <div className="all-book-container">
        <div className="book-container">
          <h2 className="title">{title}</h2>
          <h3 className="author">{author}</h3>
          <div className="button-container">
            <button type="button">Comment</button>
            <span>|</span>
            <button
              type="button"
              onClick={() => dispatch(deleteBook(item_id))}
            >
              Remove
            </button>
            <span>|</span>
            <button type="button">Edit</button>
          </div>
        </div>
        <div className="progress-div">
          <img src={spinner} alt="progres Bar" className="progres-bar" />
          <div>
            <p className="percentage">64%</p>
            <p className="book-status">Completed</p>
          </div>
        </div>
        <div className="last-div">
          <p className="current-chapter">CURRENT CHAPTER</p>
          <p className="chapter">Chapter 17</p>
          <button type="button" className="progress-btn">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

export default Book;
