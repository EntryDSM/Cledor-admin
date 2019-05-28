import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { InmemoryAccountRepository } from './data';
import { Account, Messages } from './pages';
import { GlobalStyle } from './globalStyle';

export interface AppProps {}

export interface AppState {
  token?: string;
  accountRepository: InmemoryAccountRepository;
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      accountRepository: new InmemoryAccountRepository(),
    };
  }

  private handleLogin = (token: string) => {
    this.setState({ token });
  }

  render() {
    return (
      <Router>
        <GlobalStyle />
        <Route path="/" exact component={Messages} />
        <Route
          path="/account"
          render={props => (
            <Account
              {...props}
              onLogin={this.handleLogin}
              accountRepository={this.state.accountRepository}
            />
          )}
        />
      </Router>
    );
  }
}
