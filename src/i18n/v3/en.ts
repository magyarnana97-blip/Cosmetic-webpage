import type { T } from './hu';

export const en: T = {
  meta: {
    title: 'Marianna Hancz — Beauty Therapist | Budapest',
    description: 'Premium cosmetic treatments in Budapest. Marianna Hancz beauty therapist, QMS Anti-aging specialist.',
    lang: 'en',
  },
  nav: {
    brand: 'beautytherapist',
    brandBold: 'beauty',
    links: [
      { label: 'Treatments', href: '#kezelesek' },
      { label: 'About',      href: '#rolam' },
      { label: 'Contact',    href: '#kapcsolat' },
    ],
    cta: 'Book',
    ctaAriaLabel: 'Book an appointment',
  },
  hero: {
    eyebrow: 'Professional\nskincare',
    h1Lines: ['The power', 'of science.', 'The intelligence', 'of nature.'],
    lead: 'Personalised treatments for the health and radiance of your skin.',
    cta1: 'Book an appointment',
    cta2Line1: 'Explore',
    cta2Line2: 'treatments',
    videoAlt: 'Professional skincare demonstration',
  },
  cards: [
    { title: 'Scientific\nbacking',          desc: 'Proven active ingredients, visible results.' },
    { title: 'Personalised\ntreatment',      desc: 'Because every skin is unique.' },
    { title: 'Premium\nexperience',          desc: 'Modern technology, maximum comfort.' },
  ],
  develop: {
    eyebrow: 'Your skin deserves it',
    h2: "I don't just treat.",
    h2em: 'I improve.',
    body: 'I work with your skin so you can be the best version of yourself long-term.',
  },
  treatments: {
    eyebrow: 'Treatments',
    h2: 'Personalised treatments',
    h2em: "for your skin's",
    h2bold: 'real',
    h2end: 'needs.',
    sub: 'I work with modern technology and expertise for natural, healthy radiance.',
    categories: [
      {
        title: 'Facial treatments',
        ariaLabel: 'Facial treatment prices',
        desc: 'Professional facial cleansing, soft laser and active ingredient treatments.',
        items: [
          { name: 'JANSSEN prof. facial cleansing (60 min)',           price: '28 000 HUF' },
          { name: 'JANSSEN prof. facial cleansing (80 min)',           price: '30 000 HUF' },
          { name: 'Soft laser treatment (30 min)',                     price: '24 000 HUF' },
          { name: 'Soft laser built into treatment (12 min)',          price: '14 000 HUF' },
          { name: 'Active ingredient massage (30 min)',                price: '22 000 HUF' },
          { name: 'Ultrasound/vio built into treatment',               price: '4 000 HUF' },
        ],
      },
      {
        title: 'Anti-aging',
        ariaLabel: 'Anti-aging prices',
        desc: 'Skin-firming, regenerating treatments with luxury active ingredients.',
        items: [
          { name: 'Personalised anti-aging treatments (60 min)',       price: 'from 34 000 HUF' },
          { name: 'Facial with luxury professional products',          price: '36 000–56 000 HUF' },
          { name: 'Mesotherapy (electroporator/dermapen) treatments',  price: '36 000–58 000 HUF' },
        ],
      },
      {
        title: 'Make-up',
        ariaLabel: 'Make-up prices',
        desc: 'Make-up, eyelash and eyebrow tinting, consultation.',
        items: [
          { name: 'Eyebrow / eyelash tinting',              price: '4 000 HUF' },
          { name: 'Skincare consultation',                  price: '25 000 HUF' },
          { name: 'Daytime make-up / trial make-up',        price: '18 000 HUF' },
          { name: 'Make-up consultation & lesson (3 hrs)',  price: '55 000 HUF' },
          { name: 'Occasion / wedding make-up',            price: 'by arrangement' },
        ],
      },
    ],
  },
  about: {
    eyebrow: 'About me',
    h2: 'Skin condition is',
    h2em1: 'information.',
    h2mid: 'The goal of treatment is to',
    h2em2: 'understand it.',
    body: 'I offer more than treatments. My goal is to understand what your skin truly needs and find a solution that supports its health and natural radiance long-term. Your skin can tell you more about yourself than you might think.',
    imgAlt: 'Marianna portrait',
  },
  closing: {
    h2: "Let's start together",
    body: "Your first consultation is free. Let's find the treatment that suits your skin best.",
    cta: 'Book an appointment',
  },
  contact: {
    eyebrow: 'Contact',
    h2: 'Book an appointment today',
    sub: 'I look forward to hearing from you. Call, email, or send a message using the form below.',
    items: [
      { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', label: '1126 Budapest, Dolgos utca 2. – Staircase 6B' },
      { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', label: '+36 20 339 3399' },
      { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'info@szepsegterapeuta.hu' },
      { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', label: 'Monday–Sunday: 6:00–20:00' },
    ],
    fields: [
      { id: 'name',    type: 'text',     label: 'Your name',         placeholder: 'e.g. Anna Smith',   required: true },
      { id: 'email',   type: 'email',    label: 'Your email',        placeholder: 'anna@example.com',   required: true },
      { id: 'message', type: 'textarea', label: 'Your message',      placeholder: 'How can I help you?', required: true },
    ],
    submit: 'Send',
    netlifyFormName: 'contact-v3-en',
  },
  footer: {
    brandBold: 'beauty',
    brandRest: 'therapist',
    tagline: 'The power of science, the intelligence of nature.',
    copy: '© 2026 szepsegterapeuta · Budapest',
    logoAlt: 'Beauty therapist logo',
  },
};
