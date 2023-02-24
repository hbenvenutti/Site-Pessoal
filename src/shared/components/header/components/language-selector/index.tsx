import { BsGlobe2 } from 'react-icons/bs';

import { Languages } from '../../../../../@types/enums/languages';

import { LanguageSelectorWrapper } from './styles';

import type { ReactElement, ChangeEvent } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const LanguageSelector = (): ReactElement => {
  // *** --- States -------------------------------------------------------------------------- *** //

  // *** --- Functions ---------------------------------------------------------------------- *** //
  const handleLanguageSelection = (_event: ChangeEvent<HTMLSelectElement>): void => {
    // const language: Languages = event.target.value as Languages;

    return;
  };

  // *** --- TSX ---------------------------------------------------------------------------- *** //
  return (
    <LanguageSelectorWrapper>
      <BsGlobe2 />

      <select
        name="languages"
        id="languages"
        onChange={handleLanguageSelection}
      >
        <option value={Languages.PT_BR}>🇧🇷 Português</option>
        <option value={Languages.EN}>🇬🇧 English</option>
        <option value={Languages.ITA}>🇮🇹 Italiano</option>
        <option value={Languages.DEU}>🇩🇪 Deutsch</option>
      </select>
    </LanguageSelectorWrapper>
  );
};
