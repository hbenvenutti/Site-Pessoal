import styled from 'styled-components';

// * ------------------------------------------------------------------------------------------ * //

export const EducationElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0.5rem;
    height: 2.5rem;
    width: 2.5rem;

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
