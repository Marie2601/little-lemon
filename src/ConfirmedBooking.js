import React from 'react'
import './App.css'  
import logo2 from './Images/Logo2.d09eb2af6c5a2225eedf.png'

const ConfirmedBooking
 = () => {
  return (
    <div className="ConfirmedBooking">
        <h3 className="Confirmation">Confirmed Booking</h3>
        <p className="ConfirmationDescriotion">We confirm your booking in the Little Lemon Restaurant. We are happy to see you there! Mario & Adrian</p>
        <img src={logo2} alt="logo" className="Logo2" aria-label="On Click"/>
    </div>
  )
}

export default ConfirmedBooking;
