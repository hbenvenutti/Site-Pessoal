import styled from 'styled-components';

// * ---------------------------------------------------------------------- * //

export const ThemeSelectorButtonWrapper = styled.div`
  display: block;

  div.selector {
    display: block;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    background-color: gray;
    border-radius: 100%;

    transition: all 0.5s;
  }

  label {
    display: flex;
    gap: 1rem;
    width: 100%;
    height: 100%;
    align-items: center;

    padding: 0.2rem 0.5rem;
    width: 4rem;
    height: 2rem;
    border-radius: 50px;
    background-color: white;

    transition: all 0.5s;
  }

  input {
    display: block;
    width: 100%;
    left: 100px;
    position: absolute;
    visibility: hidden;
  }

  svg.moon {
    color: yellow;
  }

  svg.sun {
    color: orange;
  }

  #theme-selector:checked + label div.selector {
    transform: translateX(1.5625rem);
  }

  #theme-selector:checked + label {
    background-color: ${props => props.theme['card']};
  }
`;
