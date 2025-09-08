import logo from './Images/Logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import Hamburger from 'hamburger-react';
import { Link } from 'react-router-dom';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <nav className="Nav">

      <img src={logo} className="App-Logo" alt="logo" />

      <div className="HamburgerWrapper">
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          size={24}
          duration={0.5}
          color="#333"
          rounded
          label="Toggle menu"
        />

      </div>

      <ul className={`Links ${isOpen ? "active" : ""}`}>

        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>

        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>

        <li><Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link></li>

        <li><Link to="/reservations" onClick={() => setIsOpen(false)}>Reservations</Link></li>

        <li><Link to="/order" onClick={() => setIsOpen(false)}>Order</Link></li>

        <li><Link to="/login" onClick={() => setIsOpen(false)}>Login</Link></li>

      </ul>
    </nav>
  );
}

export default Nav;
