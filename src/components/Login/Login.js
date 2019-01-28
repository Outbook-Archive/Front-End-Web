import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Login.css'

class Login extends Component {
  render() {
    return (
    	<div className='login-container'>
    	  <div className='form-container'>

    	    <h1 className='form-title'>Login with Microsoft account</h1>
    	    <button className='btn-submit' type="submit">
    	      <a className='btn-link' href={'http://localhost:3001/'} >Sign in to Outlook</a>
    	    </button>

    	  </div>
    	</div>
    )
  }
}

export default Login;
