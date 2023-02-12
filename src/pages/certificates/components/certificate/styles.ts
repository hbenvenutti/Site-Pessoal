import styled from 'styled-components';

export const CertificateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  img {
    width: 31.25rem;
    height: auto;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 40px;
    height: 40px;

    border-radius: 100%;

    background-color: ${props => props.theme['ignite_node']};
  }

  svg {
    color: white;
    width: 22px;
    height: 22px;
  }

  .certificate-data {
    width: 100%;
    display: flex;
    gap: 2rem;
  }

  .data-list {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
    padding: 1rem;
  }

  .data-item {
    font-size: 1.2rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`;
