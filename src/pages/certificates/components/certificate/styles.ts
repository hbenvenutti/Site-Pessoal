import styled from 'styled-components';

import type { CertificateSpanColor } from '../../../../@types/enums/certificates.enum';

interface CertificateWrapperProps {
  spanColor: CertificateSpanColor;
}

export const CertificateWrapper = styled.div<CertificateWrapperProps>`
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

    width: 2.5rem;
    height: 2.5rem;

    border-radius: 100%;

    background-color: ${props => props.theme[props.spanColor]};
  }

  svg {
    color: white;
    width: 1.375rem;
    height: 1.375rem;
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

    p {
      flex: 1;
    }
  }

  .data-item {
    font-size: 1.2rem;
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  @media (max-width: 1450px) {
    div.certificate-data {
      display: flex;
      flex-direction: column;
    }

    .tilt {
      width: 90%;
    }

    img {
      width: 100%;
    }

    div.data-list {
      padding: 0.5rem;
      overflow: scroll;
    }
  }
`;
