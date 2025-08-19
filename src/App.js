import './App.css';
import Nav from './Nav.js';
import Footer from './Footer.js';
import Header from './Header.js';
import Specials from './Specials.js';
import Testimonials from './Testimonials.js';
import Introduction from './Introduction.js';
import React from 'react';


function App () {
  return (
    <div className="Container">
      <Nav/>
      <Header/>
      <Specials/>
      <Testimonials/>
      <Introduction/>
      <Footer/>
    </div>
  );
}

export default App;
