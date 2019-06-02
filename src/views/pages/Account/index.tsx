import * as React from 'react';
import { Route, RouteComponentProps, Redirect } from 'react-router';
import { Page, AccountSection, AccountWrapper } from './style';
import {
  RegisterFormContainer,
  LoginFormContainer,
  GreetingSection,
} from '../../components';
import { registerUser } from '../../../apis/auth';

export interface AccountProps extends RouteComponentProps {}

export interface AccountState {
  registerErrorMessage?: string;
  token?: string;
}

export default class Account extends React.Component<
  AccountProps,
  AccountState
> {
  constructor(props: AccountProps) {
    super(props);

    this.state = {};
  }

  private handleRegister = (
    email: string,
    password: string,
    username: string,
  ) => {
    registerUser({ email, password, username })
      .then(token => {
        sessionStorage.setItem('token', token);
        this.setState({ token });
      })
      .catch(error => {
        switch (error.response.status) {
          case 409:
            this.setState({
              registerErrorMessage: '이미 가입이 완료된 이메일입니다.',
            });
            break;
          default:
            this.setState({ registerErrorMessage: '문제가 발생했습니다.' });
        }
      });
  }

  private handleLogin = (email: string, password: string) => {
    console.log(email, password);
  }

  render() {
    const {
      match: { path },
    } = this.props;
    const { registerErrorMessage } = this.state;

    if (sessionStorage.getItem('token')) {
      return <Redirect to="/" />;
    }

    return (
      <Page>
        <GreetingSection />
        <AccountSection>
          <AccountWrapper>
            <Route
              exact
              path={`${path}/`}
              render={() => (
                <RegisterFormContainer
                  onSubmit={this.handleRegister}
                  loginPath={`${path}/login`}
                  errorMessage={registerErrorMessage}
                />
              )}
            />
            <Route
              path={`${path}/login`}
              render={() => (
                <LoginFormContainer
                  onSubmit={this.handleLogin}
                  registerPath={`${path}/`}
                />
              )}
            />
          </AccountWrapper>
        </AccountSection>
      </Page>
    );
  }
}
