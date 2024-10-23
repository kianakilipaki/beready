import React from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa'; // For the hamburger icon
import './styles.scss';

const Navbar = () => {
  return (
    <>
    <div className='banner'></div>
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="active"><Link to="/">Home</Link></li>
        <li><Link to="/presentations">Presentations</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="navbar-hamburger">
        <FaBars />
      </div>
    </nav>
    </>
  );
};

export default Navbar;