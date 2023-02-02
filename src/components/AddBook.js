import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createBooks } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  const handleInput = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const book = {
      item_id: new Date().getTime().toString(),
      title: newBook.title,
      author: newBook.author,
      category: 'Fiction',
    };
    dispatch(createBooks(book));
    setNewBook({
      title: '',
      author: '',
    });
  };

  return (
    <div className="form-div">
      <h3 className="new-book-title">Add New Book</h3>
      <form className="add-form">
        <input
          className="input"
          type="text"
          placeholder="Title"
          name="title"
          required
          value={newBook.title}
          onChange={handleInput}
        />
        <select
          className="input"
          style={{ width: '165px' }}
        >
          <option value="" disabled>Select category</option>
          <option value="Fiction">Fiction</option>
          <option value="Novel">Novel</option>
          <option value="Science-Fiction">Science-Fiction</option>
          <option value="Economy">Economy</option>
        </select>
        <button type="submit" className="add-btn" onClick={handleClick}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddBook;
