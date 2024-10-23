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
        <li><Link to="/store">Store</Link></li>
        <li><Link to="/links">Links</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/join-us">Join Us</Link></li>
        <li><Link to="/forum">Forum</Link></li>
      </ul>
      <div className="navbar-hamburger">
        <FaBars />
      </div>
    </nav>
    </>
  );
};

export default Navbar;