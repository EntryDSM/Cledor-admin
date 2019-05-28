import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router';
import { registerUser, getUserToken } from '../../services';
import { InmemoryAccountRepository } from '../../data';
import { Page, AccountSection, AccountWrapper } from './style';
import {
  RegisterFormContainer,
  LoginFormContainer,
  GreetingSection,
} from '../../components';

export interface AccountProps extends RouteComponentProps {
  onLogin: (token: string) => void;
  accountRepository: InmemoryAccountRepository;
}

export interface AccountState {
  registerErrorMessage?: string;
  loginErrorMessage?: string;
}

export default class Account extends React.Component<
  AccountProps,
  AccountState
> {
  private handleRegister = (
    email: string,
    password: string,
    username: string,
  ) => {
    registerUser(this.props.accountRepository, {
      email,
      password,
      username,
    }).then(({ status, data: token }) => {
      if (status === 409) {
        this.setState({ registerErrorMessage: '이미 존재하는 이메일입니다.' });
      } else if (status === 201) {
        const { onLogin } = this.props;
        onLogin(token);
      }
    });
  }

  // TODO: 변경사항 커밋하고 이제 메시지 페이지 개발하셈
  // 데이터 구현 클래스부터 하고 근데 태민이한테 확인하셈 잘 짠거맞는지

  private handleLogin = (email: string, password: string) => {
    getUserToken(this.props.accountRepository, { email, password }).then(
      ({ status, data: token }) => {
        if (status === 400) {
          this.setState({
            loginErrorMessage: '아이디 비밀번호가 잘못되었습니다.',
          });
        } else if (status === 200) {
          const { onLogin } = this.props;
          onLogin(token);
        }
      },
    );
  }

  render() {
    const {
      match: { path },
    } = this.props;

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
