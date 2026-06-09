/**
 * src/i18n/v3/index.ts
 * ─────────────────────────────────────────────────────────────
 * Centrális i18n core. IDE barát, AI barát, típusbiztos.
 *
 * Használat:
 *   import { t, localePath, getLocaleFromUrl, LOCALES } from '../i18n/v3';
 *   const tr = t('hu');
 *   const path = localePath('en', '/blog');
 */

import { hu } from './hu';
import { en } from './en';
import { ja } from './ja';
import { ko } from './ko';

// ── Típusok ──────────────────────────────────────────────────────

/** Az összes támogatott locale. Ide kell felvenni az új nyelveket. */
export const LOCALES = ['hu', 'en', 'ja', 'ko'] as const;
export type Locale = typeof LOCALES[number];

/** Az alapértelmezett locale — ez jelenik meg a gyökér URL-en (/). */
export const DEFAULT_LOCALE: Locale = 'hu';

/** A fordítás típusa — mindig a hu.ts a master, a többi ehhez igazodik. */
export type T = typeof hu;

// ── Fordítások ─────────────────────────────────────────────────────

/**
 * Fordítási táblázat.
 * Minden locale le van fordítva.
 */
const translations: Record<Locale, T> = {
  hu,
  en,
  ja,
  ko,
};

// ── Fő függvények ───────────────────────────────────────────────────

/**
 * Visszaadja az adott locale teljes fordítási objektumát.
 * Ha a locale nem ismert, a DEFAULT_LOCALE-t adja vissza.
 *
 * @example
 *   const tr = t('en');
 *   tr.nav.cta // → 'Book'
 */
export function t(locale: string): T {
  return translations[locale as Locale] ?? translations[DEFAULT_LOCALE];
}

/**
 * URL-barát locale prefix generátor.
 * A DEFAULT_LOCALE-nak nincs prefixe (gyökér URL-en él).
 *
 * @example
 *   localePath('hu')        // → '/'
 *   localePath('en')        // → '/en'
 *   localePath('en', '/blog') // → '/en/blog'
 */
export function localePath(locale: Locale, path: string = '/'): string {
  const base = locale === DEFAULT_LOCALE ? '' : `/${locale}`;
  const suffix = path === '/' ? '' : path;
  return `${base}${suffix}` || '/';
}

/**
 * Kiolvas egy Locale értéket egy Astro URL objektumból.
 * Az URL első path szegmensét vizsgálja (/en/... → 'en').
 * Ha nem ismert prefix, DEFAULT_LOCALE-t ad vissza.
 *
 * @example
 *   // URL: https://szepsegterapeuta.hu/en/blog
 *   getLocaleFromUrl(Astro.url) // → 'en'
 *
 *   // URL: https://szepsegterapeuta.hu/
 *   getLocaleFromUrl(Astro.url) // → 'hu'
 */
export function getLocaleFromUrl(url: URL): Locale {
  const [, first] = url.pathname.split('/');
  return (LOCALES as readonly string[]).includes(first)
    ? (first as Locale)
    : DEFAULT_LOCALE;
}

/**
 * Visszaadja az összes locale-hoz tartozó URL-t egy adott path-hoz.
 * Hasznos hreflang és nyelvváltó generálásához.
 *
 * @example
 *   alternateUrls('/blog')
 *   // → { hu: '/', en: '/en', ja: '/ja', ko: '/ko' }
 */
export function alternateUrls(path: string = '/'): Record<Locale, string> {
  return Object.fromEntries(
    LOCALES.map(locale => [locale, localePath(locale, path)])
  ) as Record<Locale, string>;
}
