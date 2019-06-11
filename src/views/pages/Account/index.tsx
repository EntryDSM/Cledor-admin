import * as React from 'react';
import { Route, RouteComponentProps, Redirect } from 'react-router';
import { Page, AccountSection, AccountWrapper } from './style';
import {
  RegisterFormContainer,
  LoginFormContainer,
  GreetingSection,
} from '../../components';
import { registerUser, loginUser } from '../../../apis/auth';
import { User } from '../../../entities/user';

export interface AccountProps extends RouteComponentProps {
  token?: string;
  setAuthData: (token: string, user: User) => void;
}

export interface AccountState {
  registerErrorMessage?: string;
  loginErrorMessage?: string;
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
      .then(({ token, user }) => {
        const { setAuthData } = this.props;

        setAuthData(token, user);
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
    loginUser({ email, password })
      .then(({ token, user }) => {
        const { setAuthData } = this.props;

        setAuthData(token, user);
      })
      .catch(error => {
        switch (error.response.status) {
          case 401:
            this.setState({
              loginErrorMessage: '이메일 또는 비밀번호가 잘못되었습니다.',
            });
            break;
          default:
            this.setState({ loginErrorMessage: '문제가 발생했습니다.' });
        }
      });
  }

  render() {
    const {
      match: { path },
      token,
    } = this.props;
    const { registerErrorMessage, loginErrorMessage } = this.state;

    if (token) {
      return <Redirect to="/rooms" />;
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
                  errorMessage={loginErrorMessage}
                />
              )}
            />
          </AccountWrapper>
        </AccountSection>
      </Page>
    );
  }
}
