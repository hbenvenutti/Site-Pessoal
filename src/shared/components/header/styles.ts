import styled from 'styled-components';

// * ---------------------------------------------------------------------- * //

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

  border-bottom: 1px solid ${props => props.theme['secondary']};

  background-color: ${props => props.theme['background']};

  transition: color, background-color 0.5s;

  div.nav-links {
    display: flex;
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

  span.logo {
    font-size: inherit;
    color: ${props => props.theme['primary']};
  }

  strong {
    font-size: 2rem;
    font-weight: 700;

    transition: all 0.5s;
  }

  // *** --- Mobile ----------------------------------------------------- *** //

  @media (max-width: 1450px) {
    padding: 2rem;
    justify-content: space-between;

    div.nav-links {
      display: none;
    }

    div.selectors-wrapper {
      display: none;
    }
  }
`;
