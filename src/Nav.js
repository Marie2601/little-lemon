import logo from './Images/Logo.svg'
import './App.css';
import React, { useState } from "react";
import Hamburger from 'hamburger-react';

function Nav  ()  {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="Nav">

        <img src={logo} className="App-logo" alt="logo" />
        <ul className={`Links ${isOpen ? "active" : ""}`}>
            <li>
            <a href="/"  onClick={() => setIsOpen(false)}>Home</a>
            </li>
            <li >
            <a href="./Introduction.js" onClick={() => setIsOpen(false)}>About</a>
            </li>
            <li>
            <a href="/menu" onClick={() => setIsOpen(false)}>Menu</a>
            </li>
            <li>
            <a href="/reservations" onClick={() => setIsOpen(false)}>Reservations</a>
            </li>
            <li>
            <a href="/order" onClick={() => setIsOpen(false)}>Order online</a>
            </li>
            <li>
            <a href="/login" onClick={() => setIsOpen(false)}>Login</a>
            </li>
        </ul>

        <Hamburger className="Hamburger"
          toggled={isOpen}
          toggle={setIsOpen}
          size={24}
          duration={0.5}
          color="#333"
          rounded
          label="Toggle menu"
        />
        </nav>
    );
}

export default Nav




