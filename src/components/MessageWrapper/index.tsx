import * as React from 'react';
import {
  Component,
  MessageCover,
  TextLine,
  MessageTime,
  StyledImage,
  MessageBubble,
} from './style';

interface MessageWrapperProps {
  content?: string;
  formatedSendedAt: string;
  isAuthorMe: boolean;
  encodedImageData?: string;
}

const MessageWrapper: React.FunctionComponent<MessageWrapperProps> = ({
  content,
  formatedSendedAt,
  isAuthorMe,
  encodedImageData,
}) => {
  const imageMessage = encodedImageData ? (
    <MessageCover>
      <StyledImage src={encodedImageData} />
      <MessageTime>{formatedSendedAt}</MessageTime>
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
      <MessageTime>{formatedSendedAt}</MessageTime>
    </MessageCover>
  ) : (
    ''
  );

  return (
    <Component authorMe={isAuthorMe}>
      {imageMessage}
      {textMessage}
    </Component>
  );
};

export default MessageWrapper;
