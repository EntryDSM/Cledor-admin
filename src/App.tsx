import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Account, Messages } from './pages';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Messages} />
      <Route path="/account" component={Account} />
    </Router>
  );
};

export default App;
