import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import 'https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css';

  body {
    margin: 0;
    font-family: 'NanumSquareRound', sans-serif;
  }
  div, input, button, form, a {
    box-sizing: border-box;
  }
  input, button {
    outline: none;
    border: none;
  }
`;

export enum Theme {
  MAIN_COLOR1 = '#daf4f4',
  MAIN_COLOR2 = '#b9e5e5',
  MAIN_COLOR3 = '#78c1c9',
  MAIN_COLOR4 = '#6ab6b6',
  MAIN_COLOR5 = '#4b8d8a',

  DEFAULT_SHADOW = '0 4px 10px 0 rgba(0, 0, 0, 0.5)',
  HOVER_SHADOW = '0 8px 20px 0 rgba(0, 0, 0, 0.3)',
}
