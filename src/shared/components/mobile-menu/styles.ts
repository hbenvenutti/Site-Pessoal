import styled from 'styled-components';

// * ------------------------------------------------------------------------------------------ * //

export const MobileMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  width: 100%;
  padding: 2rem;

  a {
    font-size: 2rem;
    width: 80%;
    padding: 0.5rem;
    border-top: 2px solid transparent;
    border-bottom: 2px solid transparent;
    transition: all 0.2s;
  }

  a.active,
  a:hover {
    color: ${props => props.theme['strong']};
    border-bottom: 2px solid ${props => props.theme['secondary02']};
    transition: all 0.1s;
  }
`;
