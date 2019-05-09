import styled from 'styled-components';
import reactTextareaAutosize from 'react-textarea-autosize';
import upload_imagePng from '../../assets/upload_image.png';
import send_messagePng from '../../assets/send_message.png';
import { Theme } from '../../globalStyle';

export const Component = styled.div`
  padding: 20px 10px;
  background-color: ${Theme.MAIN_COLOR2};
  display: flex;
  align-items: center;
`;

export const MessageTextInput = styled(reactTextareaAutosize)`
  flex: 1;
  box-sizing: border-box;
  font-size: 15px;
  min-height: 30px;
  padding: 10px 20px;
  line-height: 20px;
  resize: none;
  outline: none;
  border: none;
  border-radius: 10px;
  background-color: #fff;

  &::placeholder {
    color: #777;
    font-size: 15px;
  }
`;

export const UploadImageButton = styled.button`
  width: 60px;
  height: 20px;
  border: none;
  background: none;
  background-image: url(${upload_imagePng});
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: center;
  outline: none;
`;

export const SendMessegeButton = styled.button`
  width: 60px;
  height: 20px;
  border: none;
  background: none;
  background-image: url(${send_messagePng});
  background-size: 20px 20px;
  background-repeat: no-repeat;
  background-position: center;
  outline: none;
  cursor: pointer;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const FileInputLabel = styled.label`
  width: 100%;
  height: 100%;
  display: block;
  cursor: pointer;
`;
