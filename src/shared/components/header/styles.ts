import styled from 'styled-components';

// * ------------------------------------------------------------------------------------------ * //

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;

  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 6.75rem;

  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-right: 10rem;
  padding-left: calc(2.5rem + 2.75rem + 20rem);

  border-bottom: 1px solid ${props => props.theme['secondary02']};

  background-color: ${props => props.theme['background']};

  a {
    padding: 0.5rem;
    border-bottom: 2px solid transparent;
  }

  a.active {
    color: ${props => props.theme['strong']};
    border-bottom: 2px solid ${props => props.theme['secondary02']};
  }

  div.nav-links {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  div.logo-wrapper {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  img.logo {
    width: 5rem;
    height: auto;
  }
`;
