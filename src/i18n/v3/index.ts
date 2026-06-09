import { hu } from './hu';
import { en } from './en';

export type Locale = 'hu' | 'en';
export type T = typeof hu;

export const translations: Record<Locale, T> = { hu, en };

export function t(locale: Locale): T {
  return translations[locale] ?? hu;
}
