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
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    transition: all 0.1s;
  }

  a.active,
  a:hover {
    color: ${props => props.theme['strong']};
    border-bottom: 2px solid ${props => props.theme['secondary02']};
    transition: all 0.1s;
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

  div.selectors-wrapper {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  img.logo {
    width: 5rem;
    height: auto;
  }

  @media (max-width: 1450px) {
    padding: 2rem;
    justify-content: space-between;

    div.nav-links {
      display: none;
      justify-content: space-around;
      gap: 0;
    }

    div.selectors-wrapper {
      display: none;
    }
  }
`;
