import React, { useEffect, useState,useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginInputs = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
 
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('https://infosys-fms.onrender.com/genToken', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: username,
          password: password
        })
      });
      const data = await response.json();
      console.log('user:',data.userName);
      console.log('role:',data.role);
      console.log('Token:', data.token);
      localStorage.setItem('token', data.token);
      localStorage.setItem('isLoggedIn', true);
      localStorage.setItem('role',data.role);

      if (data.role === 'user') {
        navigate('/userpage');
      }
       else if (data.role === 'admin') {
        navigate('/contact');
      }
       else {
        setError('Unknown user role');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('Username or password is wrong');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label id="text">Username</label><br/>
          <input id="userlabel" type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label id="text">Password</label><br/>
          <input id="passlabel" type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button id="signup-btn" type="submit">Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default LoginInputs;
