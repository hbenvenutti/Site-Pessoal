import styled from 'styled-components';

// * ---------------------------------------------------------------------- * //

export const AboutPageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
  margin-top: -2.5rem;
  padding: 0 20rem;

  article {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    line-height: 150%;
    text-align: justify;
  }

  div.chapter {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 2rem;
  }

  h1 {
    display: flex;
    align-items: center;
  }

  span.title-tag {
    color: ${props => props.theme['primary']};
    font-size: 2rem;
    /* font-weight: 700; */
  }

  p {
    color: ${props => props.theme['articleText']};
    text-indent: 50px;
  }

  @media (max-width: 1450px) {
    width: 100%;
    padding: 0;
  }
`;
