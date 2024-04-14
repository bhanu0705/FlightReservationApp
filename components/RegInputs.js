
import React, { useRef, useState } from 'react';

const RegInputs = () => {
  //const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const username=useRef(null);
  const password=useRef(null);
  const confirmPassword=useRef(null);
 
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password.current.value !== confirmPassword.current.value) {
      setError('Passwords do not match');
      return;
    }

    console.log('Username:', username.current.value);
    console.log('Password: ', password.current.value);
    console.log('Confirm Password:', confirmPassword.current.value);
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label >Username</label><br></br>
        <input ref={username} id="userlabel" type="text" />
      </div>
      <div>
        <label >Password</label><br></br>
        <input ref={password} id="passlabel" type="current-password" />
      </div>
      <div>
        <label>Confirm Password</label><br></br>
        <input ref={confirmPassword} id="confirmpasslabel" type="current-password" />
      </div>
      
      {error && <div style={{ color: 'red' }}>{error}</div>}

      <button id="signup-btn" type="submit">Sign up</button>
    </form>
    </div>
  );
};

export default RegInputs;
