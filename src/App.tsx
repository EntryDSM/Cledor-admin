import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Account, Messages } from './pages';

const App = () => {
  return (
    <Router>
      <Route path="/account" exact component={Account} />
      <Route path="/" exact component={Messages} />
    </Router>
  );
};

export default App;
