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
  width: 75%;

  input {
    display: block;
    visibility: hidden;
    position: absolute;
    top: 300px;
  }

  label {
    flex: 1;
    display: flex;
    padding: 0.5rem 2rem;
    cursor: pointer;
  }

  input:checked + label {
    background-color: ${props => props.theme['secondary02']};
    cursor: default;
  }
`;
