import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Secret from './components/Secret';
import Store from './context/AuthContext';
import SecondSecretPage from './components/SecondSecretPage';

export default () => (
  <>
    <Router>
      <Switch>
        <Store>
          <Route path='/' exact component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/secret' component={Secret} />
          <Route path='/secret2' component={SecondSecretPage} />
        </Store>
      </Switch>
    </Router>
  </>
);
