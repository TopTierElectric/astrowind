export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Electrician',
    name: 'Top Tier Electrical',
    url: 'https://toptier-electrical.com/',
    telephone: '+1-616-334-7159',
    email: 'info@toptier-electrical.com',
    areaServed: [
      'West Michigan',
      'Holland, MI',
      'Grand Rapids, MI',
      'Byron Center, MI',
      'Zeeland, MI',
      'Saugatuck, MI',
      'Hudsonville, MI',
      'Allegan, MI',
    ],
    sameAs: ['https://www.facebook.com/profile.php?id=61573826170938'],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '13:00' },
    ],
  };
}

export function serviceSchema(serviceName: string, serviceDescription: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: serviceName,
    description: serviceDescription,
    provider: {
      '@type': 'Electrician',
      name: 'Top Tier Electrical',
      url: 'https://toptier-electrical.com/',
    },
    areaServed: 'West Michigan',
  };
}

export function faqSchema(questions: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  };
}

export function articleSchema(headline: string, authorName: string, datePublished: string, image: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    author: { '@type': 'Person', name: authorName },
    datePublished,
    image,
    publisher: {
      '@type': 'Organization',
      name: 'Top Tier Electrical',
      url: 'https://toptier-electrical.com/',
    },
  };
}
