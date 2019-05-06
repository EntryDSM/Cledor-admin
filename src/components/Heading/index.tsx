import * as React from 'react';
import { Component } from './style';

type Size = 'big' | 'medium' | 'small';

export interface HeadingProps {
  className?: string;
  children: React.ReactNode;
  size?: Size;
}

const Heading: React.FunctionComponent<HeadingProps> = ({
  className,
  children,
  size = 'small',
}) => {
  const pixelBySize = (value: Size) => {
    switch (value) {
      case 'big':
        return '60px';
      case 'medium':
        return '40px';
      case 'small':
        return '25px';
    }
  };

  return (
    <Component className={className} fontSize={pixelBySize(size)}>
      {children}
    </Component>
  );
};

export default Heading;
