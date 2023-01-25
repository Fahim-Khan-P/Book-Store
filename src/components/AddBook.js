import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';

import { addBook } from '../redux/books/booksSlice';



const AddBook = () => {
  const [newBook, setNewBook] = useState();
  
  const dispatch = useDispatch();

  const addButtonHandler = (e) => {
    e.preventDefault();
    const book = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(book));
    setNewBook({
      title:'',
      author:'',
    });
  };

  const inputHandler = (e) => {
    setNewBook({ ...newBook, [e.target.name]: e.target.value });
  };



  return (
    <form className="form-div">
      <h3 className>Add Book</h3>
      <input type="text" placeholder="Book Title" onChange={inputHandler}/>
      <input type="text" placeholder="Author Name" onChange={inputHandler} />
      <button type="submit" onClick={addButtonHandler}>AddBook</button>
    </form>
  );
}

export default AddBook;
