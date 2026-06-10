import type { T } from './hu';

export const ko: T = {
  meta: {
    title: 'Hancz Marianna — 뷰티 테라피스트 | 부다페스트',
    description: '부다페스트의 프리미엄 코스메틱 트리트먼트. Hancz Marianna 뷰티 테라피스트, QMS 안티에이징 스페셜리스트.',
    lang: 'ko',
  },
  nav: {
    brand: '뷰티테라피스트',
    brandBold: '뷰티',
    links: [
      { label: '트리트먼트', href: '#kezelesek' },
      { label: '소개',       href: '#rolam' },
      { label: '연락처',     href: '#kapcsolat' },
    ],
    cta: '예약',
    ctaAriaLabel: '예약하기',
  },
  hero: {
    eyebrow: '프로페셔널\n피부 케어',
    h1Lines: ['과학의', '힘.', '자연의', '지성.'],
    lead: '당신의 피부 건강과 광채를 위한 맞춤형 트리트먼트.',
    cta1: '예약하기',
    cta2Line1: '트리트먼트',
    cta2Line2: '알아보기',
    videoAlt: '프로페셔널 피부 케어 시연',
  },
  cards: [
    { title: '과학적\n기반',      desc: '입증된 활성 성분, 눈에 보이는 결과.' },
    { title: '맞춤형\n트리트먼트', desc: '모든 피부는 특별하니까.' },
    { title: '프리미엄\n경험',    desc: '현대적 기술, 최대의 편안함.' },
  ],
  develop: {
    eyebrow: '당신의 피부는 그 이상의 가치를 누릴 자격이 있습니다',
    h2: '단순한 케어가 아닙니다.',
    h2em: '개선입니다.',
    body: '당신의 피부와 함께 일하며, 오래도록 최선의 자신이 될 수 있도록 돕습니다.',
  },
  treatments: {
    eyebrow: '트리트먼트',
    h2: '맞춤형 트리트먼트',
    h2em: '당신 피부의',
    h2bold: '진정한',
    h2end: '요구에 맞게.',
    sub: '현대적 기술과 전문성으로 자연스럽고 건강한 광채를 만들어갑니다.',
    categories: [
      {
        title: '페이셜 트리트먼트',
        ariaLabel: '페이셜 트리트먼트 가격',
        desc: '프로페셔널 페이셜 클렌징, 소프트 레이저 및 활성 성분 트리트먼트.',
        items: [
          { name: 'JANSSEN 페이셜 클렌징 (60분)', price: '28 000 HUF' },
          { name: 'JANSSEN 페이셜 클렌징 (80분)', price: '30 000 HUF' },
          { name: '소프트 레이저 트리트먼트 (30분)', price: '24 000 HUF' },
          { name: '소프트 레이저 콤비 (12분)', price: '14 000 HUF' },
          { name: '활성 성분 마사지 (30분)', price: '22 000 HUF' },
          { name: '초음파/vio 콤비', price: '4 000 HUF' },
        ],
      },
      {
        title: '안티에이징',
        ariaLabel: '안티에이징 가격',
        desc: '럭셔리 활성 성분으로 피부 탄력 강화 및 재생 트리트먼트.',
        items: [
          { name: '맞춤형 안티에이징 트리트먼트 (60분)', price: '34 000 HUF부터' },
          { name: '럭셔리 프로페셔널 제품 페이셜 트리트먼트', price: '36 000–56 000 HUF' },
          { name: '메조테라피 (일렉트로포레이터/더마펜) 트리트먼트', price: '36 000–58 000 HUF' },
        ],
      },
      {
        title: '메이크업',
        ariaLabel: '메이크업 가격',
        desc: '메이크업, 속눈썹 및 눈썹 틴팅, 상담.',
        items: [
          { name: '눈썹 / 속눈썹 틴팅', price: '4 000 HUF' },
          { name: '스킨케어 상담', price: '25 000 HUF' },
          { name: '데이 메이크업 / 트라이얼 메이크업', price: '18 000 HUF' },
          { name: '메이크업 상담 및 레슨 (3시간)', price: '55 000 HUF' },
          { name: '특별 행사 / 웨딩 메이크업', price: '상담 후 결정' },
        ],
      },
    ],
  },
  about: {
    eyebrow: '소개',
    h2: '피부 상태는',
    h2em1: '정보입니다.',
    h2mid: '트리트먼트의 목표는 이를',
    h2em2: '이해하는 것.',
    body: '저는 단순한 코스메틱 시술사 이상입니다. 당신의 피부가 진정으로 필요로 하는 것이 무엇인지 이해하고, 장기적으로 건강과 광채를 유지할 수 있는 솔루션을 찾는 것이 저의 목표입니다. 당신의 피부는 생각보다 훨씬 많은 것을 이야기해 줍니다.',
    imgAlt: 'Marianna 포트레이트',
  },
  closing: {
    h2: '함께 시작해요',
    body: '첫 번째 상담은 무료입니다. 당신의 피부에 가장 적합한 트리트먼트를 함께 찾아보세요.',
    cta: '예약하기',
  },
  contact: {
    eyebrow: '연락처',
    h2: '오늘 예약하세요',
    sub: '연락을 기다리고 있습니다. 전화, 이메일 또는 아래 양식으로 메시지를 보내주세요.',
    items: [
      { icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', label: '1126 Budapest, Dolgos utca 2. – 6B 계단동', href: 'https://maps.google.com/?q=1126+Budapest,+Dolgos+utca+2' },
      { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', label: '+36 20 339 3399', href: 'tel:+36203393399' },
      { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', label: 'info@szepsegterapeuta.hu', href: 'mailto:info@szepsegterapeuta.hu' },
      { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', label: '월요일–일요일: 6:00–20:00' },
    ],
    fields: [
      { id: 'name', type: 'text', label: '이름', placeholder: '예: 김수정', required: true },
      { id: 'email', type: 'email', label: '이메일', placeholder: 'anna@example.com', required: true },
      { id: 'message', type: 'textarea', label: '메시지', placeholder: '무엇을 도와드릴까요?', required: true },
    ],
    submit: '보내기',
    netlifyFormName: 'contact-v3-ko',
  },
  footer: {
    brandBold: '뷰티',
    brandRest: '테라피스트',
    tagline: '과학의 힘, 자연의 지성.',
    copy: '© 2026 szepsegterapeuta · Budapest',
    logoAlt: '뷰티 테라피스트 로고',
  },
};
