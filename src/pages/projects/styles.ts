import styled from 'styled-components';

// * ---------------------------------------------------------------------- * //

export const ProjectsPageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  div.content {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
  }

  @media (max-width: 1450px) {
    div.content {
      display: flex;
      flex-direction: column;
      gap: 5rem;
    }
  }
`;
