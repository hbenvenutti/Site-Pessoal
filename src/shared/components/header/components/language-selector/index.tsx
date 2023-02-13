import { BsGlobe2 } from 'react-icons/bs';
import { useState } from 'react';
import Flag from 'react-world-flags';

import { Languages, LanguageFlag } from '../../../../../@types/enums/languages';

import { LanguageSelectorWrapper } from './styles';

import type { ReactElement, ChangeEvent } from 'react';

// * ------------------------------------------------------------------------------------------ * //

export const LanguageSelector = (): ReactElement => {
  // *** --- States -------------------------------------------------------------------------- *** //
  const [flag, setFlag] = useState<LanguageFlag>(LanguageFlag.PT_BR);

  // *** --- Functions ---------------------------------------------------------------------- *** //
  const handleLanguageSelection = (event: ChangeEvent<HTMLSelectElement>): void => {
    const language: Languages = event.target.value as Languages;

    const flag = LanguageFlag[language];

    setFlag(flag);
  };

  // *** --- TSX ---------------------------------------------------------------------------- *** //
  return (
    <LanguageSelectorWrapper>
      <BsGlobe2 />
      <Flag
        className="flag"
        code={flag}
      />
      <select
        name="languages"
        id="languages"
        onChange={handleLanguageSelection}
      >
        <option value={Languages.PT_BR}>Português</option>
        <option value={Languages.EN}>English</option>
        <option value={Languages.ITA}>Italiano</option>
        <option value={Languages.DEU}>Deutsch</option>
      </select>
    </LanguageSelectorWrapper>
  );
};
