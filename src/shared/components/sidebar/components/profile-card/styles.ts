import styled from 'styled-components';

import { cardBase } from '../styles/card-base';

// * ---------------------------------------------------------------------- * //

export const ProfileCardWrapper = styled(cardBase)`
  align-items: center;

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 100%;
    border: 2px solid ${props => props.theme['secondary']};
    outline: solid 1px transparent;

    transition: all 0.5s;
  }

  .name-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      font-size: 1.1rem;
      color: ${props => props.theme['strong']};
    }

    span {
      font-size: 0.8rem;
    }
  }

  &:hover {
    img {
      box-shadow: 0px 0px 30px 0px ${props => props.theme['secondary']};
      outline: ${props => props.theme['secondary']};
      transition: all 0.5s;
    }
  }
`;
