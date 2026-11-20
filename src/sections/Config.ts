
export const WHATSAPP_NUMBER = '916364833139';
export const WHATSAPP_MESSAGE = 'Hi iiiQBets, I would like to discuss my business requirements.';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const SERVICE_OPTIONS = [
  'Digital Marketing',
  'Search Engine Optimization (SEO)',
  'Website Design & Development',
  'UI/UX Design',
  'Branding & Creative Design',
  'Content & Video Creation',
  'Social Media Management',
  'Paid Advertising & Lead Generation',
  'WhatsApp Business Automation',
  'CRM & Business Automation',
  'Business Growth Solutions',
  'End-to-End Digital Ecosystem',
  'Not sure yet',
];

// Ordered list of contact numbers — first is primary, rest are fallbacks
export const CONTACT_PHONES = [
  { display: '+91 94481 13616', href: 'tel:+919448113616', label: 'Primary' },
  { display: '+91 99865 13214', href: 'tel:+919986513214', label: 'Alternate' },
] as const;

// Backward-compatible helpers (kept so existing imports don't break)
export const CONTACT_PHONE_DISPLAY = CONTACT_PHONES.map((p) => p.display).join(', ');
export const CONTACT_PHONE_HREF = CONTACT_PHONES[0].href;

export const CONTACT_EMAIL = 'contact@iiiqbets.com';
export const CONTACT_ADDRESS = 'Your office address here';