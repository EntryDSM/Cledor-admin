import * as React from 'react';
import {
  Component,
  GreetingContainer,
  GreetingHeading,
  GreetingContent,
  GreetingWrapper,
} from './style';

const GreetingSection: React.FC = () => (
  <Component>
    <GreetingWrapper>
      <GreetingContainer>
        <GreetingHeading>Welcome to Cledor Admin</GreetingHeading>
        <GreetingContent />
      </GreetingContainer>
    </GreetingWrapper>
  </Component>
);

export default GreetingSection;
