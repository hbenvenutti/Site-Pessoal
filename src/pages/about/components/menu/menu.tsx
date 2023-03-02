import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { LabelValue } from '../../../../@types/enums/radio-label';

import { MenuWrapper } from './styles';

import type { ReactElement, ChangeEvent } from 'react';
import type { AboutMenuProps } from '../../../../@types/pages/about-page';

// * ---------------------------------------------------------------------- * //

function AboutMenu({ onValueChange }: AboutMenuProps): ReactElement {
  const { t } = useTranslation();
  // *** --- Functions -------------------------------------------------- *** //
  function handleSelection(event: ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value as LabelValue;

    onValueChange(value);
  }

  // *** --- Effects ---------------------------------------------------- *** //
  useEffect(() => {
    const radioButton = document.getElementById('radio-about-me') as HTMLInputElement;

    radioButton.checked = true;
  }, []);

  // *** --- TSX -------------------------------------------------------- *** //
  return (
    <MenuWrapper>
      <input
        id="radio-about-me"
        type="radio"
        name="menu"
        value={LabelValue.ABOUT}
        onChange={event => handleSelection(event)}
      />

      <label htmlFor="radio-about-me">{t('about-button-about')}</label>

      <input
        id="radio-projects"
        type="radio"
        name="menu"
        value={LabelValue.PROJECTS}
        onChange={event => handleSelection(event)}
      />

      <label htmlFor="radio-projects">{t('about-button-projects')}</label>

      <input
        id="radio-languages"
        type="radio"
        name="menu"
        value={LabelValue.LANGUAGES}
        onChange={event => handleSelection(event)}
      />

      <label htmlFor="radio-languages">{t('about-button-langs')}</label>

      <input
        id="radio-tech"
        type="radio"
        name="menu"
        value={LabelValue.TECH}
        onChange={event => handleSelection(event)}
      />

      <label htmlFor="radio-tech">{t('about-button-techs')}</label>
    </MenuWrapper>
  );
}

// * ---------------------------------------------------------------------- * //

export { AboutMenu };
