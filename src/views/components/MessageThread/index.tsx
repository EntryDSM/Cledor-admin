import * as React from 'react';
import { Component, RoomName, Message, ChatedAt } from './style';
import { formatMillisecondFull } from '../../../utils';

interface MessageThreadProps {
  linkPath: string;
  roomName: string;
  message?: string;
  chatedAt: number;
}

const MessageThread: React.FunctionComponent<MessageThreadProps> = ({
  linkPath,
  roomName,
  message,
  chatedAt,
}) => {
  return (
    <Component to={linkPath}>
      <RoomName>{roomName}</RoomName>
      <Message>{message}</Message>
      <ChatedAt>{formatMillisecondFull(chatedAt)}</ChatedAt>
    </Component>
  );
};

export default MessageThread;
