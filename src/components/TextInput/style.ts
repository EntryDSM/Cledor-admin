import styled, { css } from 'styled-components';
import { Theme } from '../../globalStyle';

interface ComponentProps {
  isError: boolean;
}

export const Component = styled.input`
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

  &::placeholder {
    color: ${Theme.MAIN_COLOR2};
  }
  &:focus {
    background-color: ${Theme.MAIN_COLOR4};
    border-color: ${Theme.MAIN_COLOR3};
  }

  ${({ isError }: ComponentProps) => {
    return (
      isError &&
      css`
        background-color: ${Theme.ERROR_COLOR1};
        border-color: ${Theme.ERROR_COLOR1};
        color: ${Theme.ERROR_COLOR2};
        &::placeholder {
          color: ${Theme.ERROR_COLOR2};
        }
      `
    );
  }}
`;
