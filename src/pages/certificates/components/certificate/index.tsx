import Tilt from 'react-parallax-tilt';
import { useTheme } from 'styled-components';
import { FaCheckDouble, FaGraduationCap } from 'react-icons/fa';
import { BsCalendarDate, BsPatchCheck } from 'react-icons/bs';

import { CertificateWrapper } from './styles';

import type { ReactElement } from 'react';
import type { CertificateElementProps } from '../../../../@types/certificates';

// * ------------------------------------------------------------------------------------------ * //

export const CertificateElement = ({ certificate }: CertificateElementProps): ReactElement => {
  // *** --- Contexts ----------------------------------------------------------------------- *** //
  const { secondary02 } = useTheme();

  // *** --- Vars --------------------------------------------------------------------------- *** //
  const { institution, name, image, validationLink, date, result } = certificate;

  // *** --- TSX ---------------------------------------------------------------------------- *** //
  return (
    <CertificateWrapper>
      <h2>{institution}</h2>

      <div className="certificate-data">
        <Tilt
          glareEnable
          glareColor={secondary02}
          glarePosition="all"
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          style={{ width: '31.25rem' }}
        >
          <img
            src={image}
            alt="Certificado: Rocketseat Ignite Node.js"
          />
        </Tilt>

        <div className="data-list">
          <a
            href="https://lp.rocketseat.com.br/ignite"
            target="_blank"
            className="data-item"
            rel="noopener noreferrer"
          >
            <span>
              <FaGraduationCap />
            </span>
            <p>{name}</p>
          </a>

          <div
            className="data-item"
            title="Data de Conclusão"
          >
            <span>
              <BsCalendarDate />
            </span>
            <p>{Intl.DateTimeFormat('pt-br').format(date)}</p>
          </div>

          <div
            className="data-item"
            title="Resultado"
          >
            <span>
              <FaCheckDouble />
            </span>
            <p>{result}</p>
          </div>

          <a
            className="data-item"
            href={validationLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>
              <BsPatchCheck />
            </span>
            <p>Link de Validação</p>
          </a>
        </div>
      </div>
    </CertificateWrapper>
  );
};
