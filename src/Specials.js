import React from 'react';
import './App.css';
import GreekSalad from './Images/greek salad.jpg';
import Bruschetta from './Images/bruschetta.jpg';
import LemonDessert from './Images/lemon dessert.jpg';

const Specials = () => {
  return (
    <div className="Specials">
        <h1 className="Specials-Title">This weeks specials!</h1>
        <article className="Specials-Item">
            <img src={GreekSalad} className="Specials-Item-Image" alt="Greek Salad" />
            <h2 className="Specials-Item-Title">Greek Salad</h2>
            <p className="Specials-Item-Description">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
            <p className="Specials-Item-Price">$12.99</p>
            <button className="Specials-Item-Button">Order a delivery</button>
        </article>
        <article className="Specials-Item">
            <img src={Bruschetta} className="Specials-Item-Image" alt="Bruschetta" />
            <h2 className="Specials-Item-Title">Bruschetta</h2>
            <p className="Specials-Item-Description">Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.  </p>
            <p className="Specials-Item-Price">$5.99</p>
            <button className="Specials-Item-Button">Order a delivery</button>
        </article>
        <article className="Specials-Item">
            <img src={LemonDessert} className="Specials-Item-Image" alt="Lemon Dessert" />
            <h2 className="Specials-Item-Title">Lemon Dessert</h2>
            <p className="Specials-Item-Description">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. </p>
            <p className="Specials-Item-Price">$5.00</p>
            <button className="Specials-Item-Button">Order a delivery</button>
        </article>
    </div>
  )
}

export default Specials