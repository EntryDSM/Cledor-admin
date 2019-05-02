import * as React from 'react';
import {
  Page,
  GreetingSection,
  GreetingContainer,
  GreetingContent,
  AccountSection,
  AccountContainer,
} from './style';
import { Heading, TextInput, Button } from '../../components';

const Account: React.FunctionComponent = () => {
  return (
    <Page>
      <GreetingSection>
        <GreetingContainer>
          <Heading>Welcome!</Heading>
          <GreetingContent />
        </GreetingContainer>
      </GreetingSection>
      <AccountSection>
        <AccountContainer>
          <Heading>Register</Heading>
          <TextInput />
          <TextInput />
          <Button />
        </AccountContainer>
      </AccountSection>
    </Page>
  );
};

export default Account;
