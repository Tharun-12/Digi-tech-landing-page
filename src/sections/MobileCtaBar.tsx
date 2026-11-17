import { MessageCircle, Phone } from 'lucide-react';
import { CONTACT_PHONE_HREF, WHATSAPP_URL } from '../sections/Config';

// Fixed bottom bar, visible on mobile only (hidden from the md breakpoint up)
export default function MobileCtaBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-[70] grid grid-cols-2 shadow-[0_-4px_16px_rgba(0,0,0,0.18)] md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <a
        href={CONTACT_PHONE_HREF}
        className="inline-flex min-h-[48px] items-center justify-center gap-2 bg-brand-600 px-4 py-3 text-sm font-bold text-white transition active:bg-brand-700"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Call us
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-flex min-h-[48px] items-center justify-center gap-2 bg-emerald-700 px-4 py-3 text-sm font-bold text-white transition active:bg-emerald-800"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  );
}