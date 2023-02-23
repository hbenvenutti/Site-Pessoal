import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: left;
  gap: 3.75rem;
  padding: 2.5rem;

  * {
    transition: color, background-color 0.5s;
  }

  @media (max-width: 1450px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;
