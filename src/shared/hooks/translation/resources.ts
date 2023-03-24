import deuAbout from './locales/deu/about.json';
import deuCommon from './locales/deu/common.json';
import enAbout from './locales/en/about';
import enCommon from './locales/en/common.json';
import itaAbout from './locales/ita/about';
import itaCommon from './locales/ita/common.json';
import ptAbout from './locales/pt/about';
import ptCommon from './locales/pt/common.json';

// * ---------------------------------------------------------------------- * //

const resources = {
  'pt-BR': {
    common: ptCommon,
    about: ptAbout
  },

  en: {
    common: enCommon,
    about: enAbout
  },

  deu: {
    common: deuCommon,
    about: deuAbout
  },

  ita: {
    common: itaCommon,
    about: itaAbout
  }
};

// * ---------------------------------------------------------------------- * //

export { resources };
