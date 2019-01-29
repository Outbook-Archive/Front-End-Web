import React from 'react'
import { Route } from 'react-router-dom'
import './Complete.css'

function Complete(){
  return (
    <div className="complete-container">
      <Route path="/complete/success" component={Success}/>
      <Route path="/complete/failure" component={Failure}/>
    </div>
  )
}

function Success(){
  return (
    <div className="complete">
      <h1>Appointment Set</h1>
      <p>Your appointment has been set on Outlook.
      We're looking forward to meeting with you!</p>
    </div>
  )
}

function Failure(){
  return (
    <div className="complete">
      <h1>Something went wrong!</h1>
      <p>Errors have occured</p>
    </div>
  )
}

export default Complete
