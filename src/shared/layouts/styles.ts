import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: left;
  gap: 3.75rem;
  padding: 2.5rem;

  @media (max-width: 1450px) {
    flex-direction: column-reverse;
  }
`;
