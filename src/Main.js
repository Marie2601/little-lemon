import React from 'react';
import { Routes, Route } from 'react-router-dom';   
import Home from './Home.js';
import Introduction from './Introduction.js';


function Main() {
  return (
    <Routes>
      <Route path="/" element= {<Home />}/>
      <Route path="/about" element={<Introduction />} />
       {/* <Route path="/booking" element={<BookingPage />}></Route> */}
         {/* Add other routes later like /menu, /reservations etc. */}
    </Routes>
    );
}

export default Main;