import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
	render() {
		return (
			<div className='login-container'>
				<form className='form-container'>
					<form-header className='form-header'>
						<h1 className='form-title'>Login with Microsoft account</h1>
					</form-header>

					<form-content>
						<form className='form-content'>
							<form-group className='form-group'>
								<button className='btn-submit' type="submit">Sign in to Outlook</button>
							</form-group>
						</form>
					</form-content>
				</form>
			</div>
		)
	}
}

export default Login;