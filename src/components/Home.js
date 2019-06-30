import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
  return (
    <>
      <h1>Higher order component example</h1>
      <nav>
        <p>
          <Link to='/login'>Login page</Link>
        </p>
        <p>
          <Link to='/secret'>Secret page</Link>
        </p>
        <p>
          <Link to='/secret2'>Secret page 2</Link>
        </p>
      </nav>
    </>
  );
};
