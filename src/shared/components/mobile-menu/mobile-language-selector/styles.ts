import styled from 'styled-components';

// * ------------------------------------------------------------------------------------------ * //

export const MobileLanguageSelectorWrapper = styled.div`
  display: flex;
  height: 2rem;
  width: 80%;
  align-items: center;
  gap: 0.5rem;
  justify-items: center;
  font-size: 2rem;

  img.flag {
    width: 3rem;
    height: 2rem;
    padding: 0;
  }

  select {
    font-size: 2rem;
    cursor: pointer;
    border: 1px solid transparent;
    color: ${props => props.theme['title']};
    background-color: ${props => props.theme['background']};
    appearance: none;
  }

  svg {
    height: 2rem;
    width: auto;
    color: ${props => props.theme['secondary02']};
    transition: all 0.2s;
  }

  &:hover {
    svg {
      color: ${props => props.theme['secondary01']};
      transition: all 0.2s;
    }
  }
`;
