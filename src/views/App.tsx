import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Account, Messages } from './pages';
import { GlobalStyle } from './globalStyle';
import { User } from '../entities/user';

interface AppProps {}

interface AppState {
  token?: string;
  user?: User;
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {};
  }

  private setAuthData = (token: string, user: User) => {
    this.setState({ token, user });
  }

  render() {
    const { token } = this.state;

    return (
      <Router>
        <GlobalStyle />
        <Route path="/" exact component={Messages} />
        <Route
          path="/account"
          render={props => (
            <Account {...props} setAuthData={this.setAuthData} token={token} />
          )}
        />
      </Router>
    );
  }
}
