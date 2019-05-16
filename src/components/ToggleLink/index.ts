import styled from 'styled-components';
import { Theme } from '../../globalStyle';
import { Link } from 'react-router-dom';

const ToggleLink = styled(Link)`
  width: 400px;
  color: ${Theme.MAIN_COLOR3};
  display: block;
  font-size: 16px;
  margin: 20px auto 0;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    font-weight: bold;
  }
`;

export default ToggleLink;
