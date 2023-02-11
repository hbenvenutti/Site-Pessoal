import { createGlobalStyle } from 'styled-components';

// * ------------------------------------------------------------------------------------------ * //

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &:disabled {
      cursor: not-allowed
    }
  }

  body {
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;

    background-color: ${props => props.theme['background']};
    color: ${props => props.theme['text']};
  }

  h1, h2 {
    color: ${props => props.theme['title']};
  }

  strong {
    font-weight: 700;
  }
`;
