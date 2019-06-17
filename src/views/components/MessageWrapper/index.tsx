import * as React from 'react';
import {
  Component,
  MessageCover,
  TextLine,
  MessageTime,
  StyledImage,
  MessageBubble,
} from './style';
import { formatMillisecondFull } from '../../../utils/';

interface MessageWrapperProps {
  content?: string;
  sendedAt: number;
  isAdmin: boolean;
  encodedImageData?: string;
  onClickImage: (imageSrc: string) => void;
}

const MessageWrapper: React.FunctionComponent<MessageWrapperProps> = ({
  content,
  sendedAt,
  isAdmin,
  encodedImageData,
  onClickImage,
}) => {
  const formattedTime = formatMillisecondFull(sendedAt);

  const imageMessage = encodedImageData ? (
    <MessageCover>
      <StyledImage
        src={encodedImageData}
        onClick={onClickImage.bind(undefined, encodedImageData)}
      />
      <MessageTime>{formattedTime}</MessageTime>
    </MessageCover>
  ) : (
    ''
  );

  const textMessage = content ? (
    <MessageCover>
      <MessageBubble>
        {content.split('\n').map((line, index) => (
          <TextLine key={index}>{line}</TextLine>
        ))}
      </MessageBubble>
      <MessageTime>{formattedTime}</MessageTime>
    </MessageCover>
  ) : (
    ''
  );

  return (
    <Component authorMe={isAdmin}>
      {imageMessage}
      {textMessage}
    </Component>
  );
};

export default MessageWrapper;
