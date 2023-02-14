import styled from 'styled-components';

// * ------------------------------------------------------------------------------------------ * //

export const HamburgerIconWrapper = styled.div`
  display: none;

  input {
    display: none;
    visibility: hidden;
    position: absolute;
  }

  label {
    display: block;
    position: relative;
    flex-direction: column;
    justify-content: space-between;

    cursor: pointer;
    background-color: transparent;

    height: 1.375rem;
    width: 1.875rem;
  }

  label span {
    display: block;
    position: absolute;
    background-color: ${props => props.theme['secondary02']};
    border-radius: 2rem;
    width: 100%;
    height: 5px;
    transition: all 0.2s;
  }

  span.hamburger-first-line {
    top: 0;
  }

  span.hamburger-second-line {
    top: 8px;
  }

  span.hamburger-third-line {
    top: 16px;
  }

  #hamburger-checkbox:checked + label span.hamburger-first-line {
    transform: rotate(-45deg);
    transition: all 0.2s;
    top: 0.5rem;
  }

  #hamburger-checkbox:checked + label span.hamburger-second-line {
    visibility: hidden;
    transition: all 0.1s;
  }

  #hamburger-checkbox:checked + label span.hamburger-third-line {
    transform: rotate(45deg);
    transition: all 0.2s;
    top: 0.5rem;
  }

  @media (max-width: 1450px) {
    display: block;

    input {
      display: block;
    }
  }
`;
