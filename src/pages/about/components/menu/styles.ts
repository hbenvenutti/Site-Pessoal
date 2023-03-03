import styled from 'styled-components';

// * ---------------------------------------------------------------------- * //

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme['card']};
  border-bottom-left-radius: 100px;
  border-bottom-right-radius: 100px;
  overflow: hidden;
  width: 90%;

  input {
    display: block;
    visibility: hidden;
    position: absolute;
    top: 300px;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    padding: 0.5rem 2rem;
    cursor: pointer;
  }

  input:checked + label {
    background-color: ${props => props.theme['secondary']};
    cursor: default;
  }

  @media (max-width: 1450px) {
    width: 100%;

    label {
      font-size: 0.8rem;
      padding: 0.5rem 0.5rem;
    }
  }
`;
