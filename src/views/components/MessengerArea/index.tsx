import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import MessengerChatBar from '../../components/MessengerChatBar';
import MessageWrapper from '../../components/MessageWrapper';
import * as S from './style';
import { Message } from '../../../entities/message';

interface MessengerAreaProps extends RouteComponentProps<{ room: string }> {
  rooms: {
    [room: string]: Message[];
  };
  onSend: (message: {
    content: string;
    imageData?: File;
    room: string;
  }) => void;
  requestPreviousMessages: (arg: {
    room: string;
    limit: number;
    startMillisecond?: number;
  }) => Promise<void>;
  isBottomOfBoard: boolean;
}

export default class MessengerArea extends React.Component<MessengerAreaProps> {
  private scrollableBoard = React.createRef<HTMLDivElement>();
  private bottomOfBoard = React.createRef<HTMLDivElement>();

  constructor(props: MessengerAreaProps) {
    super(props);

    const {
      requestPreviousMessages,
      match: {
        params: { room },
      },
    } = props;

    requestPreviousMessages({ room, limit: 20 });
  }

  componentDidMount() {
    const { current } = this.scrollableBoard;
    if (current) {
      current.addEventListener('scroll', async () => {
        if (current.scrollTop === 0) {
          const {
            match: {
              params: { room },
            },
            rooms,
            requestPreviousMessages,
          } = this.props;

          if (rooms[room]) {
            const prevScrollPosition = current.scrollHeight;

            const startMillisecond = rooms[room]
              ? rooms[room][0].sendedAt
              : undefined;

            await requestPreviousMessages({
              room,
              startMillisecond,
              limit: 10,
            });

            const nextScrollPosition = current.scrollHeight;
            current.scrollTo(0, nextScrollPosition - prevScrollPosition);
          }
        }
      });
    }
  }

  componentDidUpdate({
    match: {
      params: { room: prevRoom },
    },
  }: MessengerAreaProps) {
    const {
      match: {
        params: { room },
      },
      rooms,
      isBottomOfBoard,
    } = this.props;

    if (isBottomOfBoard) {
      this.scrollToBottomOfBoard();
    }

    if (prevRoom !== room) {
      if (!rooms[room]) {
        const { requestPreviousMessages } = this.props;
        requestPreviousMessages({ room, limit: 20 });
      } else {
        this.scrollToBottomOfBoard();
      }
    }
  }

  private handleSend = (content: string, imageData?: File) => {
    const {
      match: {
        params: { room },
      },
      onSend,
    } = this.props;

    onSend({ content, imageData, room });
  }

  private scrollToBottomOfBoard = () => {
    const { current } = this.bottomOfBoard;
    if (current) {
      current.scrollIntoView();
    }
  }

  render() {
    const {
      match: {
        params: { room },
      },
      rooms,
    } = this.props;

    const wrappedMessages =
      rooms[room] &&
      rooms[room].map(
        ({ content, encodedImageData, isAdmin, _id, sendedAt }) => {
          return (
            <MessageWrapper
              key={_id}
              sendedAt={sendedAt}
              isAdmin={isAdmin}
              encodedImageData={encodedImageData}
              content={content}
            />
          );
        },
      );

    return (
      <S.MessengerArea>
        <S.MessageBoard ref={this.scrollableBoard}>
          {wrappedMessages}
          <S.BottomOfBoard ref={this.bottomOfBoard} />
        </S.MessageBoard>
        <MessengerChatBar send={this.handleSend} />
      </S.MessengerArea>
    );
  }
}
