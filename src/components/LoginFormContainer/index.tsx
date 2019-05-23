import * as React from 'react';
import {
  Button,
  AccountForm,
  AccountFormContainer,
  TextInput,
  AccountHeading,
  ToggleLink,
} from '..';

interface LoginFormContainerProps {
  onSubmit: (email: string, password: string) => void;
  registerPath: string;
}

const LoginFormContainer: React.FunctionComponent<LoginFormContainerProps> = ({
  onSubmit,
  registerPath,
}) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <AccountFormContainer>
      <AccountForm
        onSubmit={event => {
          event.preventDefault();
          onSubmit(email, password);
        }}
      >
        <AccountHeading>로그인</AccountHeading>
        <TextInput
          onChange={setEmail}
          value={email}
          placeholder="이메일"
          type="email"
          shouldFill={true}
        />
        <TextInput
          onChange={setPassword}
          value={password}
          placeholder="비밀번호"
          type="password"
          shouldFill={true}
        />
        <Button>Login</Button>
      </AccountForm>
      <ToggleLink to={registerPath}>
        계정을 가지고 계시지 않으신가요?
      </ToggleLink>
    </AccountFormContainer>
  );
};

export default LoginFormContainer;
