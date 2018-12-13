import React, { Component } from 'react';
import './CandidateLink.css';

class CandidateLink extends Component {

  copyTxt = () => {
    
  }

  render() {
    return (
      <div className='link-container'>
        <div className='link-box' type='text'>
          984rkjnkjfnf98qhgkqerf
        </div>
        <button className='copy-btn' onClick={this.copyTxt}>copy</button>
      </div>
    )
  }

}

export default CandidateLink;
