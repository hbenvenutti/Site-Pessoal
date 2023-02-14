import Tilt from 'react-parallax-tilt';
import { useTheme } from 'styled-components';
import { FaCheckDouble, FaGraduationCap } from 'react-icons/fa';
import { BsCalendarDate, BsPatchCheck } from 'react-icons/bs';
import { useState } from 'react';

import { ImageModal } from '../image-modal';

import { CertificateWrapper } from './styles';

import type { ReactElement, MouseEvent } from 'react';
import type { CertificateElementProps } from '../../../../@types/certificates';

// * ------------------------------------------------------------------------------------------ * //

export const CertificateElement = ({ certificate }: CertificateElementProps): ReactElement => {
  // *** --- Contexts ----------------------------------------------------------------------- *** //
  const theme = useTheme();

  // *** --- States ------------------------------------------------------------------------- *** //
  const [isModalOpen, setModalOpenness] = useState(false);
  const [modalImage, setModalImage] = useState('');

  // *** --- Vars --------------------------------------------------------------------------- *** //
  const { institution, name, image, validationLink, date, result, spanColor } = certificate;

  // *** --- Functions ---------------------------------------------------------------------- *** //
  const handleModalOpening = (event: MouseEvent<HTMLImageElement>): void => {
    const source = event.currentTarget.src;

    setModalImage(source);
    setModalOpenness(true);
  };

  // -------------------------------------------------------------------------------------------- //
  const handleModalClosure = (): void => {
    setModalOpenness(false);
  };

  // *** --- TSX ---------------------------------------------------------------------------- *** //
  return (
    <CertificateWrapper spanColor={spanColor}>
      <h2>{institution}</h2>

      <div className="certificate-data">
        <Tilt
          className="tilt"
          glareEnable
          glareColor={theme[spanColor]}
          glarePosition="all"
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          style={{ display: 'flex' }}
        >
          <img
            src={image}
            alt={`Certificado: ${name}`}
            onClick={handleModalOpening}
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

      <ImageModal
        isOpen={isModalOpen}
        source={modalImage}
        closeModal={handleModalClosure}
      />
    </CertificateWrapper>
  );
};
