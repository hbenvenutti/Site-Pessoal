// import Tilt from 'react-vanilla-tilt';
import Tilt from 'react-parallax-tilt';
import { useTheme } from 'styled-components';

import node from '../../assets/certificates/node.png';
import efset from '../../assets/certificates/efset.png';

import { CertificatesPageWrapper } from './styles';

import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const CertificatesPage = (): ReactElement => {
  const { secondary02 } = useTheme();

  return (
    <CertificatesPageWrapper>
      <h1>Certificados</h1>

      <div className="certificate">
        <h2>Rocketseat</h2>
        <Tilt
          glareEnable
          glareColor={secondary02}
          glarePosition="all"
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          style={{ width: '31.25rem' }}
        >
          <img
            src={node}
            alt="Certificado: Rocketseat Ignite Node.js"
          />
        </Tilt>
      </div>

      <div className="certificate">
        <h2>EF Set</h2>
        <Tilt
          glareEnable
          glareColor={secondary02}
          glarePosition="all"
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          style={{ width: '31.25rem' }}
        >
          <img
            src={efset}
            alt="Certificado: Rocketseat Ignite Node.js"
          />
        </Tilt>
      </div>
    </CertificatesPageWrapper>
  );
};
