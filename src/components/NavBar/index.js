import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <Link to="/">BE READY</Link>
    </div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/about">About</Link></li>
    </ul>
  </nav>
);

export default Navbar;