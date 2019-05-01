import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Hello from './components/Hello';

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Hello} />
    </Router>
  );
};

export default App;
