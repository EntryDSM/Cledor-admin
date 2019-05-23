import * as React from 'react';
import {
  Button,
  AccountForm,
  AccountFormContainer,
  TextInput,
  AccountHeading,
  ToggleLink,
} from '..';

interface RegisterFormContainerProps {
  onSubmit: (email: string, password: string, username: string) => void;
  loginPath: string;
}

const RegisterFormContainer: React.FunctionComponent<
  RegisterFormContainerProps
> = ({ onSubmit, loginPath }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [username, setUsername] = React.useState('');

  return (
    <AccountFormContainer>
      <AccountForm
        onSubmit={event => {
          event.preventDefault();
          onSubmit(email, password, username);
        }}
      >
        <AccountHeading>계정생성</AccountHeading>
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
        <TextInput
          onChange={setUsername}
          value={username}
          placeholder="이름"
          type="default"
          shouldFill={true}
        />
        <Button>Register</Button>
      </AccountForm>
      <ToggleLink to={loginPath}>이미 아이디를 가지고 계신가요?</ToggleLink>
    </AccountFormContainer>
  );
};

export default RegisterFormContainer;
