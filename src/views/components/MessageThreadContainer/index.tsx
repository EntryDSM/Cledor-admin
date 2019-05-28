import * as React from 'react';
import { Component, Username, Message, ChatedAt } from './style';
import { formatDate } from '../../../services';

interface MessageThreadProps {
  isSelected?: boolean;
  username: string;
  message: string;
  chatedAt: number;
}

const MessageThread: React.FunctionComponent<MessageThreadProps> = ({
  isSelected = false,
  username,
  message,
  chatedAt,
}) => {
  return (
    <Component isSelected={isSelected}>
      <Username>{username}</Username>
      <Message>{message}</Message>
      <ChatedAt>{formatDate(chatedAt)}</ChatedAt>
    </Component>
  );
};

export default MessageThread;
