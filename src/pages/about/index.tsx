import { useState } from 'react';

import { LabelValue } from '../../@types/enums/radio-label';

import { AboutPageWrapper } from './styles';
import { ProjectsArticles } from './components/projects-articles';
import { AboutMenu } from './components/menu/menu';
import { AboutMeArticle } from './components/about-me-article/about-me-article';
import { LanguagesArticle } from './components/languages-article/languages-article';
import { TechsArticle } from './components/techs-article/techs-article';

import type { ReactElement } from 'react';

// * ---------------------------------------------------------------------- * //

function AboutPage(): ReactElement {
  // *** --- States ----------------------------------------------------- *** //
  const [page, setPage] = useState<LabelValue>(LabelValue.ABOUT);

  // *** --- TSX -------------------------------------------------------- *** //
  return (
    <AboutPageWrapper>
      <AboutMenu onValueChange={setPage} />

      {page === LabelValue.PROJECTS && <ProjectsArticles />}
      {page === LabelValue.ABOUT && <AboutMeArticle />}
      {page === LabelValue.LANGUAGES && <LanguagesArticle />}
      {page === LabelValue.TECH && <TechsArticle />}
    </AboutPageWrapper>
  );
}

// * ---------------------------------------------------------------------- * //

export { AboutPage };
