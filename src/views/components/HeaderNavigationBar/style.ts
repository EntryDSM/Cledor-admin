import styled from 'styled-components';
import { Theme } from '../../globalStyle';

export const Component = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${Theme.MAIN_COLOR3};
  display: flex;
  position: relative;
  color: #fff;
  font-weight: bolder;
`;

export const ServiceName = styled.div`
  flex-grow: 1;
  text-align: center;
  line-height: 50px;
  font-size: 20px;
`;

export const CurrentAdmin = styled.div`
  width: 200px;
  text-align: center;
  line-height: 50px;
  color: ${Theme.MAIN_COLOR5};
`;

export const PointSpan = styled.span`
  color: ${Theme.MAIN_COLOR1};
`;

export const LogoutButton = styled.button`
  width: 200px;
  background: none;
  font-size: 16px;
  color: inherit;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${Theme.MAIN_COLOR4};
  }
`;
