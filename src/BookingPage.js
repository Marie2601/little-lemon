import React from 'react'
import BookingForm from './BookingForm.js'
import Nav from './Nav.js'
import Footer from './Footer.js'
import BookingPageHeader from './BookingPageHeader.js'

function BookingPage({ availableTimes, dispatch, onSubmit }) {
    return (
     <>
        <Nav/>
        <BookingPageHeader/>
        <BookingForm 
            availableTimes={availableTimes} 
            dispatch={dispatch}
            onSubmit={onSubmit} />
        <Footer/>
     </>
    );
}

export default BookingPage