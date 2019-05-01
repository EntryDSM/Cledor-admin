import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login, Register, Messages } from './pages';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Messages} />
      <Route path="/login" exact component={Login} />
      <Route path="/register" exact component={Register} />
    </Router>
  );
};

export default App;
