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

  @media (max-width: 1450px) {
    display: none;
  }
`;
