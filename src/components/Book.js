import React from 'react';

const Book = (book) => {
  const { title, author } = book;
  return (
    <div className="book">
      <p>
        BookName:
        {title}
        Author:
        {author}
        <button type="button">Remove</button>
      </p>
    </div>
  );
};

export default Book;
