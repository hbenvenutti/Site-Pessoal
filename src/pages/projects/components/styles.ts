import styled from 'styled-components';

// * ---------------------------------------------------------------------- * //

const ProjectElementWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 100%;
  height: 37.5rem;

  padding: 2rem;
  overflow: hidden;

  transition: all 0.5s;

  &:hover {
    padding: 0rem;

    transition: all 0.5s;
  }

  a {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    width: 50%;
    padding: 0.5rem;

    svg {
      height: 1.5rem;
      width: auto;
    }
  }

  a.see-live-button {
    background-color: ${props => props.theme['liveButtonBackground']};
    color: ${props => props.theme['liveButtonText']};
    border-radius: 3.125rem;
    font-weight: 700;
  }

  article {
    display: flex;
    text-align: justify;
    align-items: center;
    max-width: 25rem;
    height: 12.5rem;
  }

  div.links {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  div.tech-list {
    display: flex;
    font-size: 2rem;
    gap: 0.5rem;
    width: 100%;
    justify-content: center;
    padding: 0.5rem;

    border-bottom: solid 2px white;

    svg {
      cursor: help;
      height: 2rem;
      width: auto;
    }
  }

  img {
    width: 100%;
  }

  // *** --- Mobile ----------------------------------------------------- *** //
  @media (max-width: 1450px) {
    height: auto;

    article {
      height: auto;
    }
  }
`;

// * ---------------------------------------------------------------------- * //

export { ProjectElementWrapper };
