import styled from 'styled-components';

// * ------------------------------------------------------------------------------------------ * //

export const MobileMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  gap: 1.5rem;

  width: 100%;
  padding: 2rem;

  animation-name: show-up;
  animation-duration: 1s;

  @keyframes show-up {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
`;
