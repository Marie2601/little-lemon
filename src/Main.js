import React from 'react';
import { Routes, Route } from 'react-router-dom';   
import Home from './Home.js';
import Introduction from './Introduction.js';
import BookingPage from './BookingPage.js';


function Main() {
  return (
    <Routes>
      <Route path="/" element= {<Home />}/>
      <Route path="/about" element={<Introduction />} />
      <Route path="/reservations" element={<BookingPage />} />
         {/* Add other routes later like /menu, /reservations etc. */}
    </Routes>
    );
}

export default Main;