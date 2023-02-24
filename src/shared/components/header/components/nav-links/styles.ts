import styled from 'styled-components';

// * ---------------------------------------------------------------------- * //

export const NavLinksWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

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

  @media (max-width: 1450px) {
    display: flex;
    flex-direction: column;
    align-items: initial;
    gap: 1.5rem;
    padding: 0;
    width: 100%;

    a {
      width: 80%;
      font-size: 2rem;
      padding: 0rem;
    }
  }
`;
