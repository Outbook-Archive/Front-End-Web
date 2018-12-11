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
    this.handleFormData = this.handleFormData.bind(this);
  }

  validateEmail(email) {
    var emailText = this.state.email;

    var pattern = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;

    if (pattern.test(emailText)) {
      return true;
    } else {
      return false;
    }
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

  handleFormData() {
    console.log(this.state)

    if (this.state.name == null) {
      alert("Please enter a full name")
    }
    let validEmail = this.validateEmail(this.state.email)
    if (!validEmail) {
      alert("Please enter a valid email address")
    }

    if (this.state.phone == null) {
      alert("please enter a phone number")
    } else if (!typeof(Number(this.state.phone)) == Number) {
        alert("Enter a valid number")
    } else if ((this.state.phone).length != 10) {
      alert("Enter a valid number")
    }
  }


  render() {
    console.log(this.props)
    return(
      <div className='confirmation-container'>
        <div className="confirm-selected-time">
          <p className="confirm-day">{ this.props.day.day }</p>
          <p className="confirm-date">{ this.props.day.date }</p>
          <p className="confirm-time">
            {`${this.props.time.format.start} to ${this.props.time.format.end}`}
          </p>

        </div>

        <EmailForm  name={this.handleNameChange}
                    email={this.handleEmailChange}
                    phone={this.handlePhoneChange}
                    backBtn={this.props.backButton}
                    handleFrmData={this.handleFrmData}
                    id={this.props.time.event.id}
                    utc={this.props.time.event.start.dateTime}
        />
      </div>
    )
  }
}

export default Confirm;


function EmailForm (props) {
  return (
    <form className="confirm-form"
          method="POST"
          action="http://outbook-us.herokuapp.com/calendar/interviewer/5c0f445cd30a700016777112"
          target="_blank">
      <h1>Enter Your Information</h1>

      <div className="form-items">
        <div className={"form-name"}>
          <p className="form-title">Full Name *</p>
          <input className={"form-input"} placeholder="Jane Smith" name="fullName" type="text" onChange={props.name}></input>
        </div>
        <div className="form-email">
          <p className="form-title">Your email address *</p>
          <input className={"form-input"} placeholder="email@gmail.com" name="email" type="email" onChange={props.email}></input>
        </div>
        <div className="form-phone">
          <p className="form-title">Your phone number *</p>
          <input className={"form-input"} placeholder="5555555555" name="phoneNumber" onChange={props.phone}></input>
        </div>
      </div>
      <div className={"confirm-btns"}>
        <button className={"confirm-btn btn-grey"} onClick={ props.backBtn }>change</button>
        <button className={"confirm-btn btn-blue"}
                onClick={ props.handleFrmData }>
          confirm
        </button>
      </div>
      <input type="hidden" name="eventId" value={props.id}></input>
      <input type="hidden" name="startDateTime" value={props.utc}></input>

    </form>
  )
}
