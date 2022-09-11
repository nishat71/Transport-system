import React from 'react';
import "./HeroSection.css";
import { HiArrowCircleRight } from "react-icons/hi"
import { Link } from 'react-router-dom';
const HeroSection = () => {
    return (
        <div className='hero-area'>
            <div className='hero-container text-light '>
                <div className="hero-content-container">
                    <div className='align-items-center justify-content-center'>
                    <h1 className='h1weight'>Welcome To Bus<span className='text-danger'>Transport</span></h1>
                    <h2 className='text-danger mb-4 h1weight'>Easily Find Your Bus Route and seats  </h2>
                    <p className='text-justify text-light mb-4 pweight'>BusTransport Verso focuses on bus routes, timeslot and manage seats according to students per route.</p>
                    <button className='btn btn-danger rounded logout'><Link to={"/Cars"}className="text-decoration-none text-light" >Explore Bus Routes </Link><HiArrowCircleRight /> </button>
                    </div>
                  
                </div>
               
            </div>
        </div>
    );
};

export default HeroSection;