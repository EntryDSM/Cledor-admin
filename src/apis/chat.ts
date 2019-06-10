import socketIoClient from 'socket.io-client';
import axios from 'axios';
import { Message } from '../entities/message';
import { MessageThread } from '../entities/messageThread';
import { BASE_URL } from './endpoint';
import { getBase64 } from '../utils';
import { Event } from './events';

export class ChatSocketContainer {
  private socket: SocketIOClient.Socket;
  constructor(
    token: string,
    private email: string,
    listenerOnReceiveMessage: (message: Message) => void,
    listenerOnChangeOnlineAdminCount: (onlineAdminCount: number) => void,
  ) {
    this.socket = socketIoClient(BASE_URL, { query: `auth_token=${token}` });

    this.socket.on(Event.RECEIVE_MESSAGE, listenerOnReceiveMessage);
    this.socket.on(Event.ONLINE_ADMIN_COUNT, listenerOnChangeOnlineAdminCount);
  }

  sendMessage({
    room,
    content,
    imageData,
  }: {
    room: string;
    content: string;
    imageData?: File;
  }) {
    if (imageData instanceof File) {
      getBase64(imageData).then(encodedImageData => {
        this.socket.emit(Event.SEND_MESSAGE, {
          room,
          content,
          encodedImageData,
          writer: this.email,
        });
      });
    } else {
      this.socket.emit(Event.SEND_MESSAGE, {
        content,
        room,
        writer: this.email,
      });
    }
  }

  disconnect() {
    this.socket.close();
  }
}

export const getMessageThreads = async ({
  token,
  limit,
  startMillisecond,
}: {
  token: string;
  limit: number;
  startMillisecond?: number;
}): Promise<MessageThread[]> => {
  const response = await axios.get<MessageThread[]>(
    `${BASE_URL}/message-threads`,
    {
      headers: {
        Authorization: token,
      },
      params: {
        startMillisecond,
        limit,
      },
    },
  );
  return response.data;
};

export const getMessages = async ({
  token,
  room,
  limit,
  startMillisecond,
}: {
  token: string;
  room: string;
  limit: number;
  startMillisecond?: number;
}): Promise<Message[]> => {
  const response = await axios.get<Message[]>(`${BASE_URL}/messages`, {
    headers: {
      Authorization: token,
    },
    params: {
      room,
      startMillisecond,
      limit,
    },
  });
  return response.data;
};
