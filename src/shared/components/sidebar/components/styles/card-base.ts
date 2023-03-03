import styled from 'styled-components';

// * ------------------------------------------------------------------------------------------ * //

export const cardBase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  border: solid 1px ${props => props.theme['secondary']};
  border-radius: 6px;
  background-color: ${props => props.theme['card']};
  background-clip: padding-box;
  padding: 25px;

  outline: solid 1px transparent;

  transition: all 0.5s;

  &:hover {
    box-shadow: 0px 0px 30px 5px ${props => props.theme['secondary02']};
    outline: ${props => props.theme['secondary02']};

    transition: all 0.5s;

    img {
      box-shadow: 0px 0px 30px 0px ${props => props.theme['primary']};
    }
  }
`;
