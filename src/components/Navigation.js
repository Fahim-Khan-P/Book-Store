import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Navigation = () => (
  <nav className="nav">
    <ul>
      <h1>BookStore APP</h1>
      <li><Link to="/">Home</Link></li>
      <li>
        <Link to="/Categories">Categories</Link>
        {' '}
      </li>
    </ul>
  </nav>
);

export default Navigation;
