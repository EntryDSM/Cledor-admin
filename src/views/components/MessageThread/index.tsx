import * as React from 'react';
import { Component, Username, Message, ChatedAt } from './style';
import { formatMillisecondFull } from '../../../utils';

interface MessageThreadProps {
  linkPath: string;
  username: string;
  message?: string;
  chatedAt: number;
}

const MessageThread: React.FunctionComponent<MessageThreadProps> = ({
  linkPath,
  username,
  message,
  chatedAt,
}) => {
  return (
    <Component to={linkPath}>
      <Username>{username}</Username>
      <Message>{message}</Message>
      <ChatedAt>{formatMillisecondFull(chatedAt)}</ChatedAt>
    </Component>
  );
};

export default MessageThread;
