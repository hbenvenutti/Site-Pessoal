import styled from 'styled-components';

// * ------------------------------------------------------------------------------------------ * //

export const SidebarWrapper = styled.aside`
  position: sticky;
  top: 0;

  display: flex;
  flex-direction: column;
  width: 20rem;
  gap: 1.875rem;

  @media (max-width: 1450px) {
    border-top: 2px solid ${props => props.theme['secondary02']};
    padding-top: 3.75rem;
  }
`;
