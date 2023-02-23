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
  color: ${props => (props.isActive ? props.theme['selector01'] : props.theme['selector02'])};

  background-color: ${props =>
    props.isActive ? props.theme['secondary02'] : props.theme['selector01']};

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
