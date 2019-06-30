import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './LoginForm';
import { AuthContext } from '../context/AuthContext';

export default (props) => {
  const { state } = React.useContext(AuthContext);
  return (
    <>
      <h1>Login page</h1>
      <p>Username : user</p>
      <p>Password : password</p>
      <LoginForm {...props} />
      <p>
        <Link to='/secret'>Secret Page</Link>
      </p>
      <p>
        <Link to='/secret2'>Secret Page 2</Link>
      </p>
      <p>
        <Link to='/'>Back to home</Link>
      </p>
      {state.error && (
        <p style={{ color: 'red' }}>
          The login details are give on the page LMAO.
        </p>
      )}
    </>
  );
};
