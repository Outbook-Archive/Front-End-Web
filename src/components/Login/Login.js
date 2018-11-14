import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
	render() {
		return (
			<div className={'login-container'}>
				<form>
					<form-header>
						<h1>Login in with Microsoft Account</h1>
					</form-header>

					<form-content>
						<form>
							{/* EMAIL */}
							<form-group>
								<label for="email">Email</label>
								<input className='input-color' type="text" id="email" name="email" required />
							</form-group>

							{/* PASSWORD */}
							<form-group>
								<label for="password">Password</label>
								<input className='input-color' type="text" id="password" name="password" required />
							</form-group>

							{/* CHECKBOX */}
							<form-group>
								<div className='remember-box'>
                  <label className="form-remember">Remember Me</label>
                  <input type="checkbox" />
								</div>
								<a href="/landing">Forgot password?</a>
							</form-group>

							<form-group>
								<button type="submit">Log In</button>
							</form-group>

						</form>
					</form-content>
				</form>
			</div>
		)
	}
}

export default Login;