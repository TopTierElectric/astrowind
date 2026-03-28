import { JSONLD, JSONSchema } from 'jsonld-schema-generator';

const localBusinessSchema: JSONSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Your Business Name',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Main St',
    addressLocality: 'Your City',
    addressRegion: 'Your State',
    postalCode: '12345',
    addressCountry: 'US'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.5',
    reviewCount: '100'
  }
};

const serviceSchema: JSONSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Your Service Type',
  provider: localBusinessSchema
};

const faqSchema: JSONSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Your FAQ Question?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Your answer here.'
      }
    }
  ]
};

const articleSchema: JSONSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Your Article Title',
  author: {
    '@type': 'Person',
    name: 'Author Name'
  },
  datePublished: '2026-03-28',
  image: 'URL to image',
  articleBody: 'Main content of the article...'
};

export { localBusinessSchema, serviceSchema, faqSchema, articleSchema };