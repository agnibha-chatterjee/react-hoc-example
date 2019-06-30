import React from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../hoc/withAuth';

export default withAuth(() => (
  <>
    <h1>Secret Page 2</h1>
    <p>Super secret stuff</p>
    <p>.............</p>
    <p>.............</p>
    <p>.............</p>
    <p>.............</p>
    <Link to='/login'>Back to login</Link>
  </>
));
