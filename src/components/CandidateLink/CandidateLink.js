import React, { Component } from 'react';
import './CandidateLink.css';

class CandidateLink extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      candidateLink: null,
      interviewerName: 'Shaniah'
     }
  }

  componentWillMount() {
    fetch('http://outbook-us.herokuapp.com/authorize/calendar', 
    { credentials: 'include' })
      .then( res => {
        let clone = res.clone()
        return clone.json()
      })
      .then( data => {
        console.log(data);
        this.setState({
          isLoggedIn: true,
          candidateLink: data.calendarUrl,
          interviewerName: data.interviewerName
         });
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
        <h2>Welcome <span className='interviewer-name'>{ this.state.interviewerName }</span></h2>
        <p className='instructions'>Click the copy button to copy a link and paste it into an email to send to your interview candidate.</p>
        <div className='box-plus-btn'>
          <input
              className='link-box'
              ref={ (textarea) => this.textArea = textarea}
              value={ this.state.candidateLink }>
          </input>
          <button className='copy-btn' onClick={ this.copyToClipboard }>copy</button>
        </div>
      </div>
    )
  }
}

export default CandidateLink;
