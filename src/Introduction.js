import React from 'react';
import './App.css';
import Adrian from './Images/man-8128287_1280.jpg';
import Mario from './Images/man-890885_1280.jpg';

function About () {
  return (
    <div className="About">
        <div className="Container-Text">
        <h1 className="Title-About">Little Lemon</h1>
        <h2 className="Subtitle-About">Chicago</h2>
        <p className="Description-About">Two Italian brothers, Adrian and Mario, grew up in the heart of Chicago, raised on their Nonna’s recipes and the rich traditions of their heritage. With a deep love for food and community, they opened Little Lemon, a cozy neighborhood restaurant that brings a fresh twist to classic Italian cuisine. Known for its warm atmosphere and bold, citrus-inspired flavors, Little Lemon quickly became a local favorite.</p>
        </div>

        <div className="Container-Pictures">
        <img src={Adrian} name="Adrian" className="Image-Adrian" alt="man" aria-label="On Click" />
        <img src={Mario} name="Mario" className="Image-Mario" alt="chef" aria-label="On Click"/>
        </div>
    </div>
  )
}

export default About