import React, { useState } from 'react';
import '../../css/signup.css'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom';


function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();


  function handleSubmit(event) {
    event.preventDefault();
    // Validate form input and submit the form if valid
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log(userCredential)
      navigate("/login")
    })
    .catch((err) => console.log(err))

  }

  return (
    <form className='signUpForm' onSubmit={handleSubmit}>
      <label className="signUpForm-label" htmlFor="username">Username:</label>
      <input
        className='signUpForm-input'
        type="text"
        id="username"
        value={username}
        onChange={event => setUsername(event.target.value)}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        className='signUpForm-input'
        type="email"
        id="email"
        value={email}
        onChange={event => setEmail(event.target.value)}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        className='signUpForm-input'
        type="password"
        id="password"
        value={password}
        onChange={event => setPassword(event.target.value)}
      />
      <br />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        className='signUpForm-input'
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={event => setConfirmPassword(event.target.value)}
      />
      <br />
      <button className="signUpForm-btn" type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpPage;
