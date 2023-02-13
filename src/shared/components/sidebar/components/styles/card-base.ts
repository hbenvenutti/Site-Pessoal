import styled from 'styled-components';

// * ------------------------------------------------------------------------------------------ * //

export const cardBase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;

  border: solid 1px ${props => props.theme['secondary01']};
  border-radius: 6px;
  background-color: ${props => props.theme['card']};
  background-clip: padding-box;
  padding: 25px;

  transition: box-shadow 0.1s;

  &:hover {
    box-shadow: 0px 0px 30px 5px ${props => props.theme['secondary01']};
    outline: solid 1px ${props => props.theme['secondary01']};

    transition: box-shadow 0.1s;

    img {
      box-shadow: 0px 0px 30px 0px ${props => props.theme['primary01']};
    }
  }
`;
