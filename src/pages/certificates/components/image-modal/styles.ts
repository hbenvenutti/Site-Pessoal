import ReactModal from 'react-modal';
import styled from 'styled-components';

// * ------------------------------------------------------------------------------------------ * //

export const ImageModalWrapper = styled(ReactModal)`
  .overlay {
    z-index: 2;
    top: 0;
    position: fixed;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
  }

  .content {
    position: fixed;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    z-index: 3;
    margin: auto;

    width: fit-content;
    height: 85%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    height: 100%;
    width: auto;
  }

  @media (max-width: 1450px) {
    .content {
      width: 85%;
      height: fit-content;

      img {
        height: auto;
        width: 100%;
      }
    }
  }
`;
