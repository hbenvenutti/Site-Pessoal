// import Tilt from 'react-vanilla-tilt';
import { certificates } from '../../shared/providers/certificates';

import { CertificatesPageWrapper } from './styles';
import { CertificateElement } from './components/certificate';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const CertificatesPage = (): ReactElement => {
  // *** --- TSX ---------------------------------------------------------------------------- *** //
  return (
    <CertificatesPageWrapper>
      {certificates.map(certificate => (
        <CertificateElement
          key={certificate.name}
          certificate={certificate}
        />
      ))}
    </CertificatesPageWrapper>
  );
};
