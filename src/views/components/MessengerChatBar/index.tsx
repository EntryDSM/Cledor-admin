import * as React from 'react';
import { Key } from 'ts-keycode-enum';
import {
  MessageTextInput,
  UploadImageButton,
  SendMessegeButton,
  HiddenFileInput,
  FileInputLabel,
  Component,
} from './style';

interface ChatBarProps {
  send: (content: string, imageData?: File) => void;
}

interface ChatBarState {
  content: string;
}

export default class ChatBar extends React.Component<
  ChatBarProps,
  ChatBarState
> {
  constructor(props: ChatBarProps) {
    super(props);

    this.state = {
      content: '',
    };
  }

  private get isEmptyContent(): boolean {
    const { content } = this.state;
    return !content;
  }

  private handleTextChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLTextAreaElement>): void => {
    this.setState({ content: value });
  }

  private handleTextKeyDown = (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ): void => {
    const { shiftKey, altKey, ctrlKey, keyCode } = event;
    if (
      keyCode === Key.Enter &&
      !(shiftKey || altKey || ctrlKey) &&
      !this.isEmptyContent
    ) {
      this.send();
      event.preventDefault();
    }
  }

  private send = (file?: File): void => {
    const { send } = this.props;
    const { content } = this.state;
    send(content.trim(), file);
    this.setState({ content: '' });
  }

  private handleUploadImage = ({
    target: { files },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    if (files && files.length > 0) {
      this.send(files[0]);
    }
  }

  private handleSendMessage = (): void => {
    this.send();
  }

  public render() {
    return (
      <Component>
        <UploadImageButton>
          <FileInputLabel htmlFor="upload-image" />
        </UploadImageButton>
        <HiddenFileInput
          type="file"
          id="upload-image"
          onChange={this.handleUploadImage}
        />
        <MessageTextInput
          placeholder="메시지를 입력해주세요"
          maxRows={6}
          value={this.state.content}
          onChange={this.handleTextChange}
          onKeyDown={this.handleTextKeyDown}
        />
        <SendMessegeButton onClick={this.handleSendMessage} />
      </Component>
    );
  }
}
