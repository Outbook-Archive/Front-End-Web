import React, { Component } from 'react'
import './Confirm.css'

class Confirm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: null,
      email: null,
      phone: null
    }
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
  }

  handleNameChange(e) {
    console.log(e.target.value)
    this.setState({name: e.target.value})
  }
  handleEmailChange(e) {
    console.log(e.target.value)
    this.setState({email: e.target.value})
  }
  handlePhoneChange(e) {
    console.log(e.target.value)
    this.setState({phone: e.target.value})
  }
  render() {
    return(
      <div className={'confirmation-container'}>
        <div className={"confirm-selected-time"}>
          <p className={"confirm-day"}>{ this.props.day.day }</p>
          <p className={"confirm-date"}>{ this.props.day.date }</p>
          <p className={"confirm-time"}>{ this.props.time }</p>
        </div>

        <div className="confirm-form">
          <h1>Enter Your Information</h1>
            <div className="form-items">
              <div className={"form-name"}>
                <p className="form-title">Full Name *</p>
                <input className={"form-input"} placeholder="Jane Smith" name="_name" type="text" onChange={this.handleNameChange}></input>
              </div>
              <div className="form-email">
                <p className="form-title">Your email address *</p>
                <input className={"form-input"} placeholder="email@gmail.com" name="email" onChange={this.handleEmailChange}></input>
              </div>
              <div className="form-phone">
                <p className="form-title">Your phone number *</p>
                <input className={"form-input"} placeholder="5555555555" name="phone" onChange={this.handlePhoneChange}></input>
              </div>
            </div>
          </div>

        <div className={'confirm-btns'}>
          <button className={'confirm-btn btn-grey'} onClick={ this.props.backButton }>change</button>
          <button className={'confirm-btn btn-blue'} >confirm</button>
        </div>
      </div>
    )
  }
}

export default Confirm;
