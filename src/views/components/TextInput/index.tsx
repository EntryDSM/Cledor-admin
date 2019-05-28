import * as React from 'react';
import { Component, StyledInput, ErrorLabel } from './style';
import { InputType, inputTagType, validateEmail } from '../../../services';

export interface TextInputProps {
  onChange: (text: string) => void;
  className?: string;
  type?: InputType;
  placeholder?: string;
  value?: string;
  shouldFill?: boolean;
}

enum ErrorMessage {
  VOID_VALUE = '필수 입력 값입니다',
  NOT_EMAIL_FORMAT = '이메일 형식으로 작성해주세요',
}

const TextInput: React.FunctionComponent<TextInputProps> = ({
  onChange,
  className,
  type = 'default',
  placeholder = '',
  value = '',
  shouldFill = false,
}) => {
  const checkValid = (): string => {
    if (shouldFill && !value) return ErrorMessage.VOID_VALUE;
    if (type === 'email' && value) {
      if (!validateEmail(value)) {
        return ErrorMessage.NOT_EMAIL_FORMAT;
      }
    }
    return '';
  };

  const handleOnchage = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => onChange(value);

  return (
    <Component>
      <ErrorLabel>{checkValid()}</ErrorLabel>
      <StyledInput
        onChange={handleOnchage}
        className={className}
        placeholder={placeholder}
        value={value}
        type={inputTagType(type)}
      />
    </Component>
  );
};

export default TextInput;
