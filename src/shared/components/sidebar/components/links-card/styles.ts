import styled from 'styled-components';

import { cardBase } from '../styles/card-base';

// * ------------------------------------------------------------------------------------------ * //

export const LinksCardWrapper = styled(cardBase)`
  align-items: left;
  gap: 0.5rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    transition: all 0.2s;

    padding: 0.5rem 0;

    border-bottom: solid 2px transparent;
  }

  a:hover {
    color: ${props => props.theme['secondary']};
    border-bottom: solid 2px ${props => props.theme['secondary']};
    transition: all 0.2s;

    svg {
      color: ${props => props.theme['secondary02']};

      transition: color 0.2s;
    }
  }

  svg {
    width: 2rem;
    height: auto;
    color: ${props => props.theme['secondary']};

    transition: color 0.2s;
  }
`;
