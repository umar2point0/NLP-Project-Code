import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#teacher">Teacher Panel</a>
        <a href="#records">Records</a>
        <a href="#about">About Us</a>
        <div className="search-container">
          <input type="text" placeholder="Search" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;