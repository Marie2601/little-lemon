import React from 'react'
import './App.css'
import reservation from './Images/reservation.jpg';


const BookingPageHeader = () => {
  return (
    <div className="BookingHeader">
      <div className="Text-Container-Booking">
      <h1 className="Title">Booking Reservation</h1>
      <h2 className="Subtitle">Book your table in just a few clicks</h2>
      </div>
    <img src={reservation} name="reservation" className="Reservation" alt="reservation" />
    </div>
  )
}

export default BookingPageHeader