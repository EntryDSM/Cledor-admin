import styled from 'styled-components';
import { Theme } from '../../globalStyle';

export const Component = styled.div`
  height: 100%;
  flex-grow: 1;
  background-color: ${Theme.MAIN_COLOR2};
  display: table;
`;

export const GreetingWrapper = styled.div`
  display: table-cell;
  vertical-align: middle;
`;

export const GreetingContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const GreetingHeading = styled.h1`
  text-align: right;
  font-size: 60px;
`;

export const GreetingContent = styled.div``;
