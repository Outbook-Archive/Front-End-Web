import React, { Component } from 'react';
import './CandidateLink.css';

class CandidateLink extends Component {

  componentWillMount() {
    fetch('http://outbook-us.herokuapp.com/authorize/calendar',
    { credentials: 'include' })
      .then( res => {
        let clone = res.clone()
        return clone.json()
      })
      .then( data => {
        // FIXME: check for 200 status
        this.props.handleLogin();

        if(data) {
          this.name =  "data.interviewerName"
          this.candidateLink = data.calendarUrl
        }
        
      })
  }

  copyToClipboard = (e) => {
    this.textArea.select();
    document.execCommand('copy');
    e.target.focus();
    alert("Copied the text: " + this.textArea.value);
  };

  render() {
    return (
      <div className='link-container'>
        <h2>Welcome <span className='interviewer-name'>{ this.name }</span></h2>
        <p className='instructions'>Click the copy button to copy a link and paste it into an email to send to your interview candidate.</p>
        <div className='box-plus-btn'>
          <input
              className='link-box'
              ref={ (textarea) => this.textArea = textarea}
              value={ this.candidateLink }>
          </input>
          <button className='copy-btn' onClick={ this.copyToClipboard }>copy</button>
        </div>
      </div>
    )
  }
}

export default CandidateLink;
