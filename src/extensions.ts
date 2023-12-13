import type { Locale, Translator, TranslatorChoice } from './translator';

declare global {
  var __i18n_resources: Record<string, string>;
  var __i18n_available: Locale[];
  var __i18n_current: string;
  var __i18n_fallback: string;
}

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $t: Translator;
    $tc: TranslatorChoice;
    $locales: Locale[];
    $fallbackLocale: string;
    $currentLocale: string;
  }
}
