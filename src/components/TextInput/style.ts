import styled from 'styled-components';
import { Theme } from '../../globalStyle';

export const Component = styled.div`
  margin-bottom: 20px;
`;

export const ErrorLabel = styled.div`
  margin-bottom: 10px;
  height: 13px;
  font-size: 13px;
  color: ${Theme.MAIN_COLOR2};
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  border-radius: 10px;
  font-size: 25px;
  padding: 20px;
  height: 65px;
  border: 2px solid;
  border-color: ${Theme.MAIN_COLOR4};
  background-color: ${Theme.MAIN_COLOR4};
  color: #fff;
  transition: 0.1s;

  &::placeholder {
    color: ${Theme.MAIN_COLOR2};
  }
  &:focus {
    background-color: ${Theme.MAIN_COLOR4};
    border-color: ${Theme.MAIN_COLOR3};
  }
`;
