import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { Account, Messages } from './pages';
import { GlobalStyle } from './globalStyle';
import { User } from '../entities/user';
import { session } from '../apis/clientStorage';
import { getUserData } from '../apis/auth';

interface AppProps {}

interface AppState {
  token?: string;
  user?: User;
}

export default class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    const token = session.getToken();
    const user = session.getUser();

    this.state = {
      token,
      user,
    };

    if (token) {
      getUserData(token).then(user => {
        this.setState({ user });
      });
    }
  }

  private logout = () => {
    session.clear();
    this.setState({ token: undefined, user: undefined });
  }

  private setAuthData = (
    token: string,
    user: { email: string; username: string },
  ) => {
    session.setToken(token);
    session.setUser(user);
    this.setState({ token, user });
  }

  render() {
    const { token, user } = this.state;

    return (
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/account" />} />
          <Route
            path="/rooms"
            render={props => {
              if (!token || !user) {
                return <Redirect to="/account" />;
              }
              return (
                <Messages
                  {...props}
                  token={token}
                  user={user}
                  onLogout={this.logout}
                />
              );
            }}
          />
          <Route
            path="/account"
            render={props => (
              <Account
                {...props}
                setAuthData={this.setAuthData}
                token={token}
              />
            )}
          />
          <Route render={() => <div>404</div>} />
        </Switch>
      </Router>
    );
  }
}
