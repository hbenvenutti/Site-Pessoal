import { createGlobalStyle } from 'styled-components';

// * ------------------------------------------------------------------------------------------ * //

export const GlobalStyle = createGlobalStyle`
  * {
    font-size: 1rem;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    &:disabled {
      cursor: not-allowed
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    font-size: 1rem;
    font-family: 'Montserrat', sans-serif;

    background-color: ${props => props.theme['background']};
    color: ${props => props.theme['text']};
  }

  h1 {
    font-size: 2rem;
  }
  
  h2 {
    font-size: 1.5rem;
  }

  h1, h2 {
    color: ${props => props.theme['title']};
  }

  strong {
    font-weight: 700;
  }

  @media (max-width: 500px) {
    html {
      font-size: 87%;
    }
  }
`;
