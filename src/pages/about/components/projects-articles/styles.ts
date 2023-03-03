import styled from 'styled-components';

// * ---------------------------------------------------------------------- * //

interface ButtonProps {
  isActive: boolean;
}

export const ProjectsArticlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  article {
    line-height: 200%;
  }

  div.buttons-wrapper {
    display: flex;
    justify-content: center;
    padding: 0 10%;
    width: 100%;
  }

  div.title {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;

// -------------------------------------------------------------------------- //

export const SelectArticleButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  padding: 0.5rem 1rem;
  cursor: ${props => (props.isActive ? 'default' : 'pointer')};
  width: 40%;

  font-weight: 700;
  color: ${props => props.theme['text']};

  background-color: ${props =>
    props.isActive ? props.theme['secondary'] : props.theme['card']};

  border: 0;
  border-radius: 0;

  transition: all 0.5s;

  svg {
    height: 2rem;
    width: 2rem;
  }
  img {
    height: 2rem;
    width: 2rem;
  }

  @media (max-width: 1450px) {
    width: 50%;
  }
`;

// -------------------------------------------------------------------------- //

export const LeftButton = styled(SelectArticleButton)`
  border-bottom-left-radius: 0px;
  border-top-left-radius: 100px;
`;

// -------------------------------------------------------------------------- //

export const RightButton = styled(SelectArticleButton)`
  border-top-right-radius: 100px;
  border-bottom-right-radius: 0;
`;
