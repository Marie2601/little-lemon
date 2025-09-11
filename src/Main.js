import React, { useReducer } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';   
import Home from './Home.js';
import Introduction from './Introduction.js';
import BookingPage from './BookingPage.js';
import BookingForm from './BookingForm.js';
import ConfirmedBooking from './ConfirmedBooking.js';
import { fetchAPI, submitAPI } from './api.js';
import Specials from './Specials.js';

// Initial available times (same for all dates for now)
export function initializeTimes () {
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];
}

// Reducer to update times (will become dynamic later)
export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      // For now, return same times regardless of action.date
      return initializeTimes();
    default:
      return state;
  }
}

function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = async (formData) => {
    const result = await submitAPI(formData);  // Assuming submitAPI returns a Promise<boolean>
    if (result === true) {
      navigate('/confirmation');  // Adjust the route to your confirmed page
    } else {
      // Optionally handle failure (e.g. show error message)
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
