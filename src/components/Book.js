import React from 'react';

const Book = (title, author) => (
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

export default Book;
