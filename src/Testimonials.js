import React from 'react';
import './App.css';
import Maria from './Images/smile-2072907_1280.jpg';
import Andrea from  "./Images/girl-4755130_1280.jpg";
import Ted from "./Images/beard-1845166_1280.jpg";
import Arthur from "./Images/man-1845259_1280.jpg";

function Testimonials () {
  return (
    <div>
        <h1 className="Title">Testimonials</h1>
        <h6 className="Rating">5/5</h6>
        <img src={Maria} className="Image" alt="smile" />
        <p className="Name">Maria</p>
        <p className="Description">"Can’t get enough of the Lemon Tarte!"</p>
        <h6 className="Rating">4.8/5</h6>
        <img src={Andrea} className="Image" alt="woman" />
        <p className="Name">Andrea</p>
        <p className="Description">"Would give 5 stars, but sometimes it is hard to get a table.."</p>
        <h6 className="Rating">5/5</h6>
        <img src={Ted} className="Image" alt="man with beard" />
        <p className="Name">Ted</p>
        <p className="Description">Best Italian food in town!</p>
        <h6 className="Rating">5/5</h6>
        <img src={Arthur} className="Image" alt="older man" />
        <p className="Name">Arthur</p>
        <p className="Description">"Had my wife's birthday celebration here. It was excellent!"</p>
    </div>
  )
}

export default Testimonials