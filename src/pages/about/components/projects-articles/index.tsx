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
      <div className="chapter">
        <h2>Planos e Projetos Pessoais</h2>
        <article>
          <p>
            Eu me sinto muito atraído pela área de educação, acho que quanto mais conteúdo gratuito
            e de qualidade disponível, melhor. Não sou contra conteúdo pago, mas acho que devem
            existir alternativas de qualidade criadas pela comunidade para pessoas autodidatas que
            não tem condição de pagar por uma educação de qualidade. Tenho como inspiração a
            comunidade de software livre, que cria aplicações de qualidade e disponíveis para todos.
          </p>
        </article>
      </div>

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
