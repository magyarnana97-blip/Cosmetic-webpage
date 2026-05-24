// src/i18n/utils.ts
// Nyelvkezelő segédfájl — NE módosíts itt, csak a JSON fájlokban!

export const SUPPORTED_LOCALES = ['hu', 'en', 'ja', 'ko'] as const;
export type Locale = typeof SUPPORTED_LOCALES[number];
export const DEFAULT_LOCALE: Locale = 'hu';

import hu from './hu.json';
import en from './en.json';

const translations: Record<string, any> = { hu, en };

export function t(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale] ?? translations[DEFAULT_LOCALE];
  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) {
      console.warn(`[i18n] Hiányzó kulcs: "${key}" (${locale})`);
      return key;
    }
  }
  return typeof value === 'string' ? value : JSON.stringify(value);
}

export function getSection<T>(locale: Locale, section: string): T {
  const data = translations[locale] ?? translations[DEFAULT_LOCALE];
  return data[section] as T;
}

export function localePath(locale: Locale, path: string = ''): string {
  const prefix = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  return `${prefix}${path || '/'}`;
}