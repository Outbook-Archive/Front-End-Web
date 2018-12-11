import React from 'react';
import './CandidateLink.css';

function CandidateLink() {

  const containerStyle = {
    "marginTop": "10rem",
    "background-color": "red"
  }

  return (
    <div className='link-container'>
      <input placeholder="984rkjnkjfnf98qhgkqerf" style={containerStyle} className='link-input'></input>
      <button className='copy-btn'></button>
    </div>
  )
}

export default CandidateLink;
