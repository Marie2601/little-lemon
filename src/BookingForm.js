// src/BookingForm.js
import React, { useState, useEffect } from 'react';
import './App.css';
import wheelchair from './Images/wheelchair.png';
import { fetchAPI, submitAPI } from './api.js';

// Helper function to convert ISO date (yyyy-mm-dd) to dd-mm-yyyy if needed
function convertToDDMMYYYY(isoDate) {
  const [year, month, day] = isoDate.split("-");
  return `${day}-${month}-${year}`;
}

function BookingForm({ onSubmit, dispatch }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [availableTimes, setAvailableTimes] = useState([]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [location, setLocation] = useState('Inside');
  const [wheelchairAccessible, setWheelchairAccessible] = useState(false);
  const [formData, setFormData] = useState();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (date) {
      console.log("Fetching available times for date:", date);
      // Optionally format date if API requires dd-mm-yyyy
      const isoDate = new Date(date); // if fetchAPI expects yyyy-mm-dd
      const times = fetchAPI(isoDate)
      setAvailableTimes(times);
      setTime(times[0] || ''); // Select first available time
    }
  }, [date]);

  const handleDateChange = (e) => {
    setDate(e.target.value); // yyyy-mm-dd
  };

  const handleSubmit = (e) => {
    console.log("Submitting form...");
    e.preventDefault();

    const formData = {
      date,
      time,
      guests,
      occasion,
      location,
      wheelchairAccessible,
      firstName,
      lastName,
      email,
      comment,
    };

  onSubmit(formData);
  };


  return (
    <div className="BookingForm">
    <h1 className="Title-Booking">Book your table here</h1>
    <form onSubmit={handleSubmit}>

      <div className="Form-Field">
      <label htmlFor="guests">Number of guests</label>
      <input className="Dropdown"
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        required
      />
      </div>
      <br/>

      <div className="Form-Field">
      <label htmlFor="res-date">Choose date</label>
      <input className="Dropdown"
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
        required
      />
      </div>
      <br/>

      <div className="Form-Field">
      <label htmlFor="res-time">Choose time</label>
      <select className="Dropdown"
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>
      </div>
      <br/>

      <div className="Form-Field">
      <label htmlFor="location">Location</label>
      <select className="Dropdown"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        required
      >
        <option value="Inside">Inside</option>
        <option value="Outside">Outside</option>
      </select>
      </div>
      <br/>

      <div className="Form-Field">  
      <label htmlFor="wheelchair">Wheelchair Accessible</label>
      <div className="Checkbox-Label">
      <img src={wheelchair} className="Icon" 
          alt="wheelchair icon" 
          width="20px" 
          heigth="20px"
          checked={wheelchairAccessible}
          onChange={(e) => setWheelchairAccessible(e.target.checked)}/>
      <input type="checkbox" id="wheelchair" name="wheelchair" /><br/>
      </div>
      </div>

      <div className="Form-Field">
      <label htmlFor="occasion">Occasion</label>
      <select className="Dropdown"
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      >
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Engagement</option>
        <option>Other</option>
      </select>
      </div>
      <br/>

    <div className="Form-Field">  
    <label htmlFor="firstName">First Name</label>
    <input className="Text-Input" 
            type="text" 
            id="firstName" 
            name="firstName" 
            required 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}/><br/>
    </div>

    <div className="Form-Field">   
    <label htmlFor="lastName">Last Name</label>
    <input className="Text-Input" 
          type="text" 
          id="lastName" 
          name="lastName" 
          required 
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}/><br/>
    </div>    

    <div className="Form-Field">   
    <label htmlFor="email">Email</label>
    <input className="Text-Input" 
          type="email" 
          id="email" 
          name="email" 
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)} /><br/>
    </div>

    <div className="Form-Field">
    <label htmlFor="comment">Special Requests</label><br/>
    <textarea className="Comment" 
          id="comment" 
          name="comment" 
          rows="4" 
          cols="50" 
          placeholder="Let us know if you have any special requests"
          value={comment}
          onChange={(e) => setComment(e.target.value)}></textarea><br/>
    </div>

    <input className="Button" type="submit" value="Make Your Reservation" />
    </form>
    </div>
  );
}

export default BookingForm;


