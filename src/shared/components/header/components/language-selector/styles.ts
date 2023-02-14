import styled from 'styled-components';

// * ------------------------------------------------------------------------------------------ * //

export const LanguageSelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3125rem;
  justify-items: center;

  img.flag {
    width: 2rem;
    height: 1rem;
    padding: 0;
  }

  select {
    cursor: pointer;
    border: 1px solid transparent;
    color: ${props => props.theme['title']};
    background-color: ${props => props.theme['background']};
    appearance: none;
  }

  svg {
    height: 1.5rem;
    width: 1.5rem;
    color: ${props => props.theme['secondary02']};
    transition: all 0.2s;
  }

  &:hover {
    svg {
      color: ${props => props.theme['secondary01']};
      transition: all 0.2s;
    }
  }

  @media (max-width: 1450px) {
    display: none;
  }
`;
