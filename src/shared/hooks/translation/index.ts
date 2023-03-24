/* eslint-disable prettier/prettier */
import { use } from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'

import { resources } from './resources';

// * ---------------------------------------------------------------------- * //

const detectionOptions = {
  order: [
    // 'localStorage', 
    'sessionStorage', 
    'navigator',
    // 'htmlTag', 
    // 'path', 
    // 'subdomain'
  ],
  caches: ['sessionStorage']
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
  })

// * ---------------------------------------------------------------------- * //
