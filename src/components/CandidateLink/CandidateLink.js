import React, { Component } from 'react';
import './CandidateLink.css';

class CandidateLink extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      candidateLink: null,
      interviewerName: 'Shaniah'
     }
  }

  componentWillMount() {
    fetch('http://localhost:3001/authorize/calendar', 
    { credentials: 'include' })
      .then( res => {
        let clone = res.clone()
        return clone.json()
      })
      .then( data => {
        console.log(data);
        this.setState({ candidateLink: data.calendarUrl });
      })
  }

  copyTxt = () => {
    // do something later
  }
  
  
  render() {
    return (
      <div className='link-container'>
        <h2>Welcome <span className='interviewer-name'>{ this.state.interviewerName }</span></h2>
        <p className='instructions'>Click the copy button to copy a link and paste it into an email to send to your interview candidate.</p>
        <div className='box-plus-btn'>
          <div className='link-box' type='text'>
            { this.state.candidateLink }
          </div>
          <button className='copy-btn' onClick={ this.copyTxt }>copy</button>
        </div>
      </div>
    )
  }
}

export default CandidateLink;
