import styled from 'styled-components';

interface ComponentProps {
  fontSize: string;
}

export const Component = styled.div`
  font-size: ${({ fontSize }: ComponentProps) => fontSize};
`;
