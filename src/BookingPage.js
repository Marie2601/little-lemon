import React from 'react'
import BookingForm from './BookingForm.js'
import Nav from './Nav.js'
import Footer from './Footer.js'

function BookingPage({ availableTimes, dispatch }) {
    return (
     <>
        <Nav/>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        <Footer/>
     </>
    );
}

export default BookingPage