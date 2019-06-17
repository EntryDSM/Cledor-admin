import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router';
import {
  HeaderNavigationBar,
  MessengerArea,
  MessageThreadList,
} from '../../components';
import { Page, MessageMessengerFlexContainer } from './style';
import {
  ChatSocketContainer,
  getMessageThreads,
  getMessages,
} from '../../../apis/chat';
import { Message } from '../../../entities/message';
import { MessageThread } from '../../../entities/messageThread';
import { User } from '../../../entities/user';

interface MessagesProps extends RouteComponentProps {
  token: string;
  user: User;
  onLogout: () => void;
}

interface MessagesState {
  chatSocketContainer: ChatSocketContainer;
  rooms: {
    [room: string]: Message[];
  };
  messageThreads: MessageThread[];
  onlineAdminCount: number;
  isBottomOfMessageBoard: boolean;
}

export default class Messages extends React.Component<
  MessagesProps,
  MessagesState
> {
  constructor(props: MessagesProps) {
    super(props);

    this.state = {
      chatSocketContainer: new ChatSocketContainer(
        props.token,
        props.user.email,
        (message: Message) => {
          this.setState(prevState => {
            const messagesAtCurrentRoom = prevState.rooms[message.room]
              ? [...prevState.rooms[message.room], message]
              : [message];

            const messageThreads = [
              { room: message.room, latestMessage: message },
              ...prevState.messageThreads.filter(
                ({ room }) => room !== message.room,
              ),
            ];

            return {
              messageThreads,
              rooms: {
                ...prevState.rooms,
                [message.room]: messagesAtCurrentRoom,
              },
              isBottomOfMessageBoard: true,
            };
          });
        },
        (onlineAdminCount: number) => {
          this.setState({ onlineAdminCount });
        },
      ),
      rooms: {},
      messageThreads: [],
      onlineAdminCount: 0,
      isBottomOfMessageBoard: true,
    };
  }

  componentWillUnmount() {
    const { chatSocketContainer } = this.state;
    chatSocketContainer.disconnect();
  }

  appendPreviousMessages = (room: string, messages: Message[]) => {
    this.setState(prevState => {
      const messagesAtCurrentRoom = prevState.rooms[room]
        ? [...messages, ...prevState.rooms[room]]
        : messages;

      const isInitialMessagesOfRooms = !prevState.rooms[room];

      return {
        rooms: {
          ...prevState.rooms,
          [room]: messagesAtCurrentRoom,
        },
        isBottomOfMessageBoard: isInitialMessagesOfRooms,
      };
    });
  }

  requestPreviousMessages = async ({
    room,
    limit,
    startMillisecond,
  }: {
    room: string;
    limit: number;
    startMillisecond?: number;
  }) => {
    const { token } = this.props;

    const messages = await getMessages({
      room,
      limit,
      startMillisecond,
      token,
    });

    this.appendPreviousMessages(room, messages);
  }

  appendPreviousMessageThreads = (messageThreads: MessageThread[]) => {
    this.setState(({ messageThreads: prevMessageThreads }) => ({
      messageThreads: [...prevMessageThreads, ...messageThreads],
    }));
  }

  requestPreviousMessageThreads = async ({
    limit,
    startMillisecond,
  }: {
    limit: number;
    startMillisecond?: number;
  }) => {
    const { token } = this.props;

    const messageThreads = await getMessageThreads({
      limit,
      startMillisecond,
      token,
    });

    this.appendPreviousMessageThreads(messageThreads);
  }

  render() {
    const {
      match: { path },
      onLogout,
    } = this.props;
    const {
      rooms,
      onlineAdminCount,
      messageThreads,
      isBottomOfMessageBoard,
      chatSocketContainer,
    } = this.state;

    return (
      <Page>
        <HeaderNavigationBar
          serviceName="Project"
          currentAdmin={onlineAdminCount}
          onLogout={onLogout}
        />
        <MessageMessengerFlexContainer>
          <MessageThreadList
            messageThreads={messageThreads}
            basePath={path}
            requestPreviousMessageThreads={this.requestPreviousMessageThreads}
          />
          <Route
            path={`${path}/:room`}
            render={props => (
              <MessengerArea
                {...props}
                rooms={rooms}
                onSend={chatSocketContainer.sendMessage}
                requestPreviousMessages={this.requestPreviousMessages}
                isBottomOfBoard={isBottomOfMessageBoard}
              />
            )}
          />
        </MessageMessengerFlexContainer>
      </Page>
    );
  }
}
