import React from 'react';
import './App.css';
import Maria from './Images/smile-2072907_1280.jpg';
import Andrea from  "./Images/girl-4755130_1280.jpg";
import Ted from "./Images/beard-1845166_1280.jpg";
import Arthur from "./Images/man-1845259_1280.jpg";

function Testimonials () {
  return (
    <div className="Container-Testimonials">
        <h1 className="Title-Testimonial">What our customers say</h1>

        <div className="TestimonialsGrid">

        <div className="ContainerRating">
        <h6 className="Rating-Testimonials">⭐⭐⭐⭐⭐</h6>

         <div className="TopSection">
        <img src={Maria} className="Image-Testimonials" alt="smile" aria-label="On Click"/>
        <p className="Name-Testimonials">Maria</p>
        </div>

        <p className="Description-Testimonials">"Can’t get enough of the Lemon Tarte!"</p>
        </div>

        <div className="ContainerRating">
        <h6 className="Rating-Testimonials">⭐⭐⭐⭐</h6>

        <div className="TopSection">
        <img src={Andrea} className="Image-Testimonials" alt="woman" aria-label="On Click"/>
        <p className="Name-Testimonials">Andrea</p>
        </div>

        <p className="Description-Testimonials">"Would give 5 stars, but sometimes it is hard to get a table.."</p>
        </div>

        <div className="ContainerRating">
        <h6 className="Rating-Testimonials">⭐⭐⭐⭐⭐</h6>

        <div className="TopSection">
        <img src={Ted} className="Image-Testimonials" alt="man with beard" aria-label="On Click"/>
        <p className="Name-Testimonials">Ted</p>
        </div>

        <p className="Description-Testimonials">Best Italian food in town!</p>
        </div>

        <div className="ContainerRating">
        <h6 className="Rating-Testimonials">⭐⭐⭐⭐⭐</h6>

        <div className="TopSection">
        <img src={Arthur} className="Image-Testimonials" alt="older man" aria-label="On Click"/>
        <p className="Name-Testimonials">Arthur</p>
        </div>
        
        <p className="Description-Testimonials">"Had my wife's birthday celebration here. It was excellent!"</p>
        </div>
        </div>
    </div>
  )
}

export default Testimonials