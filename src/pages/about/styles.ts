import styled from 'styled-components';

// * ---------------------------------------------------------------------- * //

export const AboutPageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 0 20rem;

  article {
    line-height: 150%;
    text-align: justify;
  }

  div.chapter {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  p {
    text-indent: 50px;
  }
`;
