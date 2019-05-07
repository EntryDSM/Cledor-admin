import * as React from 'react';
import { Component } from './style';
import { InputType, inputTagType } from '../../service/convertToInputTagType';
import { validateEmail } from '../../service/validateEmail';

export interface TextInputProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: InputType;
  placeholder?: string;
  value?: string;
  shouldFill?: boolean;
}

const TextInput: React.FunctionComponent<TextInputProps> = ({
  onChange,
  className,
  type = 'default',
  placeholder = '',
  value = '',
  shouldFill = false,
}) => {
  const checkValid = (): boolean => {
    if (shouldFill) return !!value;
    if (type === 'email' && value) return validateEmail(value);
    return true;
  };

  return (
    <Component
      onChange={onChange}
      className={className}
      placeholder={placeholder}
      value={value}
      isError={!checkValid()}
      type={inputTagType(type)}
    />
  );
};

export default TextInput;
