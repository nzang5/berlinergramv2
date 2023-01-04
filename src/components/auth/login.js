import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/login.css'
import { auth } from '../../firebase'

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();


  function handleSubmit(event) {
    event.preventDefault();
    // Validate form input and submit the form if valid
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
      //Navigate to the home page if creds are valid
      navigate("/feedpage")
    })
    .catch((err) => console.log(err))
  }

  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <label className="loginForm-label" htmlFor="email">Email:</label>
      <input
        className="loginForm-input"
        type="email"
        id="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
        placeholder="Enter your email"
      />
      <br />
      <label className="loginForm-label" htmlFor="password">Password:</label>
      <input
        className="loginForm-input"
        type="password"
        id="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
        placeholder="Enter your password"
      />
      <br />
      <button className="loginForm-btn" type="submit">Log In</button>
    </form>
  );
}

export default LoginPage;
