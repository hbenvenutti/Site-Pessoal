import styled from 'styled-components';

import { cardBase } from '../styles/card-base';

// * ------------------------------------------------------------------------------------------ * //

export const TechCardWrapper = styled(cardBase)`
  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    /* column-gap: 2.5rem; */
    row-gap: 2rem;
  }

  h3 {
    color: ${props => props.theme['strong']};
  }

  svg {
    width: 2.5rem;
    height: auto;
    color: ${props => props.theme['secondary']};
    transition: color 0.2s;
  }

  svg:hover {
    cursor: help;
    color: ${props => props.theme['secondary02']};
    transition: color 0.2s;
  }
`;
