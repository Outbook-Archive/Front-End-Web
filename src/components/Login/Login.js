import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
	render() {
		return (
			<div className='login-container'>
				<form className='form-container'>
					<form-header className='form-header'>
						<h1>Login in with Microsoft Account</h1>
					</form-header>

					<form-content>
						<form className='form-content'>
							{/* EMAIL */}
							<form-group className='form-group'>
								<label for="email">Email</label>
								<input className='input-color' type="text" id="email" name="email" required />
							</form-group>

							{/* PASSWORD */}
							<form-group className='form-group'>
								<label for="password">Password</label>
								<input className='input-color' type="text" id="password" name="password" required />
							</form-group>

							{/* CHECKBOX */}
							<form-group className='form-group'>
								<div className='remember-box'>
                  <input className='remember-checkbox' type="checkbox" />
                  <label className="form-remember">Remember me</label>
								</div>
								<a className='forgot' href="/landing">Forgot password</a>
							</form-group>

							<form-group className='form-group'>
								<button className='btn-submit' type="submit">Log In</button>
							</form-group>

						</form>
					</form-content>
				</form>
			</div>
		)
	}
}

export default Login;