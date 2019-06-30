import React from 'react';
import { AuthContext } from '../context/AuthContext';

export default (Component) =>
  class withAuth extends React.Component {
    static contextType = AuthContext;

    state = {
      isAuthenticated: this.context.state.isAuthenticated
    };

    render() {
      const { isAuthenticated } = this.state;
      if (!isAuthenticated) {
        return <p>You need to log in to view this page</p>;
      }
      return <Component {...this.props} />;
    }
  };
