import { useEffect } from 'react';

import { LabelValue } from '../../../../@types/enums/radio-label';

import { MenuWrapper } from './styles';

import type { ReactElement, ChangeEvent } from 'react';
import type { AboutMenuProps } from '../../../../@types/pages/about-page';

// * ---------------------------------------------------------------------- * //

function AboutMenu({ onValueChange }: AboutMenuProps): ReactElement {
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

      <label htmlFor="radio-about-me">Sobre</label>

      <input
        id="radio-projects"
        type="radio"
        name="menu"
        value={LabelValue.PROJECTS}
        onChange={event => handleSelection(event)}
      />

      <label htmlFor="radio-projects">Projetos</label>

      <input
        id="radio-languages"
        type="radio"
        name="menu"
        value={LabelValue.LANGUAGES}
        onChange={event => handleSelection(event)}
      />

      <label htmlFor="radio-languages">Idiomas</label>

      <input
        id="radio-tech"
        type="radio"
        name="menu"
        value={LabelValue.TECH}
        onChange={event => handleSelection(event)}
      />

      <label htmlFor="radio-tech">Tecnologia</label>
    </MenuWrapper>
  );
}

// * ---------------------------------------------------------------------- * //

export { AboutMenu };
