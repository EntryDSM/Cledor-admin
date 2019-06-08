import socketIoClient from 'socket.io-client';
import { Message } from '../entities/message';
import { BASE_URL } from './endpoint';
import { getBase64 } from '../utils';
import { Event } from './events';

export class Chat {
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
}
