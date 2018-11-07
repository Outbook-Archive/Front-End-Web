/* src/components/Dashboard/Weather.js */
import React, { Component } from 'react'
import './Weather.css'
// require('dotenv').Config();

function Weather() {
  return (
    <div className='weather-container'>
      <span>your time</span>
      <svg width="40" height="40">
         <circle cx="20" cy="20" r="10" stroke="orange" stroke-width="3" fill="yellow"/>
         Sorry, your browser does not support inline SVG.
     </svg>
     <span>sunny</span>
    </div>
  )
}

export default Weather;
