import { BsGlobe2 } from 'react-icons/bs';
import { changeLanguage } from 'i18next';

import { supportedLanguages } from '../../../../hooks/translation/supported-languages';

import { LanguageSelectorWrapper } from './styles';

import type { Languages } from '../../../../../@types/enums/languages';
import type { ReactElement, ChangeEvent } from 'react';

// * ---------------------------------------------------------------------- * //

function LanguageSelector(): ReactElement {
  // *** --- States ----------------------------------------------------- *** //

  // *** --- Functions -------------------------------------------------- *** //
  function handleLangSelection(event: ChangeEvent<HTMLSelectElement>): void {
    const lang: Languages = event.target.value as Languages;

    void changeLanguage(lang);

    return;
  }

  // *** --- TSX -------------------------------------------------------- *** //
  return (
    <LanguageSelectorWrapper>
      <BsGlobe2 />

      <select
        name="languages"
        id="languages"
        onChange={e => handleLangSelection(e)}
      >
        {supportedLanguages.map(lang => (
          <option
            key={lang.code}
            value={lang.code}
          >
            {lang.name}
          </option>
        ))}
      </select>
    </LanguageSelectorWrapper>
  );
}

// * ---------------------------------------------------------------------- * //

export { LanguageSelector };
