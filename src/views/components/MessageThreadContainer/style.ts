import styled, { css } from 'styled-components';

interface ComponentProps {
  isSelected: boolean;
}

export const Component = styled.div`
  padding: 20px;
  position: relative;
  font-size: 16px;
  cursor: pointer;
  background-color: #fff;

  &:hover {
    background-color: #eee;
  }

  ${({ isSelected }: ComponentProps) =>
    isSelected &&
    css`
      background-color: #ddd;
      &:hover {
        background-color: #ddd;
      }
    `}
`;

export const Username = styled.div`
  margin-bottom: 5px;
`;

export const Message = styled.div``;

export const ChatedAt = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 13px;
`;
