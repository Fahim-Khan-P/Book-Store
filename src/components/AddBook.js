import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

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
      id: new Date().getTime().toString(),
      title: newBook.title,
      author: newBook.author,
    };
    dispatch(addBook(book));
    setNewBook({
      title: '',
      author: '',
    });
  };

  return (
    <form className="add-form">
      <input
        type="text"
        placeholder="Title"
        name="title"
        required
        value={newBook.title}
        onChange={handleInput}
      />
      <input
        type="text"
        placeholder="Author"
        name="author"
        required
        value={newBook.author}
        onChange={handleInput}
      />
      <button type="submit" className="add-btn" onClick={handleClick}>
        Add
      </button>
    </form>
  );
};

export default AddBook;
