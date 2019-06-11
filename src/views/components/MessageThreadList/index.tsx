import * as React from 'react';
import { MessageThread as Entity } from '../../../entities/messageThread';
import { MessageThread } from '..';
import * as S from './style';
import { toUrl } from '../../../utils/convertEmailAndUrl';

interface MessageThreadListProps {
  messageThreads: Entity[];
  basePath: string;
  requestPreviousMessageThreads: (arg: {
    startMillisecond?: number;
    limit: number;
  }) => Promise<void>;
}

export default class MessageThreadList extends React.Component<
  MessageThreadListProps
> {
  private scrollableList = React.createRef<HTMLDivElement>();

  constructor(props: MessageThreadListProps) {
    super(props);

    const { requestPreviousMessageThreads } = props;
    requestPreviousMessageThreads({ limit: 15 });
  }

  componentDidMount() {
    const { current } = this.scrollableList;
    if (current) {
      current.addEventListener('scroll', async () => {
        if (current.scrollTop + current.clientHeight === current.scrollHeight) {
          const { messageThreads, requestPreviousMessageThreads } = this.props;

          if (messageThreads.length > 0) {
            const startMillisecond =
              messageThreads[messageThreads.length - 1].latestMessage.sendedAt;

            await requestPreviousMessageThreads({
              startMillisecond,
              limit: 10,
            });
          }
        }
      });
    }
  }

  render() {
    const { messageThreads, basePath } = this.props;

    const wrappedMessageThreads = messageThreads.map(
      ({ room, latestMessage: { content, sendedAt } }) => (
        <MessageThread
          key={room}
          linkPath={`${basePath}/${toUrl(room)}`}
          message={content}
          roomName={room}
          chatedAt={sendedAt}
        />
      ),
    );

    return (
      <S.MessageThreadList ref={this.scrollableList}>
        {wrappedMessageThreads}
      </S.MessageThreadList>
    );
  }
}
