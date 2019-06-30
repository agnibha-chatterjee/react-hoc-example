import React from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../hoc/withAuth';

export default withAuth(() => {
  return (
    <>
      <h1>Secret page</h1>
      <div>Secret Information</div>
      <p>Blah Blah Blah!</p>
      <p>
        <Link to='/login'>Back to login</Link>
      </p>
    </>
  );
});
