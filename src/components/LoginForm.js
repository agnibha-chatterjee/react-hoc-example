import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const marginForLabel = { margin: '10px' };
const marginForDiv = { margin: '10px' };

export default ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      dispatch({ type: 'LOGIN_SUCCESS' });
      history.push('/secret');
    } else {
      dispatch({ type: 'LOGIN_ERROR' });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={marginForDiv}>
        <label htmlFor='username' style={marginForLabel}>
          Username
        </label>
        <input
          type='text'
          id='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div style={marginForDiv}>
        <label htmlFor='password' style={marginForLabel}>
          Password
        </label>
        <input
          type='text'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button type='submit'>Login</button>
      </div>
    </form>
  );
};
