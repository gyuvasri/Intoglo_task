import React from 'react';
import './styles/navbar.css';

const Navbar = () => {
 return (
    <nav className="navbar">
      <div className="navbar-logo">My Docbox</div>
      <div className="navbar-links">
        <a href="#">Dashboard</a>
        <a href="#">Add Docbox</a>
      </div>
    </nav>
 );
};

export default Navbar;