import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';   
import Home from './Home.js';
import Introduction from './Introduction.js';
import BookingPage from './BookingPage.js';
import BookingForm from './BookingForm.js';
import ConfirmedBooking from './ConfirmedBooking.js';
import { fetchAPI, submitAPI } from './api.js';
import Specials from './Specials.js';

export function initializeTimes(date) {
  return fetchAPI(date);
}


export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':

      return initializeTimes(action.date);
    default:
      return state;
  }
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    const result = await submitAPI(formData); 
    if (result === true) {
      navigate('/confirmation');  
    } else {

      console.error('Booking submission failed');
    }
  };


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Introduction />} />
      <Route
        path="/reservations"
        element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} onSubmit={submitForm} />}
      />
      <Route path="/confirmation" element={<ConfirmedBooking />} />
      <Route path="/menu" element={<Specials />} />
    </Routes>
  );
}

export default Main;
