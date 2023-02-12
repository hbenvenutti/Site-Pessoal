import styled from 'styled-components';

import { cardBase } from '../styles/card-base';

// * ------------------------------------------------------------------------------------------ * //

export const LinksCardWrapper = styled(cardBase)`
  align-items: left;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.8rem;
    transition: color 0.2s;
  }

  a:hover {
    color: ${props => props.theme['secondary02']};
    transition: color 0.2s;

    svg {
      color: ${props => props.theme['secondary01']};

      transition: color 0.2s;
    }
  }

  svg {
    width: 2rem;
    height: auto;
    color: ${props => props.theme['secondary02']};

    transition: color 0.2s;
  }
`;
