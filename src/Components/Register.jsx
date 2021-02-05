import React, { useState } from "react";

export default function Register() {

	const [ email, setEmail ] = useState("");
	const [ password, setPassword ] = useState("");
	const [ passwordConfirm, setPasswordConfirm ] = useState("");

	function validateForm() { return email.length > 0 && password.length > 0;}
	function handleSubmit(e) {

	}

	return (
		<div className="register-container">
			<form action="/" method="POST">
				<div className="input-container">
					<label for="email"> Email </label>
					<input 
						id="email" 
						type="text" 
						name="email" 
						className="input"
						placeholder="email"
						value={email}
						onChange={e => setEmail(e.target.value)}
					></input>
				</div>
				<div className="input-container">
					<label for="password"> Password </label>
					<input 
						id="password" 
						type="text" 
						name="password" 
						className="input"
						placeholder="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
					></input>
				</div>
				<div className="input-container">
					<label for="password-confirm"> Confirm Password</label>
					<input
						id="password-confirm"
						type="password"
						name="password-confirm"
						className="input"
						placeholder="confirm password"
						value={passwordConfirm}
						onChange={e => setPasswordConfirm(e.target.value)}
					></input>
				</div>
				<button type="button" disabled={!validateForm()} onChange={handleSubmit}>Register</button>
			</form>
		</div>
	)
}
