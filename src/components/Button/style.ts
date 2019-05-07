import styled from 'styled-components';
import { Theme } from '../../globalStyle';

export const Component = styled.button`
  display: block;
  width: 100%;
  height: 65px;
  font-size: 25px;
  color: ${Theme.MAIN_COLOR5};
  background-color: #fff;
  border-radius: 10px;
  box-shadow: ${Theme.DEFAULT_SHADOW};
  cursor: pointer;
  transition: 0.3s box-shadow;

  &:hover {
    box-shadow: ${Theme.HOVER_SHADOW};
  }
  &:active {
    box-shadow: none;
  }
  &:focus {
    border: 2px solid ${Theme.MAIN_COLOR3};
    box-shadow: ${Theme.HOVER_SHADOW};
  }
`;
