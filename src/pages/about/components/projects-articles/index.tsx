import { useState } from 'react';
import { FaYoutube } from 'react-icons/fa';

import DemenLogo from '../../../../assets/demen.svg';

import { LeftButton, ProjectsArticlesWrapper, RightButton } from './styles';
import { DemenArticle } from './demen-article';
import { ChannelArticle } from './channel-article';

import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function ProjectsArticles(): ReactElement {
  // *** --- States ----------------------------------------------------- *** //
  const [article, setArticle] = useState(0);
  const [isLeftButtonActive, setLeftButtonActive] = useState(true);
  const [isRightButtonActive, setRightButtonActive] = useState(false);

  // *** --- Functions -------------------------------------------------- *** //
  function onRightButtonClick(): void {
    setArticle(1);
    setRightButtonActive(true);
    setLeftButtonActive(false);
  }

  // ------------------------------------------------------------------------ //

  function onLeftButtonClick(): void {
    setArticle(0);
    setRightButtonActive(false);
    setLeftButtonActive(true);
  }

  // *** --- TSX -------------------------------------------------------- *** //
  return (
    <ProjectsArticlesWrapper>
      <div className="buttons-wrapper">
        <LeftButton
          type="button"
          onClick={onLeftButtonClick}
          isActive={isLeftButtonActive}
        >
          <FaYoutube />
          Canal
        </LeftButton>

        <RightButton
          type="button"
          onClick={onRightButtonClick}
          isActive={isRightButtonActive}
        >
          <img
            src={DemenLogo}
            alt=""
          />
          Demen
        </RightButton>
      </div>
      {article === 0 ? <ChannelArticle /> : <DemenArticle />}
    </ProjectsArticlesWrapper>
  );
}

// * ---------------------------------------------------------------------- * //

export { ProjectsArticles };
