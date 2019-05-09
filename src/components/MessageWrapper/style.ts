import styled, { css } from 'styled-components';
import { Theme } from '../../globalStyle';

export const MessageCover = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: flex-start;
`;

export const StyledImage = styled.img`
  max-width: 250px;
`;

export const MessageBubble = styled.div`
  max-width: 250px;
  padding: 10px;
  background-color: #ddd;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const TextLine = styled.p`
  margin: 0;
`;

export const MessageTime = styled.div`
  font-size: 10px;
  color: #aaa;
  padding: 5px;
  box-sizing: border-box;
  display: inline-block;
`;

interface ComponentProps {
  authorMe: boolean;
}

export const Component = styled.div`
  ${({ authorMe }: ComponentProps) =>
    authorMe &&
    css`
      ${MessageCover} {
        flex-direction: row-reverse;
      }

      ${MessageBubble} {
        background-color: ${Theme.MAIN_COLOR5};
        color: #fff;
        border-top-left-radius: 10px;
        border-top-right-radius: 0;
      }
    `}
`;
