import styled from 'styled-components';

// * ---------------------------------------------------------------------- * //

const ProjectElementWrapper = styled.div`
  display: flex;
  flex-direction: column;

  border: 1px solid ${props => props.theme['secondary02']};
  width: 33%;
  justify-content: center;
  align-items: center;

  padding: 2rem;

  transition: all 0.2s;

  img {
    width: 100%;
  }

  &:hover {
    padding: 1rem;

    transition: all 0.2s;
  }
`;

// * ---------------------------------------------------------------------- * //

export { ProjectElementWrapper };
