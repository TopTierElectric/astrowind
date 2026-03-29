import { getPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    { text: 'Home', href: getPermalink('/') },
    {
      text: 'Services',
      href: getPermalink('/services'),
      links: [
        { text: 'All Services', href: getPermalink('/services') },
        { text: 'Panel Upgrades', href: getPermalink('/panel-upgrades') },
        { text: 'EV Chargers', href: getPermalink('/ev-chargers') },
        { text: 'Lighting', href: getPermalink('/lighting') },
        { text: 'Generators', href: getPermalink('/generators') },
        { text: 'Electrical Repairs', href: getPermalink('/electrical-repairs') },
        { text: 'Energy Solutions', href: getPermalink('/energy-solutions') },
        { text: 'Energy Consulting', href: getPermalink('/energy-consulting') },
        { text: 'Emergency', href: getPermalink('/emergency') },
      ],
    },
    { text: 'Residential', href: getPermalink('/residential') },
    { text: 'Commercial', href: getPermalink('/commercial') },
    { text: 'Gallery', href: getPermalink('/gallery') },
    { text: 'Blog', href: getPermalink('/blog') },
    { text: 'Service Areas', href: getPermalink('/service-areas') },
    { text: 'Contact', href: getPermalink('/contact') },
  ],
  actions: [
    { text: 'Call / Text (616) 334-7159', href: 'tel:+16163347159' },
    { text: 'Request Scheduling', href: getPermalink('/booking') },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Services',
      links: [
        { text: 'Panel Upgrades', href: getPermalink('/panel-upgrades') },
        { text: 'EV Chargers', href: getPermalink('/ev-chargers') },
        { text: 'Lighting', href: getPermalink('/lighting') },
        { text: 'Generators', href: getPermalink('/generators') },
        { text: 'Electrical Repairs', href: getPermalink('/electrical-repairs') },
        { text: 'Energy Solutions', href: getPermalink('/energy-solutions') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Gallery', href: getPermalink('/gallery') },
        { text: 'Testimonials', href: getPermalink('/testimonials') },
        { text: 'Blog', href: getPermalink('/blog') },
        { text: 'FAQ', href: getPermalink('/faq') },
        { text: 'Financing', href: getPermalink('/financing') },
      ],
    },
    {
      title: 'Contact',
      links: [
        { text: '(616) 334-7159', href: 'tel:+16163347159' },
        { text: 'info@toptier-electrical.com', href: 'mailto:info@toptier-electrical.com' },
        { text: 'Mon–Fri 8am–6pm · Sat 9am–1pm', href: '#' },
        { text: 'MI License #6220430', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    {
      ariaLabel: 'Facebook',
      icon: 'tabler:brand-facebook',
      href: 'https://www.facebook.com/profile.php?id=61573826170938',
    },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `© ${new Date().getFullYear()} Top Tier Electrical. All rights reserved.`,
};
