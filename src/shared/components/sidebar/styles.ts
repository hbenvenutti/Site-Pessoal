import styled from 'styled-components';

// * ------------------------------------------------------------------------------------------ * //

export const SidebarWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  width: 18.75rem;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.875rem;

    border-radius: 6px;
    background-color: ${props => props.theme['card']};
    padding: 50px;
  }

  img {
    width: 8rem;
    height: 8rem;
    border-radius: 100%;
    border: 2px solid ${props => props.theme['primary01']};
  }

  .name-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
      font-size: 1.1rem;
    }

    span {
      font-size: 0.8rem;
    }
  }
`;
