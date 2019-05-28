import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router';
import { Page, AccountSection, AccountWrapper } from './style';
import {
  RegisterFormContainer,
  LoginFormContainer,
  GreetingSection,
} from '../../components';

export interface AccountProps extends RouteComponentProps {}

export default class Account extends React.Component<AccountProps> {
  constructor(props: AccountProps) {
    super(props);

    this.state = {};
  }

  private handleRegister = (
    email: string,
    password: string,
    username: string,
  ) => {
    console.log(email, password, username);
  }

  private handleLogin = (email: string, password: string) => {
    console.log(email, password);
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
