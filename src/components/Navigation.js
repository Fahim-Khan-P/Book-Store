import React from 'react';
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import '../App.css';

const Navigation = () => (
  <nav className="nav">
    <ul>
      <h1 className="navbar-title">Bookstore CMS</h1>
      <li><Link to="/" className="link">BOOKS</Link></li>
      <li>
        <Link to="/Categories" className="link">CATEGORIES</Link>
      </li>
    </ul>
    <FaUser className="userIcon" />
  </nav>
);

export default Navigation;
