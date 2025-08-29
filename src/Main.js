// src/Main.js
import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';   
import Home from './Home.js';
import Introduction from './Introduction.js';
import BookingPage from './BookingPage.js';
import BookingForm from './BookingForm.js';

// Initial available times (same for all dates for now)
function initializeTimes () {
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
function updateTimes(state, action) {
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

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<Introduction />} />
      <Route
        path="/reservations"
        element={<BookingPage availableTimes={availableTimes} dispatch={dispatch} />}
      />
    </Routes>
  );
}

export default Main;
