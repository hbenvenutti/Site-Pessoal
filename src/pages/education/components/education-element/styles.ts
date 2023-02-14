import styled from 'styled-components';

// * ------------------------------------------------------------------------------------------ * //

export const EducationElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  border-bottom: 4px solid ${props => props.theme['secondary02']};
  border-radius: 0 0% 0 16px;
  padding: 2rem 0.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  p {
    flex: 1;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.75rem;
    height: 3rem;
    width: 3rem;

    border-radius: 100%;
    background-color: ${props => props.theme['secondary02']};
  }

  strong {
    color: ${props => props.theme['strong']};
  }

  svg {
    width: 100%;
    height: auto;
    color: ${props => props.theme['education_svg']};
  }
`;
