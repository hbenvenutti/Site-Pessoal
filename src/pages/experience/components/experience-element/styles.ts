import styled from 'styled-components';

export const ExperienceElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  border-bottom: 4px solid ${props => props.theme['secondary02']};

  border-radius: 0 0% 0 16px;

  padding: 2rem 0.5rem;

  a {
    transition: color 0.2s;
  }

  a:hover {
    color: ${props => props.theme['secondary02']};
    transition: color 0.2s;
  }

  article {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 0.75rem;
    text-align: justify;

    width: 70%;
    padding-top: 0.3rem;
  }

  div.item {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 0.5rem;
  }

  div.description {
    display: flex;
    width: 100%;
    align-items: flex-start;
    gap: 0.5rem;
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.75rem;

    background-color: ${props => props.theme['secondary02']};
    border-radius: 100%;
    height: 3rem;
    width: 3rem;
  }

  svg {
    cursor: help;
    color: ${props => props.theme['experience_svg']};
    width: 100%;
    height: 100%;
  }

  /* // *** --- Responsiveness ------------------------------------------------------------- ***  */
  @media (max-width: 700px) {
    a {
      flex: 1;
    }
  }
`;
