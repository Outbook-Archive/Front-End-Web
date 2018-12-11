import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { auth: null };
  }

  componentWillMount(){

    fetch('http://outbook-us.herokuapp.com/')
      .then(res => {
        return res.json();
      })
      .then( data => {
        this.setState({ auth: data.signInUrl });
      });
  }

  render() {
    return (
    	<div className='login-container'>
    	  <div className='form-container'>

    	    <h1 className='form-title'>Login with Microsoft account</h1>
    	    <button className='btn-submit' type="submit">
    	      <a className='btn-link' href={this.state.auth} >Sign in to Outlook</a>
    	    </button>

    	  </div>
    	</div>
    )
  }
}

export default Login;
