import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Account, Messages } from './pages';
import { GlobalStyle } from './globalStyle';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Route path="/" exact component={Messages} />
      <Route path="/account" component={Account} />
    </Router>
  );
};

export default App;
