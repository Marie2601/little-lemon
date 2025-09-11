import React from 'react'
import './App.css'
import restauranfood from './Images/restauranfood.jpg';

const Header = () => {
  return (
    <div className="Header">
      <div className="Text-Container">
      <h1 className="Title">Little Lemon</h1>
      <h2 className="Subtitle">Chicago</h2>
      <p className="Description">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      <button className="Reserve-Button" aria-label="On Click">Reserve a Table</button>
      </div>
      <img src={restauranfood} name="restauranfood" className="Restaurantfood" alt="serving fingerfoods" aria-label="On Click"/>
    </div>
  )
}

export default Header