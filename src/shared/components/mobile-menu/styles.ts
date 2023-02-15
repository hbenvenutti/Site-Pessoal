import styled from 'styled-components';

// * ------------------------------------------------------------------------------------------ * //

export const MobileMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  width: 100%;
  padding: 2rem;

  animation-name: show-up;
  animation-duration: 1s;

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

  @keyframes show-up {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
