
import React, { useState } from 'react';

const RegInputs = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Additional validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    // Submit the form data to the backend
    // You can make an API call here to register the user
    console.log('Username:', username);
    console.log('Password: ', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label >Username</label><br></br>
        <input id="userlabel" type="text" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label >Password</label><br></br>
        <input id="passlabel" type="current-password"  value={password} onChange={handlePasswordChange} />
      </div>
      <div>
        <label>Confirm Password</label><br></br>
        <input  id="confirmpasslabel" type="current-password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
      </div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <button id="signup-btn" type="submit">Sign up</button>
    </form>
    </div>
  );
};

export default RegInputs;
