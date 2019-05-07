import * as React from 'react';
import { Component } from './style';

export interface ButtonProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  onClick,
  className,
  children = '',
}) => {
  return (
    <Component onClick={onClick} className={className}>
      {children}
    </Component>
  );
};

export default Button;
