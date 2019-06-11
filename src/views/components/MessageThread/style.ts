import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Component = styled(NavLink)`
  display: block;
  width: 100%;
  padding: 20px;
  position: relative;
  font-size: 16px;
  cursor: pointer;
  background-color: #fff;
  color: #000;
  text-decoration: none;

  &:hover {
    background-color: #eee;
  }

  &.active {
    background-color: #ddd;
    &:hover {
      background-color: #ddd;
    }
  }
`;

export const RoomName = styled.div`
  margin-bottom: 5px;
`;

export const Message = styled.div``;

export const ChatedAt = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 13px;
`;
