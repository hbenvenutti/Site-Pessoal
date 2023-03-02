/* eslint-disable prettier/prettier */
import { use } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'

import PTBR from './locales/pt/pt.json'
import EN from './locales/en/en.json'
import DEU from './locales/deu/deu.json'
import ITA from './locales/ita/ita.json'
// * ---------------------------------------------------------------------- * //

const detectionOptions = {
  order: [
    'querystring', 
    'cookie', 
    'localStorage', 
    'sessionStorage', 
    'navigator', 
    'htmlTag', 
    'path', 
    'subdomain'
  ]
}

// -------------------------------------------------------------------------- //

const resources = {
  'pt-BR': PTBR,
  en: EN,
  deu: DEU,
  ita: ITA
}

// -------------------------------------------------------------------------- //

export default use(initReactI18next)
  .use(LanguageDetector)
  .init({
    supportedLngs: ['pt-BR', 'en', 'ita', 'deu'],
    resources,
    fallbackLng: 'pt-BR',
    interpolation: {
      escapeValue: false
    },
    detection: detectionOptions,
    cache: ['cookies']
  })

// * ---------------------------------------------------------------------- * //
