import { ImageModalWrapper } from './styles';

import type { ImageModalProps } from '../../../../@types/modal/image-modal';
import type { ReactElement } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const ImageModal = ({ isOpen, source, closeModal }: ImageModalProps): ReactElement => {
  ImageModalWrapper.setAppElement('#root');

  return (
    <ImageModalWrapper
      isOpen={isOpen}
      onRequestClose={closeModal}
      shouldCloseOnOverlayClick
      shouldCloseOnEsc
      overlayClassName="overlay"
      className="content"
    >
      <div
        className="overlay"
        onClick={closeModal}
      />
      <div className="content">
        <img
          src={source}
          alt=""
        />
      </div>
    </ImageModalWrapper>
  );
};
